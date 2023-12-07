import { Spotify } from "./Sportify";

export function Footer() {
  const inspirationalQuotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The best way to predict the future is to create it. - Peter Drucker",
    "You don't have to be rich to sparkle. - Unknown",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
  ];

  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);

  const randomQuote = inspirationalQuotes[randomIndex];

  return (
    <div className="flex flex-row justify-between items-center mx-[6rem] w-[90vw]">
      <Spotify />
      <div className="text-white text-[17px] w-[15rem] font-medium font-GN">
        {randomQuote}
      </div>
    </div>
  );
}
