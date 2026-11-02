/**
 * Ứng dụng thi trực tuyến: 40 câu viết lại câu Tiếng Anh 8 - Giữa Kỳ 1 (Câu 41 - 80)
 * Thời gian: 20 phút | Tự động nộp | Chấm điểm thông minh | Giải thích chi tiết
 */

(function () {
  "use strict";

  // Cấu hình thời gian làm bài (20 phút = 1200 giây)
  const TOTAL_DURATION_SECONDS = 20 * 60;
  const STORAGE_KEY = "TA8_GK1_EXAM_STATE_V1";

  // Trạng thái bài thi
  let state = {
    timeLeft: TOTAL_DURATION_SECONDS,
    isRunning: true,
    isSubmitted: false,
    soundEnabled: true,
    userAnswers: {}, // { 41: "takes me 20 minutes...", 42: "..." }
    results: null, // { score10, correctCount, total, details: {} }
    activeFilter: "all" // "all" | "correct" | "incorrect"
  };

  let timerInterval = null;

  // DOM Elements
  const timerDisplay = document.getElementById("timerDisplay");
  const timerBox = document.getElementById("timerBox");
  const answeredCountEl = document.getElementById("answeredCount");
  const progressBar = document.getElementById("progressBar");
  const questionsContainer = document.getElementById("questionsContainer");
  const paletteContainer = document.getElementById("paletteContainer");
  const resultBanner = document.getElementById("resultBanner");
  const submitBtn = document.getElementById("submitBtn");
  const resetBtn = document.getElementById("resetBtn");
  const printBtn = document.getElementById("printBtn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const soundToggleBtn = document.getElementById("soundToggleBtn");

  // Modals
  const submitConfirmModal = document.getElementById("submitConfirmModal");
  const confirmSubmitBtn = document.getElementById("confirmSubmitBtn");
  const cancelSubmitBtn = document.getElementById("cancelSubmitBtn");
  const modalMessage = document.getElementById("modalMessage");

  // Web Audio Context cho âm thanh thông báo
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) audioCtx = new AudioCtxClass();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "warning") {
        // Cảnh báo thời gian: 2 tiếng bíp
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(880, now + 0.1);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === "submit") {
        // Âm thanh hoàn thành: hợp âm vui tươi
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.12); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.24); // G5
        osc.frequency.setValueAtTime(1046.50, now + 0.36); // C6
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        osc.start(now);
        osc.stop(now + 0.6);
      }
    } catch (e) {
      console.warn("Không thể phát âm thanh:", e);
    }
  }

  // Khởi động
  function init() {
    loadSavedState();
    renderQuestions();
    renderPalette();
    updateStats();
    setupEventListeners();
    applyThemePreference();

    if (!state.isSubmitted) {
      startTimer();
    } else {
      displayResults();
    }
  }

  // Khởi tạo giao diện câu hỏi
  function renderQuestions() {
    questionsContainer.innerHTML = "";

    window.questionsData.forEach((q, index) => {
      const card = document.createElement("div");
      card.className = "question-card";
      card.id = `q-card-${q.id}`;
      card.dataset.qid = q.id;

      const currentVal = state.userAnswers[q.id] || "";
      if (currentVal.trim().length > 0) {
        card.classList.add("answered");
      }

      // Xác định topic dựa trên ngữ pháp
      const topic = getGrammarTopic(q.id);

      card.innerHTML = `
        <div class="q-header">
          <div class="q-number-wrap">
            <span class="q-number">Câu ${q.id}</span>
            <span class="q-topic">${topic}</span>
          </div>
          <span class="q-status-badge ${currentVal.trim() ? "filled" : "pending"}" id="badge-${q.id}">
            ${currentVal.trim() ? "Đã làm" : "Chưa làm"}
          </span>
        </div>

        <div class="q-original">
          <div class="q-original-label">Câu gốc:</div>
          <div class="q-original-text">${escapeHtml(q.original)}</div>
        </div>

        <div class="q-prompt-wrap">
          <div class="q-prompt-starter">
            <span>Viết lại câu bắt đầu bằng:</span>
            <span class="starter-pill">${escapeHtml(q.starter)} ...</span>
          </div>
          <div class="q-input-group">
            <input 
              type="text" 
              class="q-input" 
              id="input-${q.id}" 
              placeholder="Gõ phần còn lại hoặc cả câu hoàn chỉnh..." 
              value="${escapeHtml(currentVal)}" 
              autocomplete="off"
              spellcheck="false"
              ${state.isSubmitted ? "disabled" : ""}
            />
          </div>
        </div>

        <div class="q-review-panel" id="review-${q.id}" style="display: none;"></div>
      `;

      questionsContainer.appendChild(card);
    });
  }

  function getGrammarTopic(id) {
    if ([41, 42, 63, 70, 79].includes(id)) return "Cấu trúc Spend / Take";
    if ([43, 44, 45, 60, 71, 72, 80].includes(id)) return "Cụm từ chỉ sở thích / Cảm xúc";
    if ([47, 48, 61, 62, 73, 74].includes(id)) return "Cấu trúc So sánh";
    if ([49, 51, 52, 66, 75].includes(id)) return "Mệnh đề Nguyên nhân - Kết quả";
    if ([50, 53, 64, 65, 77].includes(id)) return "Mệnh đề Nhượng bộ & Liên từ";
    if ([54, 55, 67, 68, 78].includes(id)) return "Mệnh đề & Cụm từ chỉ Mục đích";
    if ([56, 57].includes(id)) return "Cấu trúc Dự định tương lai";
    if ([58, 59, 69, 76].includes(id)) return "Cấu trúc Prefer / Would rather";
    return "Viết lại câu";
  }

  // Khởi tạo bảng danh sách số câu (Palette bên phải)
  function renderPalette() {
    paletteContainer.innerHTML = "";

    window.questionsData.forEach((q) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "palette-btn";
      btn.id = `palette-btn-${q.id}`;
      btn.textContent = q.id;
      btn.title = `Chuyển tới câu ${q.id}`;

      if (state.userAnswers[q.id] && state.userAnswers[q.id].trim().length > 0) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => {
        scrollToQuestion(q.id);
      });

      paletteContainer.appendChild(btn);
    });
  }

  function scrollToQuestion(qid) {
    const card = document.getElementById(`q-card-${qid}`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = document.getElementById(`input-${qid}`);
      if (input && !state.isSubmitted) {
        setTimeout(() => input.focus(), 350);
      }
      card.classList.add("focused");
      setTimeout(() => card.classList.remove("focused"), 1200);
    }
  }

  // Đồng hồ đếm ngược 20 phút
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    updateTimerDisplay();

    timerInterval = setInterval(() => {
      if (state.timeLeft > 0) {
        state.timeLeft--;
        updateTimerDisplay();
        saveState();

        // Cảnh báo khi còn đúng 5 phút (300s)
        if (state.timeLeft === 300) {
          playSound("warning");
        }

        // Cảnh báo khi còn đúng 1 phút (60s)
        if (state.timeLeft === 60) {
          playSound("warning");
        }
      } else {
        // Hết 20 phút -> Tự động nộp bài
        clearInterval(timerInterval);
        submitExam(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(state.timeLeft / 60);
    const seconds = state.timeLeft % 60;
    const formatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timerDisplay.textContent = formatted;

    // Đổi màu sắc cảnh báo
    if (state.timeLeft <= 60) {
      timerBox.className = "timer-box danger";
    } else if (state.timeLeft <= 300) {
      timerBox.className = "timer-box warning";
    } else {
      timerBox.className = "timer-box";
    }
  }

  // Cập nhật số câu đã làm và thanh tiến trình
  function updateStats() {
    const total = window.questionsData.length;
    let answered = 0;

    window.questionsData.forEach((q) => {
      const val = state.userAnswers[q.id];
      if (val && val.trim().length > 0) {
        answered++;
      }
    });

    answeredCountEl.textContent = answered;
    const percentage = Math.round((answered / total) * 100);
    progressBar.style.width = `${percentage}%`;
  }

  // Thuật toán chuẩn hóa và kiểm tra câu thông minh
  function normalizeText(text) {
    if (!text) return "";
    return text
      .toLowerCase()
      .trim()
      // Thay thế dấu ngoặc hoặc các ký tự đặc biệt không cần thiết
      .replace(/[\(\)\[\]]/g, "")
      // Bỏ dấu chấm, dấu chấm than, dấu hỏi ở cuối câu
      .replace(/[.!?]+$/, "")
      // Bỏ dấu phẩy ở cuối câu nếu lỡ gõ
      .replace(/,+$/, "")
      // Chuẩn hóa dấu chấm phẩy và dấu phẩy (bỏ khoảng cách thừa trước sau)
      .replace(/\s*;\s*/g, "; ")
      .replace(/\s*,\s*/g, ", ")
      // Chuẩn hóa viết tắt phổ biến trong tiếng Anh
      .replace(/\bdid not\b/g, "didn't")
      .replace(/\bdoes not\b/g, "doesn't")
      .replace(/\bdo not\b/g, "don't")
      .replace(/\bwas not\b/g, "wasn't")
      .replace(/\bwere not\b/g, "weren't")
      .replace(/\bis not\b/g, "isn't")
      .replace(/\bare not\b/g, "aren't")
      .replace(/\bcannot\b/g, "can't")
      .replace(/\bwould not\b/g, "wouldn't")
      .replace(/\bi would\b/g, "i'd")
      .replace(/\bi am\b/g, "i'm")
      // Thu gọn khoảng trắng thừa thành 1 dấu cách duy nhất
      .replace(/\s+/g, " ")
      .trim();
  }

  function checkAnswer(userAnswer, question) {
    if (!userAnswer || userAnswer.trim() === "") {
      return { isCorrect: false, reason: "empty" };
    }

    const normUser = normalizeText(userAnswer);
    const starterNorm = normalizeText(question.starter);

    // Chuẩn bị danh sách các phương án kiểm tra từ học sinh:
    // 1. Chuỗi học sinh gõ nguyên bản
    // 2. Nếu học sinh chỉ gõ phần còn lại, ghép starter + phần gõ
    // 3. Nếu học sinh gõ lặp lại starter (ví dụ: "It It takes..."), thử bỏ 1 starter
    const candidates = [normUser];

    // Ghép starter vào trước nếu câu học sinh gõ chưa bắt đầu bằng starter
    if (!normUser.startsWith(starterNorm)) {
      candidates.push(normalizeText(`${question.starter} ${userAnswer}`));
    } else {
      // Trường hợp học sinh gõ cả câu, lấy thêm phần đã bỏ starter để so với acceptable
      const stripped = normUser.replace(new RegExp(`^${starterNorm}\\s*`), "").trim();
      if (stripped) candidates.push(stripped);
    }

    // Danh sách đáp án chuẩn hóa
    const validNormAnswers = [
      normalizeText(question.officialAnswer),
      ...question.acceptableAnswers.map((a) => normalizeText(a))
    ];

    // Kiểm tra xem có ứng viên nào khớp với một trong các đáp án hợp lệ không
    for (const cand of candidates) {
      for (const valid of validNormAnswers) {
        if (cand === valid) {
          return { isCorrect: true, matchedWith: valid };
        }
      }
    }

    return { isCorrect: false, reason: "mismatch" };
  }

  // Nộp bài và chấm điểm
  function submitExam(isAuto = false) {
    if (state.isSubmitted) return;

    if (timerInterval) clearInterval(timerInterval);
    state.isSubmitted = true;
    state.isRunning = false;

    // Vô hiệu hóa tất cả input
    document.querySelectorAll(".q-input").forEach((inp) => (inp.disabled = true));
    submitBtn.style.display = "none";

    // Chấm điểm
    let correctCount = 0;
    const total = window.questionsData.length;
    const details = {};

    window.questionsData.forEach((q) => {
      const userAns = state.userAnswers[q.id] || "";
      const evaluation = checkAnswer(userAns, q);
      details[q.id] = {
        userAns: userAns,
        isCorrect: evaluation.isCorrect
      };
      if (evaluation.isCorrect) {
        correctCount++;
      }
    });

    const score10 = Number(((correctCount / total) * 10).toFixed(2));
    const timeSpentSeconds = TOTAL_DURATION_SECONDS - state.timeLeft;
    const spentMinutes = Math.floor(timeSpentSeconds / 60);
    const spentSeconds = timeSpentSeconds % 60;

    state.results = {
      score10,
      correctCount,
      total,
      timeSpentText: `${spentMinutes} phút ${spentSeconds} giây`,
      isAuto,
      details
    };

    saveState();
    playSound("submit");
    displayResults();

    // Cuộn lên phần kết quả
    resultBanner.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Hiển thị giao diện kết quả sau khi nộp
  function displayResults() {
    if (!state.results) return;

    const res = state.results;
    resultBanner.classList.add("show");

    // Xếp loại
    let rankText = "";
    let rankBadge = "";
    if (res.score10 >= 9.0) {
      rankText = "Xuất sắc! Bạn nắm rất vững cấu trúc viết lại câu!";
      rankBadge = "🏆 Xuất sắc";
    } else if (res.score10 >= 8.0) {
      rankText = "Rất tốt! Bạn làm chủ hầu hết các dạng bài tập.";
      rankBadge = "🌟 Giỏi";
    } else if (res.score10 >= 6.5) {
      rankText = "Khá tốt! Hãy chú ý hơn các chi tiết ngữ pháp nhỏ.";
      rankBadge = "👍 Khá";
    } else if (res.score10 >= 5.0) {
      rankText = "Đạt yêu cầu! Cần ôn tập kỹ các cấu trúc so sánh & liên từ.";
      rankBadge = "📖 Trung bình";
    } else {
      rankText = "Cần cố gắng nhiều hơn! Hãy xem kỹ phần giải thích chi tiết bên dưới.";
      rankBadge = "💪 Cố gắng lên";
    }

    resultBanner.innerHTML = `
      <div class="result-title">KẾT QUẢ BÀI LÀM: ${rankBadge}</div>
      <div class="result-subtitle">
        ${res.isAuto ? "⏱️ Hết thời gian làm bài 20 phút - Hệ thống đã tự động nộp bài." : "✅ Bạn đã chủ động nộp bài thành công!"} 
        ${escapeHtml(rankText)}
      </div>

      <div class="result-stats-row">
        <div class="res-stat-card">
          <div class="res-stat-value">${res.score10}</div>
          <div class="res-stat-label">Điểm số (Thang 10)</div>
        </div>
        <div class="res-stat-card">
          <div class="res-stat-value">${res.correctCount} / ${res.total}</div>
          <div class="res-stat-label">Số câu đúng</div>
        </div>
        <div class="res-stat-card">
          <div class="res-stat-value">${Math.round((res.correctCount / res.total) * 100)}%</div>
          <div class="res-stat-label">Độ chính xác</div>
        </div>
        <div class="res-stat-card">
          <div class="res-stat-value" style="font-size: 1.4rem; padding-top: 6px;">${res.timeSpentText}</div>
          <div class="res-stat-label">Thời gian làm bài</div>
        </div>
      </div>

      <div class="filter-tabs">
        <button type="button" class="filter-btn ${state.activeFilter === "all" ? "active" : ""}" data-filter="all">
          Tất cả 40 câu (${res.total})
        </button>
        <button type="button" class="filter-btn ${state.activeFilter === "correct" ? "active" : ""}" data-filter="correct">
          ✓ Câu làm đúng (${res.correctCount})
        </button>
        <button type="button" class="filter-btn ${state.activeFilter === "incorrect" ? "active" : ""}" data-filter="incorrect">
          ✗ Câu sai / Chưa làm (${res.total - res.correctCount})
        </button>
      </div>
    `;

    // Cập nhật từng Question Card sang chế độ Review kèm giải thích
    window.questionsData.forEach((q) => {
      const qDetail = res.details[q.id];
      const isCorrect = qDetail ? qDetail.isCorrect : false;
      const card = document.getElementById(`q-card-${q.id}`);
      const badge = document.getElementById(`badge-${q.id}`);
      const pBtn = document.getElementById(`palette-btn-${q.id}`);
      const reviewPanel = document.getElementById(`review-${q.id}`);

      // Đổi class card & badge
      if (card) {
        card.classList.remove("correct", "incorrect");
        card.classList.add(isCorrect ? "correct" : "incorrect");
      }

      if (badge) {
        badge.className = `q-status-badge ${isCorrect ? "pass" : "fail"}`;
        badge.textContent = isCorrect ? "✓ Đúng" : "✗ Chưa chính xác";
      }

      if (pBtn) {
        pBtn.className = `palette-btn ${isCorrect ? "correct" : "incorrect"}`;
      }

      // Render nội dung giải thích chi tiết
      if (reviewPanel) {
        reviewPanel.style.display = "block";

        const userText = qDetail && qDetail.userAns.trim() ? qDetail.userAns : "(Chưa điền đáp án)";

        const otherAnswersHtml =
          q.acceptableAnswers && q.acceptableAnswers.length > 2
            ? `<div class="other-accept-box">
                <strong>Các cách viết khác được chấp nhận:</strong><br>
                ${q.acceptableAnswers
                  .filter((a) => a !== q.officialAnswer && !a.startsWith("takes") && !a.startsWith("spends"))
                  .slice(0, 3)
                  .map((ans) => `• ${escapeHtml(ans)}`)
                  .join("<br>")}
              </div>`
            : "";

        reviewPanel.innerHTML = `
          <div class="review-row">
            <div class="review-label">Bài làm của bạn:</div>
            <div class="review-answer-box ${isCorrect ? "user-ans-correct" : "user-ans-incorrect"}">
              <span>${isCorrect ? "✓" : "✗"}</span>
              <span>${escapeHtml(userText)}</span>
            </div>
          </div>

          <div class="review-row">
            <div class="review-label">Đáp án chuẩn:</div>
            <div class="review-answer-box correct-ans-box">
              <span>★</span>
              <span><strong>${escapeHtml(q.officialAnswer)}</strong></span>
            </div>
            ${otherAnswersHtml}
          </div>

          <div class="explanation-card">
            <button type="button" class="explanation-toggle" onclick="toggleExplanation(${q.id})">
              <span>💡 Xem hướng dẫn & Giải thích chi tiết ngữ pháp</span>
              <span id="exp-arrow-${q.id}">▼</span>
            </button>
            <div class="explanation-content" id="exp-content-${q.id}">
              <div class="exp-rule">
                📌 Công thức: <strong>${escapeHtml(q.grammarRule)}</strong>
              </div>

              <div class="exp-trans">
                <strong>Dịch nghĩa:</strong><br>
                • Câu gốc: ${escapeHtml(q.translation.original)}<br>
                • Viết lại: ${escapeHtml(q.translation.rewritten)}
              </div>

              <p style="margin-bottom: 8px;"><strong>Phân tích chi tiết:</strong> ${escapeHtml(q.explanation)}</p>

              <div>
                <strong>Lưu ý trọng tâm:</strong>
                <ul class="exp-notes">
                  ${q.keyPoints.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        `;
      }
    });

    applyFilter(state.activeFilter);
  }

  // Bật/tắt accordion giải thích
  window.toggleExplanation = function (qid) {
    const content = document.getElementById(`exp-content-${qid}`);
    const arrow = document.getElementById(`exp-arrow-${qid}`);
    if (!content) return;

    if (content.style.display === "none") {
      content.style.display = "block";
      if (arrow) arrow.textContent = "▼";
    } else {
      content.style.display = "none";
      if (arrow) arrow.textContent = "►";
    }
  };

  // Lọc hiển thị câu hỏi (Tất cả / Đúng / Sai)
  function applyFilter(filter) {
    state.activeFilter = filter;

    document.querySelectorAll(".filter-btn").forEach((btn) => {
      if (btn.dataset.filter === filter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    window.questionsData.forEach((q) => {
      const card = document.getElementById(`q-card-${q.id}`);
      if (!card) return;

      if (!state.results) {
        card.style.display = "block";
        return;
      }

      const isCorrect = state.results.details[q.id]?.isCorrect;

      if (filter === "all") {
        card.style.display = "block";
      } else if (filter === "correct") {
        card.style.display = isCorrect ? "block" : "none";
      } else if (filter === "incorrect") {
        card.style.display = !isCorrect ? "block" : "none";
      }
    });
  }

  // Xử lý sự kiện người dùng
  function setupEventListeners() {
    // Nhập câu trả lời vào input
    questionsContainer.addEventListener("input", (e) => {
      if (!e.target.classList.contains("q-input")) return;

      const input = e.target;
      const qid = Number(input.id.replace("input-", ""));
      const val = input.value;

      state.userAnswers[qid] = val;

      const card = document.getElementById(`q-card-${qid}`);
      const badge = document.getElementById(`badge-${qid}`);
      const paletteBtn = document.getElementById(`palette-btn-${qid}`);

      if (val.trim().length > 0) {
        if (card) card.classList.add("answered");
        if (badge) {
          badge.className = "q-status-badge filled";
          badge.textContent = "Đã làm";
        }
        if (paletteBtn) paletteBtn.classList.add("active");
      } else {
        if (card) card.classList.remove("answered");
        if (badge) {
          badge.className = "q-status-badge pending";
          badge.textContent = "Chưa làm";
        }
        if (paletteBtn) paletteBtn.classList.remove("active");
      }

      updateStats();
      saveState();
    });

    // Mở modal xác nhận nộp bài
    submitBtn.addEventListener("click", () => {
      const total = window.questionsData.length;
      let answered = 0;
      window.questionsData.forEach((q) => {
        if (state.userAnswers[q.id] && state.userAnswers[q.id].trim().length > 0) {
          answered++;
        }
      });

      const minutes = Math.floor(state.timeLeft / 60);
      const seconds = state.timeLeft % 60;
      const timeLeftText = `${minutes} phút ${seconds} giây`;

      modalMessage.innerHTML = `
        Bạn đã hoàn thành <strong>${answered}/${total}</strong> câu hỏi.<br>
        Thời gian còn lại: <strong>${timeLeftText}</strong>.<br><br>
        Sau khi nộp bài, bạn sẽ được xem điểm số, đối chiếu đáp án và xem bài giải thích chi tiết toàn bộ 40 câu. Bạn có chắc chắn muốn nộp bài?
      `;

      submitConfirmModal.classList.add("active");
    });

    confirmSubmitBtn.addEventListener("click", () => {
      submitConfirmModal.classList.remove("active");
      submitExam(false);
    });

    cancelSubmitBtn.addEventListener("click", () => {
      submitConfirmModal.classList.remove("active");
    });

    // Lọc đáp án khi click tab filter
    resultBanner.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (btn) {
        applyFilter(btn.dataset.filter);
      }
    });

    // Nút làm lại bài thi
    resetBtn.addEventListener("click", () => {
      if (confirm("Bạn có chắc chắn muốn làm lại toàn bộ bài thi? Mọi câu trả lời và thời gian sẽ được đặt lại về 20 phút.")) {
        localStorage.removeItem(STORAGE_KEY);
        state = {
          timeLeft: TOTAL_DURATION_SECONDS,
          isRunning: true,
          isSubmitted: false,
          soundEnabled: state.soundEnabled,
          userAnswers: {},
          results: null,
          activeFilter: "all"
        };
        location.reload();
      }
    });

    // In bài thi / Xuất PDF
    printBtn.addEventListener("click", () => {
      window.print();
    });

    // Toggle Giao diện Sáng / Tối
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("TA8_THEME", newTheme);
      themeToggleBtn.textContent = newTheme === "dark" ? "☀️ Sáng" : "🌙 Tối";
    });

    // Toggle Âm thanh
    soundToggleBtn.addEventListener("click", () => {
      state.soundEnabled = !state.soundEnabled;
      soundToggleBtn.textContent = state.soundEnabled ? "🔔 Bật" : "🔕 Tắt";
    });
  }

  // Lưu trạng thái vào localStorage
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Không thể lưu localStorage:", e);
    }
  }

  // Khôi phục trạng thái từ localStorage
  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch (e) {
      console.warn("Không thể đọc localStorage:", e);
    }
  }

  function applyThemePreference() {
    const savedTheme = localStorage.getItem("TA8_THEME") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (themeToggleBtn) {
      themeToggleBtn.textContent = savedTheme === "dark" ? "☀️ Sáng" : "🌙 Tối";
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Khởi chạy khi DOM sẵn sàng
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
