const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Quotes = require('../models/quotesModel');
const Authors = require('../models/authorsModel');
const rawQuotes = require('../data/rawQuotes');


dotenv.config({path:'./config.env'});


const authorFilterName = 'buddhodeb';
const DB = (process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASS));

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then( async ()=> {
    console.log('Database Connected');
    
    // Step 1)) Find the author
    const author = await Authors.findOne({authorID:authorFilterName});
    if(!author){
        console.error(`Author can not be found with authorID ${authorFilterName}`);
        process.exit(1);
    }

    // Step 2)) Add the author Details to Quotes
    const quotesWithAuthorDet = rawQuotes.map((prevQuote)=>(
        {
            ...prevQuote,
            authorID:author.authorID,
            author:author._id,
            authorName:author.fullName,
        }
    ));

    //Step 3)) Upload the new Quotes to Database
    const result = await Quotes.insertMany(quotesWithAuthorDet);
    console.log(`Successfully upload ${result.length} quotes to Quotes Collection 📕`);
    process.exit(0);
})
.catch((error)=>{
    console.log('Can not connect', error.message);
    process.exit(1);
});





// For Deletion --

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// const Quotes = require('../models/quotesModel2');
// const Authors = require('../models/authorsModel2');


// dotenv.config({path:'./config.env'});

