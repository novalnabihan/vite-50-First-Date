import './style.css'
import changeTextOnClick from './button'
import $ from 'jquery'

$('#app').html(`
    <div class="box">
        <h1 id ="title"> To Lucy...</h1>
        <h2 id="chapter"></h2> 

        <p id="text">Dear Lucy, this is our story. This website is here to help you remember everything that makes us, us. Every word, every moment, every memory—it's all here, waiting for you. No matter what today brings, know that you are loved deeply, completely, and forever.</p> 

        <button id="ChangeText">Next</button>
    </div>
`);

const texts = [
    "Good morning, Lucy. Today is a fresh start, a blank slate waiting to be filled. My name is Henry, and though you may not remember me, I’m here to help you uncover the magic of our love story.",
    "Remember our first encounter? You were charming and playful, building a masterpiece out of waffles. I knew, even then, that I wanted to make you smile every day, to be the reason for that sparkle in your eyes.",
    "Every day is a chance to make new memories. I’ll bring you flowers, tell you silly jokes, and watch the way your laughter lights up the room. With each laugh, I fall deeper in love with you all over again.",
    "Today might feel familiar, like déjà vu, but it’s just another day for us to create moments together. I’ll remind you of our adventures, our dreams, and how every moment with you feels like a beautiful beginning.",
    "Though you may forget me each morning, my love for you never fades. I’m here to rewrite our story every day, capturing the essence of what makes us, us. Love isn’t just a memory; it’s a journey we take together.",
    "At the end of each day, when you close your eyes, know this: my heart is yours forever. Each sunrise brings a new opportunity to show you how deeply I cherish you. Together, we’ll create a love that transcends time and memory."
];

const chapterTitles = [
    "Chapter 1: A New Beginning",
    "Chapter 2: The First Smile",
    "Chapter 3: Falling Deeper",
    "Chapter 4: Another Day, Another Memory",
    "Chapter 5: Love, Everlasting",
    "Chapter 6: The Forever Promise"
];

changeTextOnClick('ChangeText', chapterTitles, texts);
