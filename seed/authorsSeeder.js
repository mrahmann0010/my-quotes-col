// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// const authors = [
//   {
//     authorID: "tagor",
//     fullName: "Rabindranath Tagore",
//     nativeName: "রবীন্দ্রনাথ ঠাকুর",
//     dateBirth: "1861-05-07",
//     dateDeath: "1941-08-07",
//     birthPlace: "Jorasanko, Calcutta, Bengal Presidency, British India",
//     gender: "Male",
//     photograph: "",
//     genres: ["কবিতা", "উপন্যাস", "নাটক", "ছড়া", "নিবন্ধ", "ছোটগল্প", "সঙ্গীত"],
//     notableWorks: ["গীতাঞ্জলি", "ঘরে বাইরে", "গোরা", "চোখের বালি", "জন গণ মন"],
//     tags: ["Nobel Laureate", "Bengali Renaissance"],
//     extSources: ["https://en.wikipedia.org/wiki/Rabindranath_Tagore"],
//     bio: `রবীন্দ্রনাথ ঠাকুর (৭ মে ১৮৬১–৭ আগস্ট ১৯৪১) ছিলেন একজন বাংলা কবি, ঔপন্যাসিক, নাট্যকার, সংগীতস্রষ্টা, নাট্যনির্দেশক ও দার্শনিক। তিনি বাংলা ভাষার বৈশ্বিকতা এনেছিলেন; গীতাঞ্জলি-র জন্য ১৯১৩ সালে প্রথম এশীয় হিসেবে নোবেল সাহিত্য পুরস্কার লাভ করেন :contentReference[oaicite:0]{index=0}। রবীন্দ্রসঙ্গীত, উপন্যাস (যেমন: গোরা, চোখের বালি), ছোটগল্প, নাটক (যেমন: রক্তকরবী, ডাকঘর) সহ প্রায় সব ধরনের সাহিত্যে গুরত্বপূর্ণ অবদান রেখেছেন :contentReference[oaicite:1]{index=1}।\n\nতিনি বিশ্বভারতী বিশ্ববিদ্যালয় প্রতিষ্ঠা করেন এবং শিক্ষা ও সামাজিক সংস্কারেও অগ্রণী ভূমিকা রাখেন। তাঁর জন্মদিনে বৈশাখে ‘রবীন্দ্র জয়ন্তী’ পালিত হয়, যা বাংলা সাহিত্যে এক মহোৎসবের দিন হিসেবেও বিবেচিত।`
//   },
//   {
//     authorID: "mddutt",
//     fullName: "Michael Madhusudan Dutt",
//     nativeName: "মাইকেল মধুসূদন দত্ত",
//     dateBirth: "1824-01-25",
//     dateDeath: "1873-06-29",
//     birthPlace: "Sagardari, Jessore District, Bengal Presidency, British India",
//     gender: "Male",
//     photograph: "",
//     genres: ["কবিতা", "নাটক", "এপিক"],
//     notableWorks: ["মেঘনাদবধ কাব্য", "তিলোত্তমাসম্ভব কাব্য", "কৃষ্ণকুমারী"],
//     tags: ["Epic Poet", "Romantic"],
//     extSources: ["https://en.wikipedia.org/wiki/Michael_Madhusudan_Dutt"],
//     bio: `মাইকেল মধুসূদন দত্ত (২৫ জানুয়ারি ১৮২৪–২৯ জুন ১৮৭৩) ছিলেন বাংলা সাহিত্যের আধুনিক কবি ও নাট্যকার। তিনি বাংলায় এপিক জাতের কবিতা সক্রিয়ভাবে চালু করেন, যার শ্রেষ্ঠতম উদাহরণ ‘মেঘনাদবধ কাব্য’ :contentReference[oaicite:2]{index=2}। সাহিত্যে দ্বিভাষিকতা ও রূপকল্প চর্চায় নতুন দিগন্তে তিনি বাংলা সাহিত্যকে নিয়ে যান।\n\nপশ্চিমা শিক্ষার প্রভাব তাঁর সাহিত্য ও চিন্তায় পরিলক্ষিত। পরবর্তী সময়ে ইংল্যান্ডে আইন বিদ্যা অর্জন করেন, তবে সাহিত্যই তাঁর প্রাণের ভাষা।`
//   },
//   {
//     authorID: "bankm",
//     fullName: "Bankim Chandra Chattopadhyay",
//     nativeName: "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
//     dateBirth: "1838-06-27",
//     dateDeath: "1894-04-08",
//     birthPlace: "Naihati, Bengal Presidency, British India",
//     gender: "Male",
//     photograph: "",
//     genres: ["উপন্যাস", "নিবন্ধ", "কবিতা"],
//     notableWorks: ["আনন্দমঠ", "কপালকুণ্ডলা", "দুর্গেশনন্দিনী", "বন্দে মাতরম্"],
//     tags: ["Nationalist Writer"],
//     extSources: ["https://en.wikipedia.org/wiki/Bankim_Chandra_Chattopadhyay"],
//     bio: `বঙ্কিমচন্দ্র চট্টোপাধ্যায় (২৭ জুন ১৮৩৮–৮ এপ্রিল ১৮৯৪) ছিলেন আধুনিক বাংলা উপন্যাসকার ও কথাসাহিত্যের পথিকৃৎ। তাঁর ‘বন্দে মাতরম্’ দেশপ্রেমী গান রাষ্ট্রীয় ও সামাজিক উন্মেষের প্রতীক হয়ে ওঠে :contentReference[oaicite:3]{index=3}।\n\n‘আনন্দমঠ’, ‘কপালকুণ্ডলা’-এর মতো জনপ্রিয় উপন্যাসের মাধ্যমে তিনি বাংলা উপন্যাসকে প্রচলিত সাহিত্যে প্রতিষ্ঠিত করেন। এছাড়া নিবন্ধ ও কবিতার মাধ্যমেও দেশপ্রেম ও নৈতিক মূল্যবোধ তুলে ধরেন।`
//   },
//   {
//     authorID: "jibda",
//     fullName: "Jibanananda Das",
//     nativeName: "জীবনানন্দ দাশ",
//     dateBirth: "1899-02-17",
//     dateDeath: "1954-10-23",
//     birthPlace: "Barisal, Bengal Presidency, British India",
//     gender: "Male",
//     photograph: "",
//     genres: ["কবিতা", "নিবন্ধ", "ছোটগল্প"],
//     notableWorks: ["বনলতা সেন", "রূপসী বাংলা", "ধূসর পাণ্ডুলিপি", "শ্রেষ্ঠ কবিতা"],
//     tags: ["Modernist Poet"],
//     extSources: ["https://en.wikipedia.org/wiki/Jibanananda_Das"],
//     bio: `জীবনানন্দ দাশ (১৭ ফেব্রুয়ারি ১৮৯৯–২৩ অক্টোবর ১৯৫৪) বাংলা আধুনিক কবিতার অন্যতম শ্রেষ্ঠ কণ্ঠ। তাঁর কবিতায় ব্যতিক্রমী অনুভূতি, নিভৃত জলবায়ু ও চিত্রণশৈলী লক্ষ্য করা যায়। ‘বনলতা সেন’, ‘রূপসী বাংলা’-র মতো কবিতা বাংলা সাহিত্যে নতুন রূপের সূচনা করে।\n\nতিনি কবিতার পাশাপাশি নিবন্ধ ও ছোটগল্পে রসাস্বাদনে সমৃদ্ধ। জীবনানন্দের কবিতা সূক্ষ্মতায় পরিপূর্ণ ও বিষাদমিশ্র, যা পাঠককে গভীর অস্তিত্বের দিকে নিয়ে যায়।`
//   },
//   {
//     authorID: "manik",
//     fullName: "Manik Bandopadhyay",
//     nativeName: "মানিক বন্দ্যোপাধ্যায়",
//     dateBirth: "1908-10-19",
//     dateDeath: "1956-05-03",
//     birthPlace: "Dumka, Bengal Presidency, British India",
//     gender: "Male",
//     photograph: "",
//     genres: ["উপন্যাস", "ছোটগল্প"],
//     notableWorks: ["পদ্মা নদীর মাঝি", "পুতুলনাচের ইতিকথা", "জননী", "দিবারাত্রির কাব্য"],
//     tags: ["Realist"],
//     extSources: ["https://en.wikipedia.org/wiki/Manik_Bandopadhyay"],
//     bio: `মানিক বন্দ্যোপাধ্যায় (১৯ অক্টোবর ১৯০৮–৩ মে ১৯৫৬) বাংলা সাহিত্যে বাস্তবধর্মী উপন্যাস ও ছোটগল্পের পথপ্রদর্শক। ‘পদ্মা নদীর মাঝি’, ‘পুতুলনাচের ইতিকথা’-তে তিনি সাধারণ মানুষের দীর্ঘস্থায়ী সংগ্রাম ও মনস্তত্ত্বের গভীরতা নিয়ে এসেছেন।\n\nতার লেখা সামাজিক ও মানসিক বিশ্লেষণে সমৃদ্ধ, যা বাংলা সাহিত্যকে মানবিক বাস্তবতার দিকে নিয়ে যায়।`
//   },
//   {
//     authorID: "bibhut",
//     fullName: "Bibhutibhushan Bandopadhyay",
//     nativeName: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
//     dateBirth: "1894-08-12",
//     dateDeath: "1950-11-01",
//     birthPlace: "Ghoshpara, North 24 Parganas, Bengal Presidency, British India",
//     gender: "Male",
//     photograph: "",
//     genres: ["উপন্যাস", "ভ্রমণ", "ছোটগল্প"],
//     notableWorks: ["পথের পাঁচালী", "অপরাজিত", "অরণ্যক", "চাঁদের পাহাড়"],
//     tags: ["Nature Writer"],
//     extSources: ["https://en.wikipedia.org/wiki/Bibhutibhushan_Bandopadhyay"],
//     bio: `বিভূতিভূষণ বন্দ্যোপাধ্যায় (১২ আগস্ট ১৮৯৪–১ নভেম্বর ১৯৫০) বাংলা সাহিত্যের অন্যতম হৃদি ছোঁয়া লেখক। ‘পথের পাঁচালী’, ‘অপরাজিত’-এর মাধ্যমে তিনি গ্রামীণ বাংলার সহজাত জীবন ও মানবিক অনুভূতির চিত্র উপস্থাপন করেন।\n\nতার ভ্রমণকাহিনি ও ছোটগল্পগুলো প্রকৃতি ও মানবতার মিশেলে ভরপুর, যা পাঠককে সম্পৃক্ত করে বাংলা সাহিত্যের একান্ত সৌন্দর্য ও ভাবপ্রবাহে।`
//   },
//   {
//     authorID: "sunil",
//     fullName: "Sunil Gangopadhyay",
//     nativeName: "সুনীল গঙ্গোপাধ্যায়",
//     dateBirth: "1934-09-05",
//     dateDeath: "2012-10-23",
//     birthPlace: "Faridpur, Bengal Presidency, British India (now Bangladesh)",
//     gender: "Male",
//     photograph: "",
//     genres: ["কবিতা", "উপন্যাস", "শিশুসাহিত্য"],
//     notableWorks: ["সেই সময়", "পূর্ব-পশ্চিম", "নিখিলেশ-হরিপদ সিরিজ", "কাকাবাবু সিরিজ"],
//     tags: ["Modern Poet", "Children Author"],
//     extSources: ["https://en.wikipedia.org/wiki/Sunil_Gangopadhyay"],
//     bio: `সুনীল গঙ্গোপাধ্যায় (৫ সেপ্টেম্বর ১৯৩৪–২৩ অক্টোবর ২০১২) বাংলা সাহিত্যের বহুমাত্রিক প্রতিভা। তিনি কবিতা, উপন্যাস ও শিশুসাহিত্যে অবদান রেখেছেন। ‘সেই সময়’, ‘পূর্ব‑পশ্চিম’-এর মতো উপন্যাস বাংলা ইতিহাস ও সংস্কৃতির উজ্জ্বল প্রতিফলন।\n\nশিশুসাহিত্যে তাঁর ‘নিখিলেশ-হরিপদ’ ও ‘কাকাবাবু’ সিরিজ ব্যাপক জনপ্রিয়, যা প্রজন্ম জুড়ে পাঠকের হৃদয়ে স্থান করে নেয়।`
//   }
// ];

// dotenv.config({path:'../config.env'});

// const Authors = require('../models/authorsModel2');

// // const DB = (process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASS));
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// })
// .then( async ()=> {
//     console.log('Database Connected!');

//     const result = await Authors.insertMany(authors);
//     console.log(`✅ Successfully inserted ${result.length} authors`);

//     process.exit();
// })
// .catch((err)=>{
//     console.error('❌ Error inserting authors:', err);
//     process.exit(1);
// });