// const rawQuotes = [
//   {
//     quote: "কেহ বিশ্বাস করে, বোধের কাছে কারো হৃদয় কম্পমান, সবার হৃদয়ের প্রাকৃত কথা উচ্চারিত হয়, শুধু সেই হৃদয় নির্ঝরের ভাষা বুঝা যায়।",
//     source: "goodreads.com",
//     tags: ["বিশ্বাস", "হৃদয়", "বোঝাপড়া"],
//     likes: 0
//   },
//   {
//     quote: "বয়স্ক উপযুক্ত সন্তানকে ফেলে রেখে অথবা তার খুব দরকার আছে, জেনেও তাকে তুচ্ছ মনে করে দেখানো হয়, তবে না চিন্তা কর যদি অবস্থা ভালো না হয়।",
//     source: "goodreads.com",
//     tags: ["পরিবার", "সন্তান", "দুঃখ"],
//     likes: 0
//   },
//   {
//     quote: "মিথ্যারও মহত্ত্ব আছে; তবু তুমি সত্যকে এ সমস্ত ঘটনার বাইরে রাখো।",
//     source: "goodreads.com",
//     tags: ["মিথ্যা", "সত্য", "নৈতিকতা"],
//     likes: 0
//   },
//   {
//     quote: "মেয়েমানুষের এরকম হয় যে কোনো পত্র-জবাবে খুব কমই বিদায় লেখা থাকে।",
//     source: "goodreads.com",
//     tags: ["মেয়েমানুষ", "চিঠি", "বিদায়"],
//     likes: 0
//   },
//   {
//     quote: "কী ক্ষতি মুসলমানের রান্না তীব্র, খাওয়া বেশ সহজ; লজ্জার রোগ ধরে সমস্তই সামান্য। বাংলা মুসলমান তো একধর্মী।",
//     source: "goodreads.com",
//     tags: ["খাওয়া", "সংস্কৃতি", "বিশেষণ"],
//     likes: 0
//   },
//   {
//     quote: "সব মানুষের মধ্যে একটি খোকা থাকে, যে অপরাধীকে ভয়ে, যিনি তাকে দোষ দিয়ে বুঝতে পারে না, তাই সে আন্তরিকভাবে ভালবাসে।",
//     source: "goodreads.com",
//     tags: ["অপরাধী", "ভয়", "ভালোবাসা"],
//     likes: 0
//   },
//   {
//     quote: "সুখ? নাই-বা রইল সুখ! সুখ দিয়ে কি হবে? সুখ যদি-না-থাকে, সুখের ভিতর নিজের অস্তিত্বের ক্রোধের ভিতর আটকে...",
//     source: "goodreads.com",
//     tags: ["সুখ", "অস্তিত্ব", "ক্রোধ"],
//     likes: 0
//   },
//   {
//     quote: "ছেলে বড় হইলে কি কঠিন লোক হয়? বড় জোঁকগুলো আমাদেরকে বিরক্ত করে...",
//     source: "goodreads.com",
//     tags: ["বাল্য", "পৃথকতা", "জীবন"],
//     likes: 0
//   },
//   {
//     quote: "বিধ্বংসক পরিনামও এক আকাঙ্ক্ষা, সব মানুষের ইচ্ছাতেই অনুভূতির মৃত্যু লুকায় থাকে।",
//     source: "goodreads.com",
//     tags: ["ইচ্ছা", "বিধ্বংস", "অনুভূতি"],
//     likes: 0
//   },
//   {
//     quote: "জানিবার এত বিষয়, জানিবার এত প্রশ্ন, সমস্ত জীবনটাকে আচ্ছাদিত করে রাখা হয়নি।",
//     source: "goodreads.com",
//     tags: ["জ্ঞান", "প্রশ্ন", "জীবন"],
//     likes: 0
//   },
//   {
//     quote: "নদীর মত নিজের খুশিতে ভরিপূর্ণ, অন্যকে জলের মত খেপে ফেলে...",
//     source: "goodreads.com",
//     tags: ["নারী", "খুশি", "প্রতিক্রিয়া"],
//     likes: 0
//   },
//   {
//     quote: "বাংলা পেশাদার সাহিত্যিকের অবস্থাটা কি দাঁড়ায়?... টাকার জন্য তাই অনেকগুলি কাগজে তাকে লিখতে হবে… সাধনা।",
//     source: "goodreads.com",
//     tags: ["সাহিত্য", "পেশা", "অর্থ"],
//     likes: 0
//   },
//   {
//     quote: "প্রতিভা হল দক্ষতা অর্জনের বিশেষ ক্ষমতা।",
//     source: "goodreads.com",
//     tags: ["প্রতিভা", "দক্ষতা", "শিক্ষা"],
//     likes: 0
//   },
//   {
//     quote: "সেই যে গেল গোপাল, একবার এসেছিল মনে করে, বাকিটুকু মনে হয় কেমন, জানি নয়, কারণ সেই শেষ কথা আসেনি।",
//     source: "goodreads.com",
//     tags: ["স্মৃতি", "অপরিণত", "গোপাল"],
//     likes: 0
//   },
//   {
//     quote: "খুঁজিলে এমন কিছুও পাওয়া যায়, যা দেখি না, শুনি না, তবে অনুভব করি। নিজে লিখি না, তবে অন্যদের লেখায় খুঁজে পাই।",
//     source: "goodreads.com",
//     tags: ["অনুভব", "লেখা", "অন্বেষণ"],
//     likes: 0
//   },
//   {
//     quote: "মৃত্যুতে মানুষের লজ্জা নেই… জীবনের পরম খুশী সে, একদিন মরেও খুশী থেকে যায়।",
//     source: "goodreads.com",
//     tags: ["মৃত্যু", "আনন্দ", "ফল"],
//     likes: 0
//   },
//   {
//     quote: "জীবনকে জানা আর অপরাধ করা একটা প্রকৃত অভিমান।",
//     source: "goodreads.com",
//     tags: ["জীবন", "অপরাধ", "অভিমান"],
//     likes: 0
//   },
//   {
//     quote: "নরকের অন্ধকার আর স্বর্গের উজ্জলতা কিছুতেই কখনো আলাদা নয়।",
//     source: "goodreads.com",
//     tags: ["নরক", "স্বর্গ", "তুলনা"],
//     likes: 0
//   },
//   {
//     quote: "রাগ, প্রতিহিংসা এসব মানুষের অবলম্বন — স্বাধীন জীবন সেই রাগ দানা বাধতে পারে না।",
//     source: "goodreads.com",
//     tags: ["রাগ", "স্বাধীনতা", "শান্তি"],
//     likes: 0
//   },
//   {
//     quote: "শরীর! শরীর! বুঝতে পারছি তোমাকেও কোন কারণে বেঁধে আছে!",
//     source: "goodreads.com",
//     tags: ["শরীর", "আত্ম", "বন্ধন"],
//     likes: 0
//   },
//   {
//     quote: "শশীর চোখ খুঁজিয়া বেড়ায় হাওয়াঘাটে।",
//     source: "goodreads.com",
//     tags: ["শশী", "নিঃসঙ্গতা", "দৃশ্য"],
//     likes: 0
//   },
//   {
//     quote: "স্নিগ্ধতা দেখালে আরো জমাট বাঁধছে।",
//     source: "goodreads.com",
//     tags: ["স্নিগ্ধতা", "ভাবনা", "আবেগ"],
//     likes: 0
//   },
//   {
//     quote: "মনে পাপ থাকার এই একটা লক্ষণ, যে তোমার ঘুম ভালো লাগে না।",
//     source: "goodreads.com",
//     tags: ["পাপ", "ঘুম", "মন"],
//     likes: 0
//   },
//   {
//     quote: "কুবের তো জানিত না যে তিন টাকায় মাতাল হবে– উনাদের জন্য লহ রওয়ান।",
//     source: "goodreads.com",
//     tags: ["কুবের", "অর্থ", "বিনোদন"],
//     likes: 0
//   },
//   {
//     quote: "চিন্তার জগতে সত্য সত্যই আমাদের স্তরবিভাগ নাই, একসাথে আমরা জানি...",
//     source: "goodreads.com",
//     tags: ["চিন্তা", "সত্য", "ভাতৃত্ব"],
//     likes: 0
//   },
//   {
//     quote: "বাড়ি ফিরিয়া শশী বুঝিতে পারে যে বড় বাপের যুগ এসে না– সাবধানে কলঙ্ক কারাগরে।",
//     source: "goodreads.com",
//     tags: ["শশী", "বাপ", "সমাজ"],
//     likes: 0
//   },
//   {
//     quote: "গ্রামের লোকের অনুমানশক্তি সীমিত হয়।",
//     source: "goodreads.com",
//     tags: ["গ্রাম", "মানুষ", "অনুমান"],
//     likes: 0
//   },
//   {
//     quote: "মানুষ মাতাল খেয়ারে অতলে ডুবিয়া গেলে ঘুম পায়, কিন্তু যখন বেঁচে থাকে, তখন রাতে ঘুমালে বোবা হয়ে যায়।",
//     source: "goodreads.com",
//     tags: ["মানুষ", "মদ", "ঘুম"],
//     likes: 0
//   }
// ];


// const authorFilterName = 'manik';
// const DB = (process.env.DATABASE_URL.replace('<db_password>', process.env.DATABASE_PASS));

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// })
// .then( async ()=> {
//     console.log('Database Connected');
    
//     // Step 1)) Find the author
//     // const author = await Authors.findOne({authorID:authorFilterName});
//     // if(!author){
//     //     console.error(`Author can not be found with authorID ${authorFilterName}`);
//     //     process.exit(1);
//     // }

//     // Step 2)) Add the author Details to Quotes
//     // const quotesWithAuthorDet = rawQuotes.map((prevQuote)=>(
//     //     {
//     //         ...prevQuote,
//     //         authorID:author.authorID,
//     //         author:author._id,
//     //         authorName:author.fullName,
//     //     }
//     // ));

//     //Step 3)) Upload the new Quotes to Database
//     const result = await Quotes.deleteMany({authorID:authorFilterName});
//     console.log(`Successfully deleted ${result.deletedCount} quotes to Quotes Collection 📕 by ID ${authorFilterName}`);
//     process.exit(0);
// })
// .catch((error)=>{
//     console.log('Can not connect', error.message);
//     process.exit(1);
// });