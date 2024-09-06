const quotes = [
  {
    text: "Science is a way of thinking much more than it is a body of knowledge.",
    category: "science",
  },
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
    category: "science",
  },
  {
    text: "Life is what happens when you’re busy making other plans.",
    category: "life",
  },
  {
    text: "Get busy living or get busy dying.",
    category: "life",
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    category: "life",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    category: "life",
  },
  {
    text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
    category: "science",
  },
  {
    text: "The only way to do great work is to love what you do.",
    category: "motivation",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    category: "motivation",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    category: "motivation",
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    category: "wisdom",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    category: "wisdom",
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    category: "wisdom",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    category: "motivation",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    category: "motivation",
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    category: "motivation",
  },
  {
    text: "Football is a game of mistakes. Whoever makes the fewest mistakes wins.",
    category: "football",
  },
  {
    text: "The ball is round, the game lasts ninety minutes, and everything else is just theory.",
    category: "football",
  },
  {
    text: "Some people think football is a matter of life and death. I assure you, it's much more serious than that.",
    category: "football",
  },
  {
    text: "Football is the ballet of the masses.",
    category: "football",
  },
  {
    text: "A champion is simply someone who did not give up when they wanted to.",
    category: "motivation",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    category: "motivation",
  },
];

let currentQuoteIndex = 0;
let currentCategory = "all";

const quoteText = document.getElementById("quote-text");
const categorySelect = document.getElementById("category-select");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");
const themeToggleIcon = document.getElementById("theme-toggle-icon");
const increaseFontBtn = document.getElementById("increase-font");
const decreaseFontBtn = document.getElementById("decrease-font");

function displayQuote(index) {
  const filteredQuotes = quotes.filter(
    (q) => currentCategory === "all" || q.category === currentCategory
  );
  quoteText.textContent = filteredQuotes[index].text;
}

function updateQuoteIndex(increment) {
  const filteredQuotes = quotes.filter(
    (q) => currentCategory === "all" || q.category === currentCategory
  );
  currentQuoteIndex =
    (currentQuoteIndex + increment + filteredQuotes.length) %
    filteredQuotes.length;
  displayQuote(currentQuoteIndex);
}

function displayRandomQuote() {
  const filteredQuotes = quotes.filter(
    (q) => currentCategory === "all" || q.category === currentCategory
  );
  currentQuoteIndex = Math.floor(Math.random() * filteredQuotes.length);
  displayQuote(currentQuoteIndex);
}

categorySelect.addEventListener("change", (e) => {
  currentCategory = e.target.value;
  currentQuoteIndex = 0;
  displayQuote(currentQuoteIndex);
});

increaseFontBtn.addEventListener("click", () => {
  const currentFontSize = parseFloat(
    window.getComputedStyle(quoteText, null).getPropertyValue("font-size")
  );
  quoteText.style.fontSize = currentFontSize + 2 + "px";
});

decreaseFontBtn.addEventListener("click", () => {
  const currentFontSize = parseFloat(
    window.getComputedStyle(quoteText, null).getPropertyValue("font-size")
  );
  quoteText.style.fontSize = currentFontSize - 2 + "px";
});

prevBtn.addEventListener("click", () => updateQuoteIndex(-1));
nextBtn.addEventListener("click", () => updateQuoteIndex(1));
randomBtn.addEventListener("click", displayRandomQuote);

themeToggleIcon.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    themeToggleIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    themeToggleIcon.classList.replace("fa-sun", "fa-moon");
  }
});

window.onload = () => {
  displayQuote(currentQuoteIndex);
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeToggleIcon.classList.toggle("fa-sun", isDarkMode);
  themeToggleIcon.classList.toggle("fa-moon", !isDarkMode);
};
