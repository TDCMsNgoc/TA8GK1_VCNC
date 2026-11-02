/**
 * Ngân hàng dữ liệu 40 câu viết lại câu Tiếng Anh Lớp 8 - Giữa Kỳ 1 (Câu 41 - 80)
 * Kèm đáp án chuẩn, các biến thể chấp nhận được, cấu trúc ngữ pháp, dịch nghĩa và giải thích chi tiết.
 */
const questionsData = [
  {
    id: 41,
    original: "I spend 20 minutes walking to school.",
    starter: "It",
    prompt: "It …………………………………………………………………",
    officialAnswer: "It takes me 20 minutes to walk to school.",
    acceptableAnswers: [
      "It takes me 20 minutes to walk to school.",
      "It takes me 20 minutes to walk to school",
      "takes me 20 minutes to walk to school.",
      "takes me 20 minutes to walk to school"
    ],
    grammarRule: "S + spend + time + V-ing = It takes + O + time + to-V",
    translation: {
      original: "Tôi dành 20 phút đi bộ đến trường.",
      rewritten: "Tôi mất 20 phút để đi bộ đến trường."
    },
    explanation: "Chuyển đổi cấu trúc 'dành thời gian làm gì' với 'spend' sang 'mất bao nhiêu thời gian để làm gì' với 'It takes'. Chủ ngữ 'I' đổi thành tân ngữ 'me'. Động từ 'walking' đổi thành 'to walk'. Câu ở thì hiện tại đơn nên động từ 'take' thêm 's' thành 'takes'.",
    keyPoints: [
      "Chủ ngữ giả 'It' đi với động từ 'takes' (thì hiện tại đơn).",
      "Tân ngữ của 'I' là 'me'.",
      "Sau thời gian là động từ nguyên mẫu có 'to' (to walk)."
    ]
  },
  {
    id: 42,
    original: "It takes Lan an hour to do the housework.",
    starter: "Lan",
    prompt: "Lan ………………………………………………………………",
    officialAnswer: "Lan spends an hour doing the housework.",
    acceptableAnswers: [
      "Lan spends an hour doing the housework.",
      "Lan spends an hour doing the housework",
      "spends an hour doing the housework.",
      "spends an hour doing the housework"
    ],
    grammarRule: "It takes + O + time + to-V = S + spend + time + V-ing",
    translation: {
      original: "Lan mất một tiếng để làm việc nhà.",
      rewritten: "Lan dành một tiếng làm việc nhà."
    },
    explanation: "Chuyển từ cấu trúc 'It takes' sang cấu trúc 'spend'. Chủ ngữ 'Lan' là ngôi thứ ba số ít ở thì hiện tại đơn nên động từ 'spend' phải thêm 's' -> 'spends'. Động từ 'to do' chuyển thành V-ing là 'doing'.",
    keyPoints: [
      "Chủ ngữ ngôi thứ 3 số ít (Lan) -> 'spends'.",
      "Sau khoảng thời gian 'an hour' là V-ing ('doing the housework')."
    ]
  },
  {
    id: 43,
    original: "My sister loves collecting stamps.",
    starter: "My sister is fond",
    prompt: "My sister is fond ……………………………………",
    officialAnswer: "My sister is fond of collecting stamps.",
    acceptableAnswers: [
      "My sister is fond of collecting stamps.",
      "My sister is fond of collecting stamps",
      "is fond of collecting stamps.",
      "is fond of collecting stamps",
      "of collecting stamps.",
      "of collecting stamps"
    ],
    grammarRule: "S + love/like/enjoy + V-ing = S + be fond of + V-ing/Noun",
    translation: {
      original: "Chị gái tôi thích sưu tầm tem.",
      rewritten: "Chị gái tôi say mê/yêu thích việc sưu tầm tem."
    },
    explanation: "Cụm tính từ 'be fond of + V-ing' mang ý nghĩa yêu thích, say mê việc gì đó (tương đương love/like). Bắt buộc phải có giới từ 'of' sau 'fond'.",
    keyPoints: [
      "Tính từ 'fond' đi với giới từ 'of'.",
      "Sau giới từ 'of' động từ ở dạng V-ing ('collecting stamps')."
    ]
  },
  {
    id: 44,
    original: "Tom enjoys playing chess.",
    starter: "Tom is keen",
    prompt: "Tom is keen ………………………………………………",
    officialAnswer: "Tom is keen on playing chess.",
    acceptableAnswers: [
      "Tom is keen on playing chess.",
      "Tom is keen on playing chess",
      "is keen on playing chess.",
      "is keen on playing chess",
      "on playing chess.",
      "on playing chess",
      "Tom is interested in playing chess.",
      "Tom is crazy about playing chess."
    ],
    grammarRule: "S + enjoy + V-ing = S + be keen on + V-ing/Noun",
    translation: {
      original: "Tom thích chơi cờ vua.",
      rewritten: "Tom rất hào hứng/thích chơi cờ vua."
    },
    explanation: "Cụm tính từ 'be keen on + V-ing' diễn đạt sự đam mê, yêu thích việc gì. Giới từ bắt buộc đi kèm 'keen' là 'on'.",
    keyPoints: [
      "Cụm cố định: be keen on + V-ing.",
      "Các cụm đồng nghĩa: be fond of, be interested in, be crazy about."
    ]
  },
  {
    id: 45,
    original: "Ann is interested in learning about different cultures.",
    starter: "Ann finds it",
    prompt: "Ann finds it ………………………………………………",
    officialAnswer: "Ann finds it interesting to learn about different cultures.",
    acceptableAnswers: [
      "Ann finds it interesting to learn about different cultures.",
      "Ann finds it interesting to learn about different cultures",
      "finds it interesting to learn about different cultures.",
      "finds it interesting to learn about different cultures",
      "interesting to learn about different cultures.",
      "interesting to learn about different cultures"
    ],
    grammarRule: "S + be interested in + V-ing = S + find it + adj + to-V",
    translation: {
      original: "Ann thích tìm hiểu về các nền văn hóa khác nhau.",
      rewritten: "Ann thấy việc tìm hiểu về các nền văn hóa khác nhau thật thú vị."
    },
    explanation: "Cấu trúc 'find it + adj + to-V' biểu thị việc ai đó nhận thấy làm điều gì như thế nào. Tính từ mô tả tính chất của việc học văn hóa là 'interesting' (đuôi -ing). Động từ 'learning' chuyển thành 'to learn'.",
    keyPoints: [
      "Dùng tính từ 'interesting' (chỉ bản chất sự việc), không dùng 'interested' (chỉ cảm xúc người).",
      "Sau tính từ là động từ nguyên mẫu có 'to' (to learn)."
    ]
  },
  {
    id: 46,
    original: "The film was interesting to the children.",
    starter: "The children",
    prompt: "The children ………………………………………………",
    officialAnswer: "The children were interested in the film.",
    acceptableAnswers: [
      "The children were interested in the film.",
      "The children were interested in the film",
      "were interested in the film.",
      "were interested in the film"
    ],
    grammarRule: "Sth was interesting to Sb = Sb was interested in Sth",
    translation: {
      original: "Bộ phim rất thú vị đối với những đứa trẻ.",
      rewritten: "Những đứa trẻ cảm thấy thích thú với bộ phim."
    },
    explanation: "Câu gốc chia ở thì quá khứ đơn ('was'). Chủ ngữ mới là 'The children' (danh từ số nhiều), nên động từ 'to be' ở quá khứ là 'were'. Tính từ chỉ cảm xúc của con người là 'interested' và đi với giới từ 'in'.",
    keyPoints: [
      "Chủ ngữ 'The children' số nhiều -> dùng 'were'.",
      "Tính từ chỉ cảm xúc con người: 'interested' + giới từ 'in'."
    ]
  },
  {
    id: 47,
    original: "Mai is not as tall as Nam.",
    starter: "Nam",
    prompt: "Nam ………………………………………………………………",
    officialAnswer: "Nam is taller than Mai.",
    acceptableAnswers: [
      "Nam is taller than Mai.",
      "Nam is taller than Mai",
      "is taller than Mai.",
      "is taller than Mai"
    ],
    grammarRule: "A + be not as + adj + as + B = B + be + adj-er + than + A",
    translation: {
      original: "Mai không cao bằng Nam.",
      rewritten: "Nam cao hơn Mai."
    },
    explanation: "Chuyển đổi từ so sánh không bằng sang so sánh hơn. Mai không cao bằng Nam nghĩa là Nam cao hơn Mai. 'tall' là tính từ ngắn nên thêm hậu tố '-er' thành 'taller than'.",
    keyPoints: [
      "So sánh không bằng (not as... as) -> so sánh hơn (adj-er than).",
      "'tall' là tính từ ngắn -> 'taller than Mai'."
    ]
  },
  {
    id: 48,
    original: "Hanoi is not as hot as Ho Chi Minh City in summer.",
    starter: "Ho Chi Minh City",
    prompt: "Ho Chi Minh City ………………………………………",
    officialAnswer: "Ho Chi Minh City is hotter than Hanoi in summer.",
    acceptableAnswers: [
      "Ho Chi Minh City is hotter than Hanoi in summer.",
      "Ho Chi Minh City is hotter than Hanoi in summer",
      "is hotter than Hanoi in summer.",
      "is hotter than Hanoi in summer"
    ],
    grammarRule: "A + be not as + adj + as + B = B + be + adj-er + than + A",
    translation: {
      original: "Hà Nội không nóng bằng Thành phố Hồ Chí Minh vào mùa hè.",
      rewritten: "Thành phố Hồ Chí Minh nóng hơn Hà Nội vào mùa hè."
    },
    explanation: "Hà Nội không nóng bằng TP.HCM -> TP.HCM nóng hơn Hà Nội. 'hot' là tính từ ngắn 1 âm tiết, tận cùng bằng 1 nguyên âm + 1 phụ âm nên phải gấp đôi phụ âm cuối trước khi thêm '-er' -> 'hotter'.",
    keyPoints: [
      "Quy tắc gấp đôi phụ âm: hot -> hotter.",
      "Giữ nguyên cụm thời gian 'in summer' ở cuối câu."
    ]
  },
  {
    id: 49,
    original: "It rained heavily, so we stayed at home.",
    starter: "We",
    prompt: "We …………………………………………………………………",
    officialAnswer: "We stayed at home because it rained heavily.",
    acceptableAnswers: [
      "We stayed at home because it rained heavily.",
      "We stayed at home because it rained heavily",
      "stayed at home because it rained heavily.",
      "stayed at home because it rained heavily"
    ],
    grammarRule: "Clause 1 (nguyên nhân), so Clause 2 (kết quả) = Clause 2 + because + Clause 1",
    translation: {
      original: "Trời mưa rất to, vì vậy chúng tôi đã ở nhà.",
      rewritten: "Chúng tôi đã ở nhà bởi vì trời mưa to."
    },
    explanation: "Chuyển từ liên từ 'so' (kết quả) sang liên từ 'because' (nguyên nhân). Đưa mệnh đề kết quả 'We stayed at home' lên trước, sau đó là 'because' nối với mệnh đề nguyên nhân 'it rained heavily'.",
    keyPoints: [
      "Khi 'because' đứng giữa câu, không dùng dấu phẩy.",
      "Giữ nguyên thì quá khứ đơn: 'stayed' và 'rained'."
    ]
  },
  {
    id: 50,
    original: "Although he was tired, he finished the work.",
    starter: "He was tired, but",
    prompt: "He was tired, but ……………………………………",
    officialAnswer: "He was tired, but he finished the work.",
    acceptableAnswers: [
      "He was tired, but he finished the work.",
      "He was tired, but he finished the work",
      "he finished the work.",
      "he finished the work"
    ],
    grammarRule: "Although Clause 1, Clause 2 = Clause 1, but Clause 2",
    translation: {
      original: "Mặc dù anh ấy mệt, anh ấy vẫn hoàn thành công việc.",
      rewritten: "Anh ấy mệt, nhưng anh ấy vẫn hoàn thành công việc."
    },
    explanation: "Chuyển từ mệnh đề chỉ sự tương phản dùng 'Although' sang liên từ đẳng lập 'but'. Trong tiếng Anh, tuyệt đối không dùng cả 'Although' và 'but' trong cùng một câu.",
    keyPoints: [
      "Không dùng 'although' khi đã có 'but'.",
      "Có dấu phẩy trước liên từ 'but'."
    ]
  },
  {
    id: 51,
    original: "He felt ill, so he didn't go to school.",
    starter: "He didn't",
    prompt: "He didn't ……………………………………………………",
    officialAnswer: "He didn't go to school because he felt ill.",
    acceptableAnswers: [
      "He didn't go to school because he felt ill.",
      "He didn't go to school because he felt ill",
      "didn't go to school because he felt ill.",
      "didn't go to school because he felt ill",
      "go to school because he felt ill.",
      "go to school because he felt ill"
    ],
    grammarRule: "Clause 1 (nguyên nhân), so Clause 2 (kết quả) = Clause 2 + because + Clause 1",
    translation: {
      original: "Anh ấy thấy không khỏe, nên anh ấy không đến trường.",
      rewritten: "Anh ấy không đến trường bởi vì anh ấy cảm thấy ốm."
    },
    explanation: "Chuyển đổi nguyên nhân - kết quả giữa 'so' và 'because'. 'He didn't go to school' là kết quả, 'because he felt ill' là lý do.",
    keyPoints: [
      "Đưa mệnh đề kết quả lên đầu câu.",
      "Dùng 'because' nối với lý do ở vế sau."
    ]
  },
  {
    id: 52,
    original: "She was late because the bus broke down.",
    starter: "The bus",
    prompt: "The bus ………………………………………………………",
    officialAnswer: "The bus broke down, so she was late.",
    acceptableAnswers: [
      "The bus broke down, so she was late.",
      "The bus broke down, so she was late",
      "broke down, so she was late.",
      "broke down, so she was late"
    ],
    grammarRule: "Clause kết quả + because + Clause nguyên nhân = Clause nguyên nhân, so + Clause kết quả",
    translation: {
      original: "Cô ấy đến muộn vì xe buýt bị hỏng.",
      rewritten: "Xe buýt bị hỏng, vì vậy cô ấy đến muộn."
    },
    explanation: "Đổi từ mệnh đề 'because' sang mệnh đề chỉ kết quả với 'so'. Đưa mệnh đề nguyên nhân 'The bus broke down' lên đầu, thêm dấu phẩy và 'so', sau đó là kết quả 'she was late'.",
    keyPoints: [
      "Phải có dấu phẩy ',' trước liên từ 'so'.",
      "Giữ nguyên thì quá khứ đơn ('broke down', 'was')."
    ]
  },
  {
    id: 53,
    original: "Though the exam was difficult, Nam got a high mark.",
    starter: "The exam was difficult; however,",
    prompt: "The exam was difficult; however, …………",
    officialAnswer: "The exam was difficult; however, Nam got a high mark.",
    acceptableAnswers: [
      "The exam was difficult; however, Nam got a high mark.",
      "The exam was difficult; however, Nam got a high mark",
      "Nam got a high mark.",
      "Nam got a high mark"
    ],
    grammarRule: "Though Clause 1, Clause 2 = Clause 1; however, Clause 2",
    translation: {
      original: "Mặc dù bài thi khó, Nam vẫn đạt điểm cao.",
      rewritten: "Bài thi khó; tuy nhiên, Nam đã đạt điểm cao."
    },
    explanation: "Chuyển từ liên từ phụ thuộc 'Though' sang trạng từ liên kết 'however' (tuy nhiên). Quy tắc dấu câu: đứng sau dấu chấm phẩy ';' và có dấu phẩy ',' phía sau.",
    keyPoints: [
      "Sau '; however,' là một mệnh đề độc lập đầy đủ S + V.",
      "Ý nghĩa biểu thị sự đối lập tương phản."
    ]
  },
  {
    id: 54,
    original: "Linh studies hard. She wants to pass the entrance exam.",
    starter: "Linh studies hard so that",
    prompt: "Linh studies hard so that ……………………",
    officialAnswer: "Linh studies hard so that she can pass the entrance exam.",
    acceptableAnswers: [
      "Linh studies hard so that she can pass the entrance exam.",
      "Linh studies hard so that she can pass the entrance exam",
      "she can pass the entrance exam.",
      "she can pass the entrance exam",
      "she will pass the entrance exam.",
      "she will pass the entrance exam",
      "she may pass the entrance exam.",
      "she may pass the entrance exam",
      "Linh studies hard in order to pass the entrance exam.",
      "Linh studies hard so as to pass the entrance exam."
    ],
    grammarRule: "S + V + so that + S + can/could/will/would + V-inf",
    translation: {
      original: "Linh học chăm chỉ. Cô ấy muốn đỗ kỳ thi tuyển sinh.",
      rewritten: "Linh học chăm chỉ để cô ấy có thể đỗ kỳ thi tuyển sinh."
    },
    explanation: "Nối hai câu bằng mệnh đề chỉ mục đích 'so that' (để mà). Động từ ở câu đầu là 'studies' (hiện tại đơn), nên trong mệnh đề 'so that' ta dùng động từ khuyết thiếu 'can' hoặc 'will' + động từ nguyên mẫu 'pass'.",
    keyPoints: [
      "Cấu trúc so that + S + can/could + V.",
      "Thì hiện tại đơn ('studies') -> dùng 'can pass'."
    ]
  },
  {
    id: 55,
    original: "I will write the address down. I don't want to forget it.",
    starter: "I will write the address down so as",
    prompt: "I will write the address down so as ………",
    officialAnswer: "I will write the address down so as not to forget it.",
    acceptableAnswers: [
      "I will write the address down so as not to forget it.",
      "I will write the address down so as not to forget it",
      "so as not to forget it.",
      "so as not to forget it",
      "not to forget it.",
      "not to forget it",
      "I will write the address down in order not to forget it."
    ],
    grammarRule: "so as not to + V-inf = in order not to + V-inf (chỉ mục đích phủ định)",
    translation: {
      original: "Tôi sẽ ghi lại địa chỉ. Tôi không muốn quên nó.",
      rewritten: "Tôi sẽ ghi lại địa chỉ để không quên nó."
    },
    explanation: "Cụm từ chỉ mục đích phủ định 'so as not to + V-inf' (để không làm gì). Chú ý vị trí của từ 'not' phải đứng trước 'to' (viết 'so as not to', không được viết 'so as to not').",
    keyPoints: [
      "Vị trí chuẩn: 'so as not to + V'.",
      "Tương đương: 'in order not to + V'."
    ]
  },
  {
    id: 56,
    original: "I'm going to buy a new bike.",
    starter: "I have an intention",
    prompt: "I have an intention …………………………………",
    officialAnswer: "I have an intention of buying a new bike.",
    acceptableAnswers: [
      "I have an intention of buying a new bike.",
      "I have an intention of buying a new bike",
      "have an intention of buying a new bike.",
      "have an intention of buying a new bike",
      "of buying a new bike.",
      "of buying a new bike"
    ],
    grammarRule: "be going to + V-inf = have an intention of + V-ing",
    translation: {
      original: "Tôi dự định mua một chiếc xe đạp mới.",
      rewritten: "Tôi có ý định mua một chiếc xe đạp mới."
    },
    explanation: "Chuyển từ cấu trúc thì tương lai gần 'be going to + V' sang cụm danh từ 'have an intention of + V-ing' (có ý định làm việc gì). Sau giới từ 'of' động từ 'buy' chuyển thành 'buying'.",
    keyPoints: [
      "Cụm từ: have an intention of + V-ing.",
      "Động từ 'buy' -> 'buying'."
    ]
  },
  {
    id: 57,
    original: "They intend to open a bookshop.",
    starter: "They are going",
    prompt: "They are going …………………………………………",
    officialAnswer: "They are going to open a bookshop.",
    acceptableAnswers: [
      "They are going to open a bookshop.",
      "They are going to open a bookshop",
      "are going to open a bookshop.",
      "are going to open a bookshop",
      "to open a bookshop.",
      "to open a bookshop"
    ],
    grammarRule: "intend to + V-inf = be going to + V-inf",
    translation: {
      original: "Họ dự định mở một hiệu sách.",
      rewritten: "Họ sẽ mở một hiệu sách."
    },
    explanation: "Động từ 'intend to + V' (dự định làm gì) đồng nghĩa với cấu trúc tương lai gần 'be going to + V'. Chủ ngữ 'They' đi với to be 'are' -> 'are going to open a bookshop'.",
    keyPoints: [
      "intend to + V = be going to + V.",
      "Chủ ngữ 'They' -> 'are going to'."
    ]
  },
  {
    id: 58,
    original: "Minh prefers tea to coffee.",
    starter: "Minh would rather",
    prompt: "Minh would rather ……………………………………",
    officialAnswer: "Minh would rather drink tea than (drink) coffee.",
    acceptableAnswers: [
      "Minh would rather drink tea than coffee.",
      "Minh would rather drink tea than coffee",
      "Minh would rather drink tea than drink coffee.",
      "Minh would rather drink tea than drink coffee",
      "Minh would rather have tea than coffee.",
      "Minh would rather have tea than coffee",
      "Minh would rather have tea than have coffee.",
      "Minh would rather have tea than have coffee",
      "drink tea than coffee.",
      "drink tea than coffee",
      "drink tea than drink coffee.",
      "drink tea than drink coffee"
    ],
    grammarRule: "S + prefer + N + to + N = S + would rather + V-inf + than + (V-inf) + N",
    translation: {
      original: "Minh thích trà hơn cà phê.",
      rewritten: "Minh thà uống trà hơn là cà phê."
    },
    explanation: "Cấu trúc 'prefer ... to ...' so sánh giữa hai danh từ. Khi chuyển sang 'would rather', theo sau bắt buộc là động từ nguyên mẫu không 'to' (V-inf). Với đồ uống như tea/coffee, ta thêm động từ 'drink' hoặc 'have': 'would rather drink tea than (drink) coffee'.",
    keyPoints: [
      "Sau 'would rather' là V-inf (không dùng to-V hay V-ing).",
      "Cấu trúc so sánh: would rather V1 than V2."
    ]
  },
  {
    id: 59,
    original: "I prefer swimming to jogging.",
    starter: "I prefer to",
    prompt: "I prefer to ………………………………………………",
    officialAnswer: "I prefer to swim rather than jog.",
    acceptableAnswers: [
      "I prefer to swim rather than jog.",
      "I prefer to swim rather than jog",
      "prefer to swim rather than jog.",
      "prefer to swim rather than jog",
      "to swim rather than jog.",
      "to swim rather than jog",
      "swim rather than jog.",
      "swim rather than jog",
      "I prefer to swim rather than to jog.",
      "I prefer to swim rather than to jog"
    ],
    grammarRule: "S + prefer + V-ing + to + V-ing = S + prefer + to-V + rather than + (to) V-inf",
    translation: {
      original: "Tôi thích bơi hơn chạy bộ.",
      rewritten: "Tôi thích bơi hơn là chạy bộ."
    },
    explanation: "Khi 'prefer' đi với danh động từ (V-ing), ta dùng giới từ 'to': 'prefer V-ing to V-ing'. Nhưng khi 'prefer' đi với 'to-V', liên từ đi kèm phải là 'rather than': 'prefer to-V rather than (to) V'.",
    keyPoints: [
      "Quy tắc vàng: prefer V-ing TO V-ing.",
      "Quy tắc vàng: prefer to-V RATHER THAN (to) V."
    ]
  },
  {
    id: 60,
    original: "Lan loves taking photos.",
    starter: "Lan is crazy",
    prompt: "Lan is crazy ………………………………………………",
    officialAnswer: "Lan is crazy about taking photos.",
    acceptableAnswers: [
      "Lan is crazy about taking photos.",
      "Lan is crazy about taking photos",
      "is crazy about taking photos.",
      "is crazy about taking photos",
      "about taking photos.",
      "about taking photos",
      "Lan is keen on taking photos.",
      "Lan is fond of taking photos."
    ],
    grammarRule: "S + love/like/enjoy + V-ing = S + be crazy about + V-ing",
    translation: {
      original: "Lan rất thích chụp ảnh.",
      rewritten: "Lan mê mẩn/cuồng việc chụp ảnh."
    },
    explanation: "Thành ngữ 'be crazy about + V-ing/N' biểu đạt mức độ yêu thích cuồng nhiệt, say mê cái gì. Giới từ bắt buộc đi cùng 'crazy' là 'about'.",
    keyPoints: [
      "Cụm từ: be crazy about + V-ing.",
      "Sau giới từ 'about' là danh động từ 'taking photos'."
    ]
  },
  {
    id: 61,
    original: "Nam runs faster than Bao.",
    starter: "Bao doesn't",
    prompt: "Bao doesn't ………………………………………………",
    officialAnswer: "Bao doesn't run as fast as Nam.",
    acceptableAnswers: [
      "Bao doesn't run as fast as Nam.",
      "Bao doesn't run as fast as Nam",
      "doesn't run as fast as Nam.",
      "doesn't run as fast as Nam",
      "run as fast as Nam.",
      "run as fast as Nam",
      "Bao doesn't run so fast as Nam.",
      "Bao doesn't run so fast as Nam"
    ],
    grammarRule: "A + V + adv-er + than + B = B + doesn't/don't + V + as/so + adv + as + A",
    translation: {
      original: "Nam chạy nhanh hơn Bảo.",
      rewritten: "Bảo không chạy nhanh bằng Nam."
    },
    explanation: "Chuyển từ so sánh hơn với trạng từ sang so sánh không bằng. 'Bao' số ít, ở hiện tại đơn dùng trợ động từ 'doesn't' + động từ nguyên thể 'run'. 'fast' vừa là tính từ vừa là trạng từ (không dùng fastly).",
    keyPoints: [
      "So sánh không bằng với trạng từ: doesn't run as fast as.",
      "'fast' giữ nguyên dạng trạng từ."
    ]
  },
  {
    id: 62,
    original: "This bag isn't as expensive as that one.",
    starter: "That bag",
    prompt: "That bag ……………………………………………………",
    officialAnswer: "That bag is more expensive than this one.",
    acceptableAnswers: [
      "That bag is more expensive than this one.",
      "That bag is more expensive than this one",
      "is more expensive than this one.",
      "is more expensive than this one"
    ],
    grammarRule: "A + be not as + adj + as + B = B + be + more + adj + than + A",
    translation: {
      original: "Chiếc túi này không đắt bằng chiếc túi kia.",
      rewritten: "Chiếc túi kia đắt hơn chiếc túi này."
    },
    explanation: "Chuyển từ so sánh không bằng sang so sánh hơn với tính từ dài. 'expensive' có 3 âm tiết, cấu trúc so sánh hơn là 'more expensive than'.",
    keyPoints: [
      "Tính từ dài: more + adj + than.",
      "Đổi chủ ngữ 'That bag' lên trước và kết thúc bằng 'this one'."
    ]
  },
  {
    id: 63,
    original: "It took them two weeks to paint the house.",
    starter: "They",
    prompt: "They ……………………………………………………………",
    officialAnswer: "They spent two weeks painting the house.",
    acceptableAnswers: [
      "They spent two weeks painting the house.",
      "They spent two weeks painting the house",
      "spent two weeks painting the house.",
      "spent two weeks painting the house"
    ],
    grammarRule: "It took + O + time + to-V = S + spent + time + V-ing",
    translation: {
      original: "Họ đã mất hai tuần để sơn ngôi nhà.",
      rewritten: "Họ đã dành hai tuần sơn ngôi nhà."
    },
    explanation: "Câu gốc dùng 'took' (quá khứ đơn), nên khi chuyển sang 'spend' ta phải chia ở quá khứ đơn là 'spent'. Động từ 'to paint' chuyển thành V-ing là 'painting'.",
    keyPoints: [
      "Chú ý thì quá khứ: took -> spent.",
      "Sau thời gian 'two weeks' dùng V-ing: 'painting the house'."
    ]
  },
  {
    id: 64,
    original: "We must leave now, or we will miss the train.",
    starter: "We must leave now; otherwise,",
    prompt: "We must leave now; otherwise, ………………",
    officialAnswer: "We must leave now; otherwise, we will miss the train.",
    acceptableAnswers: [
      "We must leave now; otherwise, we will miss the train.",
      "We must leave now; otherwise, we will miss the train",
      "we will miss the train.",
      "we will miss the train"
    ],
    grammarRule: "Clause 1, or Clause 2 = Clause 1; otherwise, Clause 2",
    translation: {
      original: "Chúng ta phải rời đi ngay bây giờ, nếu không chúng ta sẽ lỡ chuyến tàu.",
      rewritten: "Chúng ta phải rời đi ngay bây giờ; nếu không thì, chúng ta sẽ lỡ chuyến tàu."
    },
    explanation: "Chuyển từ liên từ 'or' sang trạng từ liên kết 'otherwise' (nếu không thì). 'otherwise' đứng sau dấu chấm phẩy ';' và có dấu phẩy ',' phía sau, theo sau là mệnh đề chỉ hậu quả.",
    keyPoints: [
      "Dấu câu: ; otherwise, + mệnh đề.",
      "Giữ nguyên mệnh đề sau: 'we will miss the train'."
    ]
  },
  {
    id: 65,
    original: "Although Sam was very busy, he still helped us.",
    starter: "Sam was very busy; however,",
    prompt: "Sam was very busy; however, …………………",
    officialAnswer: "Sam was very busy; however, he still helped us.",
    acceptableAnswers: [
      "Sam was very busy; however, he still helped us.",
      "Sam was very busy; however, he still helped us",
      "he still helped us.",
      "he still helped us"
    ],
    grammarRule: "Although Clause 1, Clause 2 = Clause 1; however, Clause 2",
    translation: {
      original: "Mặc dù Sam rất bận, anh ấy vẫn giúp đỡ chúng tôi.",
      rewritten: "Sam rất bận; tuy nhiên, anh ấy vẫn giúp đỡ chúng tôi."
    },
    explanation: "Chuyển từ liên từ 'Although' sang trạng từ liên kết 'however'. Sau '; however,' ta viết lại nguyên vẹn mệnh đề chính 'he still helped us'.",
    keyPoints: [
      "Quy tắc dấu câu: ; however, + S + V.",
      "Không dùng 'although' cùng 'however'."
    ]
  },
  {
    id: 66,
    original: "Tam studies hard because she wants to become a doctor.",
    starter: "Tam wants",
    prompt: "Tam wants ……………………………………………………",
    officialAnswer: "Tam wants to become a doctor, so she studies hard.",
    acceptableAnswers: [
      "Tam wants to become a doctor, so she studies hard.",
      "Tam wants to become a doctor, so she studies hard",
      "wants to become a doctor, so she studies hard.",
      "wants to become a doctor, so she studies hard",
      "to become a doctor, so she studies hard.",
      "to become a doctor, so she studies hard"
    ],
    grammarRule: "Clause kết quả + because + Clause nguyên nhân = Clause nguyên nhân, so + Clause kết quả",
    translation: {
      original: "Tâm học tập chăm chỉ vì cô ấy muốn trở thành bác sĩ.",
      rewritten: "Tâm muốn trở thành bác sĩ, vì vậy cô ấy học tập chăm chỉ."
    },
    explanation: "Đảo mệnh đề nguyên nhân (mong muốn của Tâm) lên trước và nối với mệnh đề kết quả bằng liên từ 'so'. Nhớ thêm dấu phẩy trước 'so'.",
    keyPoints: [
      "Chuyển đổi nguyên nhân - kết quả giữa because và so.",
      "Trước 'so' phải có dấu phẩy ','."
    ]
  },
  {
    id: 67,
    original: "Lan went to the market early so that she could buy fresh fish.",
    starter: "Lan went to the market early to",
    prompt: "Lan went to the market early to …………",
    officialAnswer: "Lan went to the market early to buy fresh fish.",
    acceptableAnswers: [
      "Lan went to the market early to buy fresh fish.",
      "Lan went to the market early to buy fresh fish",
      "to buy fresh fish.",
      "to buy fresh fish",
      "buy fresh fish.",
      "buy fresh fish",
      "Lan went to the market early in order to buy fresh fish.",
      "Lan went to the market early so as to buy fresh fish."
    ],
    grammarRule: "so that + S + could + V = to / in order to / so as to + V-inf",
    translation: {
      original: "Lan đã đi chợ sớm để cô ấy có thể mua được cá tươi.",
      rewritten: "Lan đã đi chợ sớm để mua cá tươi."
    },
    explanation: "Rút gọn mệnh đề chỉ mục đích (so that + S + could + V) thành cụm động từ nguyên mẫu (to-V) khi hai vế câu có cùng chủ ngữ là 'Lan'.",
    keyPoints: [
      "Hai mệnh đề cùng chủ ngữ (Lan - she) -> rút gọn thành to-V.",
      "Bỏ 'so that she could', thay bằng 'to buy'."
    ]
  },
  {
    id: 68,
    original: "She turned off her phone so that she wouldn't disturb the class.",
    starter: "She turned off her phone in order",
    prompt: "She turned off her phone in order ………",
    officialAnswer: "She turned off her phone in order not to disturb the class.",
    acceptableAnswers: [
      "She turned off her phone in order not to disturb the class.",
      "She turned off her phone in order not to disturb the class",
      "in order not to disturb the class.",
      "in order not to disturb the class",
      "not to disturb the class.",
      "not to disturb the class",
      "She turned off her phone so as not to disturb the class."
    ],
    grammarRule: "so that + S + wouldn't + V = in order not to / so as not to + V-inf",
    translation: {
      original: "Cô ấy tắt điện thoại để không làm phiền lớp học.",
      rewritten: "Cô ấy tắt điện thoại nhằm không làm phiền lớp học."
    },
    explanation: "Rút gọn mệnh đề chỉ mục đích ở thể phủ định (wouldn't disturb) thành cụm từ 'in order not to + V-inf'. Lưu ý: 'not' phải đứng ngay trước 'to'.",
    keyPoints: [
      "Mục đích phủ định: in order not to + V-inf.",
      "Tuyệt đối không viết 'in order to not'."
    ]
  },
  {
    id: 69,
    original: "I prefer cooking to cleaning.",
    starter: "I would rather",
    prompt: "I would rather …………………………………………",
    officialAnswer: "I would rather cook than clean.",
    acceptableAnswers: [
      "I would rather cook than clean.",
      "I would rather cook than clean",
      "would rather cook than clean.",
      "would rather cook than clean",
      "cook than clean.",
      "cook than clean"
    ],
    grammarRule: "prefer + V-ing + to + V-ing = would rather + V-inf + than + V-inf",
    translation: {
      original: "Tôi thích nấu ăn hơn là dọn dẹp.",
      rewritten: "Tôi thà nấu ăn hơn là dọn dẹp."
    },
    explanation: "Chuyển từ cấu trúc 'prefer V-ing to V-ing' sang 'would rather V-inf than V-inf'. 'cooking' chuyển thành 'cook', 'cleaning' chuyển thành 'clean'. Cả hai động từ đều ở dạng nguyên thể không 'to'.",
    keyPoints: [
      "Sau 'would rather' là V-inf (cook).",
      "Sau 'than' là V-inf (clean)."
    ]
  },
  {
    id: 70,
    original: "Minh spent three months learning to play the guitar.",
    starter: "It took",
    prompt: "It took ………………………………………………………",
    officialAnswer: "It took Minh three months to learn to play the guitar.",
    acceptableAnswers: [
      "It took Minh three months to learn to play the guitar.",
      "It took Minh three months to learn to play the guitar",
      "took Minh three months to learn to play the guitar.",
      "took Minh three months to learn to play the guitar"
    ],
    grammarRule: "S + spent + time + V-ing = It took + O + time + to-V",
    translation: {
      original: "Minh đã dành ba tháng học chơi đàn ghi-ta.",
      rewritten: "Minh đã mất ba tháng để học chơi đàn ghi-ta."
    },
    explanation: "Chuyển từ 'spent' sang 'It took'. Chủ ngữ là 'Minh', khoảng thời gian là 'three months', động từ 'learning' chuyển thành 'to learn'.",
    keyPoints: [
      "Thì quá khứ đơn: It took + tân ngữ + thời gian + to-V.",
      "'learning' đổi thành 'to learn'."
    ]
  },
  {
    id: 71,
    original: "The boy is interested in the circus show.",
    starter: "The circus show",
    prompt: "The circus show ………………………………………",
    officialAnswer: "The circus show is interesting to the boy.",
    acceptableAnswers: [
      "The circus show is interesting to the boy.",
      "The circus show is interesting to the boy",
      "is interesting to the boy.",
      "is interesting to the boy"
    ],
    grammarRule: "Sb + be interested in + Sth = Sth + be interesting to + Sb",
    translation: {
      original: "Cậu bé cảm thấy thích thú với buổi biểu diễn xiếc.",
      rewritten: "Buổi biểu diễn xiếc thì thú vị đối với cậu bé."
    },
    explanation: "Chuyển chủ ngữ từ người ('The boy') sang sự vật/sự việc ('The circus show'). Khi chủ ngữ là sự vật, ta dùng tính từ chỉ tính chất đuôi '-ing' ('interesting') đi kèm giới từ 'to'.",
    keyPoints: [
      "Chủ ngữ sự vật -> tính từ -ing ('interesting').",
      "Giới từ đi kèm: interesting to somebody."
    ]
  },
  {
    id: 72,
    original: "I find it interesting to learn about traditions of other countries.",
    starter: "I am interested",
    prompt: "I am interested ………………………………………",
    officialAnswer: "I am interested in learning about traditions of other countries.",
    acceptableAnswers: [
      "I am interested in learning about traditions of other countries.",
      "I am interested in learning about traditions of other countries",
      "is interested in learning about traditions of other countries.",
      "interested in learning about traditions of other countries.",
      "in learning about traditions of other countries.",
      "in learning about traditions of other countries"
    ],
    grammarRule: "find it + adj + to-V = be interested in + V-ing",
    translation: {
      original: "Tôi thấy thú vị khi tìm hiểu về truyền thống của các quốc gia khác.",
      rewritten: "Tôi hứng thú với việc tìm hiểu về truyền thống của các quốc gia khác."
    },
    explanation: "Cấu trúc 'find it interesting to-V' tương đương với 'be interested in + V-ing'. Sau giới từ 'in', động từ 'to learn' chuyển thành 'learning'.",
    keyPoints: [
      "Cụm từ: be interested in + V-ing.",
      "Đổi 'to learn' thành 'learning'."
    ]
  },
  {
    id: 73,
    original: "Ba plays the guitar more skilfully than Hai.",
    starter: "Hai doesn't",
    prompt: "Hai doesn't ………………………………………………",
    officialAnswer: "Hai doesn't play the guitar as skilfully as Ba.",
    acceptableAnswers: [
      "Hai doesn't play the guitar as skilfully as Ba.",
      "Hai doesn't play the guitar as skilfully as Ba",
      "doesn't play the guitar as skilfully as Ba.",
      "doesn't play the guitar as skilfully as Ba",
      "play the guitar as skilfully as Ba.",
      "play the guitar as skilfully as Ba",
      "Hai doesn't play the guitar so skilfully as Ba.",
      "Hai doesn't play the guitar so skilfully as Ba"
    ],
    grammarRule: "A + V + more + adv + than + B = B + doesn't + V + as/so + adv + as + A",
    translation: {
      original: "Ba chơi đàn ghi-ta điêu luyện hơn Hải.",
      rewritten: "Hải không chơi đàn ghi-ta điêu luyện bằng Ba."
    },
    explanation: "Chuyển từ so sánh hơn với trạng từ dài 'more skilfully than' sang so sánh không bằng. Dùng trợ động từ 'doesn't' + động từ nguyên thể 'play', giữ nguyên trạng từ 'skilfully' giữa hai từ 'as... as'.",
    keyPoints: [
      "Cấu trúc: doesn't play ... as skilfully as ...",
      "'skilfully' là trạng từ bổ nghĩa cho động từ 'play'."
    ]
  },
  {
    id: 74,
    original: "Their flat is more spacious than ours.",
    starter: "Our flat is not",
    prompt: "Our flat is not ………………………………………",
    officialAnswer: "Our flat is not as spacious as theirs.",
    acceptableAnswers: [
      "Our flat is not as spacious as theirs.",
      "Our flat is not as spacious as theirs",
      "is not as spacious as theirs.",
      "not as spacious as theirs.",
      "as spacious as theirs.",
      "as spacious as theirs",
      "so spacious as theirs.",
      "so spacious as theirs",
      "Our flat is not as spacious as their flat.",
      "as spacious as their flat."
    ],
    grammarRule: "A + is more + adj + than + B = B + is not as/so + adj + as + A",
    translation: {
      original: "Căn hộ của họ rộng rãi hơn căn hộ của chúng tôi.",
      rewritten: "Căn hộ của chúng tôi không rộng rãi bằng căn hộ của họ."
    },
    explanation: "Chuyển từ so sánh hơn sang so sánh không bằng với tính từ 'spacious' (rộng rãi). Cuối câu dùng đại từ sở hữu 'theirs' để thay thế cho cụm danh từ 'their flat'.",
    keyPoints: [
      "So sánh không bằng: is not as spacious as.",
      "Sử dụng đại từ sở hữu 'theirs' để tránh lặp từ."
    ]
  },
  {
    id: 75,
    original: "He felt tired this morning because he stayed up late.",
    starter: "He stayed up late; therefore,",
    prompt: "He stayed up late; therefore, ………………",
    officialAnswer: "He stayed up late; therefore, he felt tired this morning.",
    acceptableAnswers: [
      "He stayed up late; therefore, he felt tired this morning.",
      "He stayed up late; therefore, he felt tired this morning",
      "he felt tired this morning.",
      "he felt tired this morning"
    ],
    grammarRule: "Clause kết quả + because + Clause nguyên nhân = Clause nguyên nhân; therefore, Clause kết quả",
    translation: {
      original: "Sáng nay anh ấy cảm thấy mệt vì anh ấy đã thức khuya.",
      rewritten: "Anh ấy đã thức khuya; do đó, sáng nay anh ấy cảm thấy mệt."
    },
    explanation: "Đổi mệnh đề 'because' sang trạng từ liên kết chỉ kết quả 'therefore' (do đó, vì thế). Quy tắc dấu câu: ; therefore, theo sau là mệnh đề chỉ kết quả.",
    keyPoints: [
      "Dấu câu chuẩn: ; therefore, + S + V.",
      "Giữ nguyên thì quá khứ đơn: 'felt tired this morning'."
    ]
  },
  {
    id: 76,
    original: "I'd prefer to spend my holiday at the seaside rather than in the mountains.",
    starter: "I would rather",
    prompt: "I would rather …………………………………………",
    officialAnswer: "I would rather spend my holiday at the seaside than in the mountains.",
    acceptableAnswers: [
      "I would rather spend my holiday at the seaside than in the mountains.",
      "I would rather spend my holiday at the seaside than in the mountains",
      "would rather spend my holiday at the seaside than in the mountains.",
      "spend my holiday at the seaside than in the mountains.",
      "spend my holiday at the seaside than in the mountains"
    ],
    grammarRule: "would prefer + to-V + rather than + ... = would rather + V-inf + than + ...",
    translation: {
      original: "Tôi thích trải qua kỳ nghỉ ở bãi biển hơn là ở vùng núi.",
      rewritten: "Tôi thà trải qua kỳ nghỉ ở bãi biển hơn là ở vùng núi."
    },
    explanation: "Chuyển từ 'would prefer to-V rather than' sang 'would rather V-inf than'. Động từ 'spend' phải ở dạng nguyên thể không 'to', và liên từ nối hai vế so sánh là 'than'.",
    keyPoints: [
      "Sau 'would rather' là V nguyên mẫu: 'spend'.",
      "Liên từ so sánh là 'than' (không dùng rather than hay to)."
    ]
  },
  {
    id: 77,
    original: "Although she was under great pressure, she tried to concentrate on her studies.",
    starter: "She was under great pressure; however,",
    prompt: "She was under great pressure; however, ………",
    officialAnswer: "She was under great pressure; however, she tried to concentrate on her studies.",
    acceptableAnswers: [
      "She was under great pressure; however, she tried to concentrate on her studies.",
      "She was under great pressure; however, she tried to concentrate on her studies",
      "she tried to concentrate on her studies.",
      "she tried to concentrate on her studies"
    ],
    grammarRule: "Although Clause 1, Clause 2 = Clause 1; however, Clause 2",
    translation: {
      original: "Mặc dù cô ấy chịu nhiều áp lực, cô ấy vẫn cố gắng tập trung vào việc học.",
      rewritten: "Cô ấy chịu nhiều áp lực; tuy nhiên, cô ấy vẫn cố gắng tập trung vào việc học."
    },
    explanation: "Chuyển mệnh đề nhượng bộ bắt đầu bằng 'Although' sang câu ghép dùng trạng từ liên kết 'however'. Sau '; however,' viết lại mệnh đề thứ hai.",
    keyPoints: [
      "Cấu trúc dấu câu: ; however, + Clause.",
      "Giữ nguyên thì quá khứ đơn: 'she tried to concentrate on her studies'."
    ]
  },
  {
    id: 78,
    original: "Mai gets up early every day to have enough time to review her lessons.",
    starter: "Mai gets up early every day so that",
    prompt: "Mai gets up early every day so that ………",
    officialAnswer: "Mai gets up early every day so that she has enough time to review her lessons.",
    acceptableAnswers: [
      "Mai gets up early every day so that she has enough time to review her lessons.",
      "Mai gets up early every day so that she has enough time to review her lessons",
      "she has enough time to review her lessons.",
      "she has enough time to review her lessons",
      "she can have enough time to review her lessons.",
      "she can have enough time to review her lessons",
      "she will have enough time to review her lessons.",
      "she will have enough time to review her lessons"
    ],
    grammarRule: "to-V (mục đích) = so that + S + V / can/will + V",
    translation: {
      original: "Mai dậy sớm mỗi ngày để có đủ thời gian ôn lại bài học.",
      rewritten: "Mai dậy sớm mỗi ngày để cô ấy có đủ thời gian ôn lại bài học."
    },
    explanation: "Chuyển cụm từ chỉ mục đích 'to have' sang mệnh đề chỉ mục đích 'so that + S + V'. Chủ ngữ là 'she', động từ thì hiện tại đơn là 'has' (hoặc dùng 'can have').",
    keyPoints: [
      "Mệnh đề mục đích: so that + she has / can have.",
      "Chú ý chủ ngữ 'she' số ít đi với 'has'."
    ]
  },
  {
    id: 79,
    original: "Learning to play the piano takes Lan two hours every day.",
    starter: "Lan spends",
    prompt: "Lan spends …………………………………………………",
    officialAnswer: "Lan spends two hours every day learning to play the piano.",
    acceptableAnswers: [
      "Lan spends two hours every day learning to play the piano.",
      "Lan spends two hours every day learning to play the piano",
      "spends two hours every day learning to play the piano.",
      "spends two hours every day learning to play the piano",
      "two hours every day learning to play the piano.",
      "two hours every day learning to play the piano",
      "Lan spends two hours learning to play the piano every day.",
      "Lan spends two hours learning to play the piano every day"
    ],
    grammarRule: "V-ing + takes + O + time = S + spends + time + V-ing",
    translation: {
      original: "Học chơi đàn dương cầm làm Lan mất hai tiếng mỗi ngày.",
      rewritten: "Lan dành hai tiếng mỗi ngày học chơi đàn dương cầm."
    },
    explanation: "Chuyển từ cấu trúc 'V-ing + takes + O + time' sang 'S + spend + time + V-ing'. Chủ ngữ 'Lan' số ít nên động từ 'spend' thêm 's' -> 'spends'. Khoảng thời gian là 'two hours every day', tiếp theo là V-ing: 'learning to play the piano'.",
    keyPoints: [
      "Chủ ngữ Lan -> 'spends'.",
      "Sau thời gian là V-ing ('learning to play the piano')."
    ]
  },
  {
    id: 80,
    original: "Playing sports is boring to Tom.",
    starter: "Tom finds",
    prompt: "Tom finds ……………………………………………………",
    officialAnswer: "Tom finds playing sports boring.",
    acceptableAnswers: [
      "Tom finds playing sports boring.",
      "Tom finds playing sports boring",
      "finds playing sports boring.",
      "finds playing sports boring",
      "playing sports boring.",
      "playing sports boring",
      "Tom finds it boring to play sports.",
      "Tom finds it boring to play sports"
    ],
    grammarRule: "V-ing + is + adj + to Sb = Sb + finds + V-ing/Noun + adj (hoặc finds it + adj + to-V)",
    translation: {
      original: "Chơi thể thao thì nhàm chán đối với Tom.",
      rewritten: "Tom thấy chơi thể thao thật nhàm chán."
    },
    explanation: "Cấu trúc 'Sb + find + V-ing + adj' biểu đạt cảm nhận của ai đó về một hành động. 'Tom finds playing sports boring' (Tom thấy việc chơi thể thao là nhàm chán). Có thể chấp nhận thêm cấu trúc 'Tom finds it boring to play sports'.",
    keyPoints: [
      "Cấu trúc: S + finds + V-ing + adj.",
      "Dùng tính từ 'boring' chỉ tính chất của việc chơi thể thao."
    ]
  }
];

// Xuất ra phạm vi toàn cục để file script khác có thể đọc mà không cần module bundler
if (typeof window !== "undefined") {
  window.questionsData = questionsData;
}
