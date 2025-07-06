const authorList = [
  {
    authorID: "zahir",
    fullName: "Zahir Raihan",
    nativeName: "জহির রায়হান",
    dateBirth: "1935-08-19",
    dateDeath: "1972-01-30",
    birthPlace: "Feni, Bengal Presidency, British India",
    gender: "Male",
    photograph: "",
    genres: ["উপন্যাস", "চলচ্চিত্র", "প্রবন্ধ", "রাজনৈতিক রচনা"],
    notableWorks: ["হাজার বছর ধরে", "আরেক ফাল্গুন", "জীবন থেকে নেয়া", "শেষ বিকেলের মেয়ে"],
    tags: ["Bangladesh Liberation", "Missing Person", "Martyr"],
    extSources: ["https://en.wikipedia.org/wiki/Zahir_Raihan"],
    bio: `জহির রায়হান (১৯ আগস্ট ১৯৩৫ – নিখোঁজ: ৩০ জানুয়ারি ১৯৭২) ছিলেন একজন খ্যাতিমান বাংলাদেশি লেখক, সাংবাদিক ও চলচ্চিত্র নির্মাতা। তাঁর উপন্যাস "হাজার বছর ধরে" ও রাজনৈতিক চলচ্চিত্র "জীবন থেকে নেয়া" বিশেষভাবে খ্যাত। ১৯৭১ সালের মুক্তিযুদ্ধের সময় তিনি সক্রিয়ভাবে যুক্ত ছিলেন এবং ১৯৭২ সালে নিখোঁজ হন। তাঁর কাজ রাজনৈতিক সচেতনতা ও জাতীয় চেতনার প্রতিচ্ছবি।`
  },
  {
    authorID: "sarat",
    fullName: "Sarat Chandra Chattopadhyay",
    nativeName: "শরৎচন্দ্র চট্টোপাধ্যায়",
    dateBirth: "1876-09-15",
    dateDeath: "1938-01-16",
    birthPlace: "Debanandapur, Hooghly, Bengal Presidency, British India",
    gender: "Male",
    photograph: "",
    genres: ["উপন্যাস", "ছোটগল্প", "নাটক", "প্রবন্ধ"],
    notableWorks: ["দেবদাস", "শ্রীকান্ত", "চরিত্রহীন", "পণ্ডিতমশায়", "বিন্দুর ছেলে"],
    tags: ["Social Realism", "Women's Issues"],
    extSources: ["https://en.wikipedia.org/wiki/Sarat_Chandra_Chattopadhyay"],
    bio: `শরৎচন্দ্র চট্টোপাধ্যায় (১৫ সেপ্টেম্বর ১৮৭৬ – ১৬ জানুয়ারি ১৯৩৮) বাংলা সাহিত্যের অন্যতম জনপ্রিয় কথাসাহিত্যিক। তিনি সামাজিক বাস্তবতা, নারীর জীবন, দারিদ্র্য ও মানবিক আবেগ নিয়ে অসাধারণ সব উপন্যাস ও গল্প রচনা করেছেন। "দেবদাস", "শ্রীকান্ত" ও "চরিত্রহীন" তাঁর বিখ্যাত কৃতিগুলির মধ্যে অন্যতম।`
  },
  {
    authorID: "sofa",
    fullName: "Ahmed Sofa",
    nativeName: "আহমদ ছফা",
    dateBirth: "1943-06-30",
    dateDeath: "2001-07-28",
    birthPlace: "Chittagong, Bengal Presidency, British India",
    gender: "Male",
    photograph: "",
    genres: ["উপন্যাস", "প্রবন্ধ", "রাজনীতি", "সমালোচনা", "কবিতা"],
    notableWorks: ["অলাতচক্র", "সূর্য তুমি সাথী", "বাঙালি মুসলমানের মন", "গভীর রাতে গধূর কথা"],
    tags: ["Intellectual", "Free Thinker", "Anti-establishment"],
    extSources: ["https://en.wikipedia.org/wiki/Ahmed_Sofa"],
    bio: `আহমদ ছফা (৩০ জুন ১৯৪৩ – ২৮ জুলাই ২০০১) ছিলেন একজন বিদ্রোহী চিন্তক, ঔপন্যাসিক ও প্রবন্ধকার। তিনি সাহিত্য ও সমাজচিন্তার ক্ষেত্রে নিজস্ব ধারা তৈরি করেন। "অলাতচক্র", "বাঙালি মুসলমানের মন" এবং "সূর্য তুমি সাথী" তাঁর আলোচিত রচনাসমূহ। ছফা স্পষ্টভাষী ও প্রতিষ্ঠানবিরোধী চিন্তাধারার জন্য খ্যাত।`
  },
  {
    authorID: "buddhodeb",
    fullName: "Buddhadeb Guha",
    nativeName: "বুদ্ধদেব গুহ",
    dateBirth: "1936-06-29",
    dateDeath: "2021-08-29",
    birthPlace: "Calcutta, Bengal Presidency, British India",
    gender: "Male",
    photograph: "",
    genres: ["উপন্যাস", "ভ্রমণকাহিনী", "কবিতা", "প্রকৃতি-রচনা"],
    notableWorks: ["মাধুকরী", "কোজাগর", "ঋজুদা সিরিজ", "তপোবন"],
    tags: ["Nature Writer", "Adventure Fiction"],
    extSources: ["https://en.wikipedia.org/wiki/Buddhadeb_Guha"],
    bio: `বুদ্ধদেব গুহ (২৯ জুন ১৯৩৬ – ২৯ আগস্ট ২০২১) ছিলেন একজন ভারতীয় বাঙালি লেখক যিনি প্রকৃতি, জঙ্গল ও বনজীবনের চিত্র অঙ্কনে পারদর্শী। তাঁর বিখ্যাত চরিত্র ঋজুদা এবং উপন্যাস "মাধুকরী" পাঠকের হৃদয়ে বিশেষ স্থান অধিকার করেছে। তিনি ভ্রমণ ও প্রকৃতি নিয়ে সাহিত্যচর্চার জন্য বিশেষভাবে খ্যাত।`
  }
];


module.exports = authorList;