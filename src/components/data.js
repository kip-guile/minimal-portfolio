import pure from "../image/pure-ret.png";
import book from "../image/book_spren.png";
import lambda from "../image/lambda_door.png";
import split from "../image/split.png";
import chat from "../image/chat_rage.png";

export const dump = [
  {
    gridColumn: "1/2",
    gridRow: "1/2",
    src: pure,
    alt: "pure-retail",
    arr: ["React", "NodeJS", "MongoDB"],
    name: "Pure Retail",
    github: "https://github.com/LABS-EU3/shopping_cart_backend",
    deployed: "https://pure-retail.com/",
  },
  {
    gridColumn: "2/3",
    gridRow: "1/2",
    src: lambda,
    alt: "lambda-door",
    arr: ["React", "NodeJS", "PostGres"],
    name: "Lambda Door",
    github: "https://github.com/Labs-EU-Flex/lambda-door-client",
    deployed: "https://lambdadooreuflex.netlify.app/",
  },
  {
    gridColumn: "2/3",
    gridRow: "2/3",
    src: chat,
    alt: "chat-rage",
    arr: ["React", "Firebase"],
    name: "Chat Rage",
    github: "https://github.com/kip-guile/chat-rage",
    deployed: "https://chat-rage.web.app/",
  },
  {
    gridColumn: "3/4",
    gridRow: "1/2",
    src: book,
    alt: "book-spren",
    arr: ["React", "NodeJS", "Firebase"],
    name: "Book Spren",
    github: "https://github.com/kip-guile/Lit-spren",
    deployed: "https://book-spren.firebaseapp.com/login",
  },
  {
    gridColumn: "3/4",
    gridRow: "2/3",
    src: split,
    alt: "split-the-bill",
    arr: ["React", "NodeJS", "PostGres"],
    name: "Split the bill",
    github: "https://github.com/kip-guile/split-the-bill",
    deployed: "https://split-the-bill-six-alpha.now.sh/",
  },
];

export const bio = () => [
  `I'm Alex. I recently completed Lambda School's Web Development program and have been programming consistently for the past year.`,
  "Most of my work day to day is in React/Redux/Node architecture with specialization in state management paradigms.",
  "I am also a PMI certified Business Analyst and the skills I acquired have come in handy with managing requirements on all projects.",
  "I love to read fiction, and I write reviews about some of the books I read.",
  "If you're still reading up to this point, odds are you're cool and / or you're interested in what I can do. Happy to have a conversation. Please reach out",
];
