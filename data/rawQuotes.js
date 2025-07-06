const rawQuotes = [
  {
    quote: "No, this is my revenge. I am giving you just what you want, I'm releasing you. And yet I''m really not. I'll inflict torments on you, subtle torments, day after day, year after year- that's why you're necessary to me.",
    author: "Buddhadeva Bose",
    source: "It Rained All Night",
    tags: ["revenge", "relationships", "torment"],
    likes: 0
  },
  {
    quote: "স্মৃতি থাকে। শেষ পর্যন্ত শুধু স্মৃতিই থাকে, আর কিছুই থাকে না।",
    author: "বুদ্ধদেব বসু",
    source: "মনের মত মেয়ে",
    tags: ["স্মৃতি", "অন্তিম সত্য", "বাংলা সাহিত্য"],
    likes: 0
  },
  {
    quote: "Hatred is never ended by hatred but by love.",
    author: "Buddhadeva Bose",
    source: "",
    tags: ["love", "hatred", "wisdom"],
    likes: 0
  },
  {
    quote: "ভালোবাসার মত সুন্দর আর-কিছুই নয়, আর ভালোবাসা জানাতে যত ভালো লাগে, তত ভালো আর-কিছুই লাগে না।",
    author: "Buddhadeva Bose",
    source: "কালের পুতুল",
    tags: ["ভালোবাসা", "রোমান্স", "বাংলা সাহিত্য"],
    likes: 0
  },
  {
    quote: "I will not forgive. I will inflict and invite suffering—all our lives. As Bunni grows up she'll hear from her mother that her father is cruel, capricious, tyrannical person. Bunni won't love me. Everyone will take her side, because she is a woman, I won't be able to say a thing, ever. I will have to keep my mouth shut my entire life. I must maintain my wife's honour. And we call women the weaker sex! How deadly is the strength of frailty, and men—if they're gentlemen—how incredibly helpless!",
    author: "Buddhadeva Bose",
    source: "It Rained All Night",
    tags: ["gender", "suffering", "relationships"],
    likes: 0
  },
  {
    quote: "No time for happiness, no time for sorrow. Work is the best of physicians.",
    author: "Buddhadeva Bose",
    source: "",
    tags: ["work", "emotion", "life"],
    likes: 0
  },
  {
    quote: "কিন্তু নেশার হাত থেকে মুক্তি নেই। মানুষের মুখ আমাকে দেখতেই হবে, আমাকে শুনতেই হবে মানুষের কথা... নয়তো তুমি বাঁচতে পারবে না।",
    author: "বুদ্ধদেব বসু",
    source: "রূপালি পাখি",
    tags: ["নেশা", "মানবিকতা", "বাংলা উপন্যাস"],
    likes: 0
  },
  {
    quote: "Love story? When it's as cold as this? Fine, all right.",
    author: "Buddhadeva Bose",
    source: "My Kind of Girl",
    tags: ["love", "irony", "short fiction"],
    likes: 0
  },
  {
    quote: "পৃথিবীতে আগে কখনো ছিলো না এমন জিনিশ যন্ত্র ছাড়া কিছু নেই, জৈব পদার্থ মাত্রেরই পূর্ব-ইতিহাস আছে, আর সেই ইতিহাস তার নূতনত্বের অন্তরায় নয়, বরং উপায়।",
    author: "Buddhadeb Bosu",
    source: "রবীন্দ্রনাথ : কথাসাহিত্য",
    tags: ["ইতিহাস", "বিজ্ঞান", "রবীন্দ্র-সমালোচনা"],
    likes: 0
  },
  {
    quote: "সমস্যা' যত সহজে সেকেলে হয়ে যায় এমন আর কিছুই নয়, শুধু সমসাময়িক সমস্যার উপরে যে রচনায় নির্ভর, তার আশু মৃত্যুদণ্ড লেখক নিজে উচ্চারণ করেছেন।",
    author: "Buddhadeb Bosu",
    source: "রবীন্দ্রনাথ : কথাসাহিত্য",
    tags: ["সমসাময়িকতা", "সাহিত্য", "দৃষ্টিভঙ্গি"],
    likes: 0
  },
  {
    quote: "ছন্দে বেঁধে দিলেই একটি কথা ফুরিয়েও ফুরোয় না; যে কথা অতি সাধারণ একটা খবরমাত্র, তা হয়ে ওঠে বাণী।",
    author: "Buddhadeb Bosu",
    source: "রবীন্দ্রনাথ : কথাসাহিত্য",
    tags: ["কবিতা", "ছন্দ", "সাহিত্য"],
    likes: 0
  },
  {
    quote: "সুকুমার রায়কে 'হাসির কবিতা'র গণ্ডির মধ্যে ধরে রাখা যায় না... তাঁকে কবি বলে না-মানতে হলে 'কবি' কথাটায় অন্যায়ভাবে সীমানা টানতে হয়।",
    author: "Buddhadeva Bose",
    source: "সাহিত্যচর্চা",
    tags: ["সুকুমার রায়", "সাহিত্যসমালোচনা", "বাংলা সাহিত্য"],
    likes: 0
  },
  {
    quote: "রাষ্ট্রে, ধর্মে, সমাজে, তাঁর জীবৎকালে যত আন্দোলন এ-দেশে জেগে উঠেছিলো... তাঁকে বাঁধতে পারে এমন বাঁধন কারো হাতেই তৈরি হলো না।",
    author: "Buddhadeva Bose",
    source: "সাহিত্যচর্চা",
    tags: ["রবীন্দ্রনাথ", "সমাজ", "সাহিত্যদর্শন"],
    likes: 0
  },
  {
    quote: "বিস্তর বই বেরোচ্ছে আজকাল। বিস্তর বাজে বই বেরোচ্ছে।",
    author: "Buddhadeva Bose",
    source: "সাহিত্যচর্চা",
    tags: ["পাঠক", "বই", "আধুনিক সাহিত্য"],
    likes: 0
  },
  {
    quote: "বর্তমান জগতে এ-ধারণা প্রায় সর্বব্যাপী যে, সত্য তথ্যেরই নামান্তর মাত্র... দৈনিকপত্রের মতো বিভিন্ন, পরস্পরবিচ্ছিন্ন, তাৎপর্যহীন খবর কুড়োনোকেই আমরা জেনেছি শিক্ষা বলে।",
    author: "Buddhadeva Bose",
    source: "সাহিত্যচর্চা",
    tags: ["শিক্ষা", "সত্য", "সমালোচনা"],
    likes: 0
  }

];



module.exports = rawQuotes;