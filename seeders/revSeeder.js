const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const BookReview = require("../models/reviewModel");

// ===== FULL REVIEWS ARRAY =====
const reviewsData = [
  {
    bookName: "Anne of Green Gables",
    authorName: "L. M. Montgomery",
    description: "A personal reflection on October and cozy autumn nostalgia.",
    rating: 5,
    review: `October is the month we all romanticize. I love the way weather shifts from hot and humid to cool and airy, the slow colour changes in nature, the slight chilly mornings which make you want to sleep in, the gloomy afternoons, even the air smells different in October.

Last two Octobers I spent being stuck at home. Classes were online. Which was good cause it gave me enough time and chances to cozy up. Having the slow mornings, hot drink in the afternoon with a favourite book, listening to music while watching sunsets. I really miss those days!

Cause those days are long gone and classes are offline now, full of deadlines, exam exam exam. And unfortunately October is the month of second term this year :")

But I'll still try to spend this month with full October-y vibes🥲
Also Octobers always makes me wonder how Green Gables or Stars hollow would look during this Fall. I wish I could visit, roam around with Anne or have a cup of coffee at Luke's!`,
    reviewerName: "Annya",
    genre: "Fiction",
    bookImage: "",
  },

  {
    bookName: "The Midnight Library",
    authorName: "Matt Haig",
    description:
      "A heartfelt reflection on regret, choices, and second chances.",
    rating: 5,
    review: `They say each book has a certain time to come into your life. Well for this book, the timing couldn’t be better!

I was quite at a loss thinking about some decisions I made and their outcome in future. Then on a random trip to my local bookstore, the midnight library picked my interest and I came home with it. And I'm so glad I did cause this one felt like a hug in the the form of pages.

Nora Seed has had enough of her regretful life and decides to end it. But instead of dying she finds herself in a library. Between life and death, there is a library which contains millions of books. Each book gives Nora a chance to see what her life would have been if she took different decisions.

We all have this tendency to ask ourselves "what would my life look like if I did something differently?" "would I be happier if I chose something different?" We even find ourselves regretting some of the decisions.
And @mattzhaig just showed perfectly through Nora that these thoughts are just pointless and make us weak. This book talks about regrets and how all these regrets are nothing but bullshit that burden us down. No matter what we choose, what we decide, there will be despair or loss and that's life!

So let's not try to understand the point of life and just try to live it. Let's try to look at life from different perspectives and walk through it with a smile on. Let's be kind to each other and to ourselves.

I guess there's no doubt how much I loved this book. The fact I loved more is how well the story comforted me. If you are an overthinker like me then it's 100% recommended ❤️`,
    reviewerName: "Annya",
    genre: "Fiction",
    bookImage: "",
  },

  {
    bookName: "The Kite Runner",
    authorName: "Khaled Hosseini",
    description:
      "An emotional account of guilt, redemption, and lifelong consequences.",
    rating: 5,
    review: `Writer- Khaled Hosseini
Rating-★★★★★

Plot- The book is set in Kabul with the backdrops of war in the whole Afghanistan. The protagonist, Amir from whose vision the whole book is written is the son of a very rich merchant of Afghanistan. Hasan, the son of the servant of Amir's father also is of the same age as Amir. Both of them have lost their mother at an early stage of their life and grown up together as best friends since then. One of their favourite hobbies is kite running as it's very famous among Afghan children. One day at a local kite fighting tournament Amir becomes determined to win to please his father and he even wins finally with the help of Hasan. But the victory comes with a high price as their joyous moment comes to an abrupt end due to some horrible events. What happens after the tournament changes their lifelong friendship, shakes the foundation of their trust and even changes the courses of the lives of every single characters mentioned before which makes Amir suffer for the rest of his life and regret the deeds his past self did. The following part is about Amir's regrets, sufferings, atonements and finally redemption!

Review- 'The kite runner' is that type of heart touching book which stays with you forever. The story, the happenings, the sorrows, the pains everything felt so real that it made me ugly cry several times while reading this book. I felt so helpless and angry that at times I thought about stop reading as some parts were too heartbreaking to read. But the author's magical storytelling power kept me going and towards the end there was such a turn of story that was just unbearably painful.As for the characters I felt so sorry for Hasan for all the injustice he had to go through throughout his whole life. About Amir, I don’t think I ever disliked a protagonist as much as I disliked younger him!But he too has suffered a lot and at the end what he did for shohrab made me forgive him. This exceptionally painful book made me think a lot about the unfairness of life and how we all should have that little courage that young Amir didn’t have. I think everyone must read this book once in their life. Happy reading❤️`,
    reviewerName: "Annya",
    genre: "Drama",
    bookImage: "",
  },

  {
    bookName: "The ABC Murders",
    authorName: "Agatha Christie",
    description:
      "A classic crime mystery featuring Hercule Poirot solving alphabet murders.",
    rating: 4,
    review: `This was my first book of Agatha Christie and I totally got why she's called the queen of crime.

The ABC murders is a classic crime novel by Christie featuring her famous Belgian detective Harcule Poirot with Arthur Hastings and chief inspector Japp. The story begins with a letter from a creepy serial killer to Poirot challenging him. The killer introduces himself as ABC and informs there will be murder on a certain day in Andover which really happens and turns out the victim’s name also starts with A. This gives rise to a twisted mystery following the murders of new victims in alphabetic order. And every time the killer informs Poirot the date and place beforehand to challenge him if he's clever enough to find him. Even the renowned Harcule Poirot with his huge team face difficulties to catch the killer!

It was a pretty good thriller for me. The thing that picked my interest was choosing the victims and locations in alphabetic order. And the serial killer with no motive seemed pretty interesting which left me guessing the killer whole time. Obviously my guesses were wrong and the ending was totally different from what I thought. The story line was captivating and I really liked Poirot's character. Poirot and Hasting's conversations even made me smile several times. Overall it was a good book for me and I'll obviously recommend it to crime story lovers❤️

P.S. I'll really like to read more books by Agatha Christie. So the Christie fans where you at? Suggest me your best Agatha Christie books please😇`,
    reviewerName: "Annya",
    genre: "Mystery",
    bookImage: "",
  },

  {
    bookName: "Maybe Someday",
    authorName: "Colleen Hoover",
    description:
      "A mixed-feelings romance review focusing on music, relationships, and flawed choices.",
    rating: 3,
    review: `𝙈𝙖𝙮𝙗𝙚 𝙨𝙤𝙢𝙚𝙙𝙖𝙮 𝙗𝙮 𝘾𝙤𝙡𝙡𝙚𝙚𝙣 𝙃𝙤𝙤𝙫𝙚𝙧

Swipe to see the synopsis.

Well the AOTD is maybe someday! There are some things I liked so much but also some things I didn’t like at all. Let's start with the positives.
Most of you know that Colleen always likes to find something unique for almost every books of her and in case of this book she worked with Griffin Peterson to create the songs she mentioned in the book. That means you get a playlist to listen to while reading this book. Isn’t that cute?
Also the musical details are so well written. Ridge is deaf but he uses every other senses to the fullest and the way Colleen showed how he actually makes music without listening himself is just wow! Another thing I liked about this book is the emotional rollercoaster vibe of this. She really presented some realistic issues many of us may face in any part of our life.

Why mixed feelings then? The thing I mainly didn’t like is characterization!

Yes I didn’t like Sydney at all. I know Colleen tried a lot to say that the heart wants what it wants but still there are some things that are not okay. Sydney was so mad at her best friend for her going out with Hunter in the first pages and then in the middle there she goes making out with Ridge. When Ridge has a perfect relationship with Maggie!!! You are so against cheating but you become a cheat yourself. Hippocratic, no?
Then there is Ridge. I really liked him during the first chapters for his unique music making, being kind to Sydney and being a perfect boyfriend to Maggie. But then things happens between him and Sydney and he pretends like everything is okay. But no, cheating is NOT OKAY! In the end I would still love them if he told Maggie everything and chose Sydney but no he didn’t. It was Maggie who leaves him and then he goes to Sydney and Sydney has no problem being his second option since the begining. I didn’t like the fact at all.

So tbh I really liked the realistic situation Colleen put her characters in but I didn’t like the actions they took. And three stars for the amazing music, creative prose and realistic aspects!`,
    reviewerName: "Annya",
    genre: "Romance",
    bookImage: "",
  },
];

// ===== CONNECT & INSERT =====
const DB = process.env.DATABASE_URL.replace(
  "<db_password>",
  process.env.DATABASE_PASS
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database Connected!");

    await BookReview.deleteMany();
    console.log("Old reviews removed.");

    const result = await BookReview.insertMany(reviewsData);
    console.log(`✅ Successfully inserted ${result.length} reviews`);

    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error inserting reviews:", err);
    process.exit(1);
  });
