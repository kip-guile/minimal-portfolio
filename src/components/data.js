import pure from '../image/pure-ret.png'
import book from '../image/book_spren.png'
import lambda from '../image/lambda_door.png'
import split from '../image/split.png'
import chat from '../image/chat_rage.png'
import conway from '../image/conway.png'
import purefont from '../image/pureretail.png'
import bookfont from '../image/bookspren.png'
import lambdafont from '../image/lambdadoor.png'
import splitfont from '../image/splitthebill.png'
import chatfont from '../image/chatrage.png'
import conwayfont from '../image/conwaygol.png'
import potd from '../image/potd.png'
import potdscrn from '../image/potdscrn.png'

export const projectDump = [
  {
    img: pure,
    name: 'Pure Retail',
    details:
      'In this project, I integrated a REST API created with Express.js to handle requests for users. Utilized web tokens to securely authenticate users and authorize API endpoints for individual sessions. Used React to incorporate Ant Design, and then managed state on the client side using Redux. I also Planned and documented requirements and execution processes for agile release canvases.',
    alt: 'pure-retail',
    github: 'https://github.com/LABS-EU3/shopping_cart_backend',
    deployed: 'https://pure-retail.com/',
  },
  {
    img: lambda,
    name: 'Lambda Door',
    details:
      'In this project, I acted as scrum master for a team of (4) engineers, managing the product throughout the development lifecycle. Architected React component structure from inception to final UI/UX texting and production. Carried out needs assessment, updated requirements, evaluated solutions and delivered technical feedback regularly.',
    alt: 'lambda-door',
    github: 'https://github.com/Labs-EU-Flex/lambda-door-client',
    deployed: 'https://lambdadooreuflex.netlify.app/',
  },
  {
    img: chat,
    name: 'Chat Rage',
    details:
      'This project was initiated to practice implementing websockets to build a chat application. Practice converting React class components to Functional components, icorporating Semantic UI and using Redux to manage state on the client side.',
    alt: 'chat-rage',
    github: 'https://github.com/kip-guile/chat-rage',
    deployed: 'https://chat-rage.web.app/',
  },
  {
    img: book,
    name: 'Book Spren',
    details:
      'In this project, I handled project updates by creating an express server to read and write state from firebase. Used React to incorporate Material Design, and manage state on the client side using redux. Also developed documentation and presentation artifacts',
    alt: 'book-spren',
    github: 'https://github.com/kip-guile/Lit-spren',
    deployed: 'https://book-spren.firebaseapp.com/login',
  },
  {
    img: split,
    name: 'Split The Bill',
    details:
      'Toy app created to enables users split bills between friends. This was the first project I built to practice managing application state with redux and also learn to use a UI design library like Ant Design in this case.',
    alt: 'split-the-bill',
    github: 'https://github.com/kip-guile/split-the-bill',
    deployed: 'https://split-the-bill-six-alpha.now.sh/',
  },
  {
    img: conway,
    name: "Conway's game of life",
    details:
      'Conway’s game of life is a zero player game which means its evolution throughout the game is determined by its initial input and no further interaction is required. It was invented by Cambridge mathematician, John Horton Conway. The game became very popular when it was mentioned in an article published by Scientific American in 1970. Fundamentally, the Game of Life is a grid featuring a collection of cells which can live, die or multiply depending on the initial conditions. These cells form various patterns throughout the course of the game. This implementation of the algorithm was created using React and Redux, with arrays in an object as the data structure. It was designed so that the cells that are off the edge of the grid wrap around to the far side. Another possible implementation is to have every cell at the end of the grid to be in the ‘dead’ state. Obviously various implementations will have different effects on the lifecycle of the cells in the grid.',
    alt: 'conway-gol',
    github: 'https://github.com/kip-guile/Game-of-life',
    deployed: 'https://game-of-life.kvothe.vercel.app/',
  },
  {
    img: potdscrn,
    name: 'NASA Photo of the day',
    details:
      "A single page application which consumes ​NASA's Astronomy Picture of the Day (APOD) API​ to display the pictures of different days. By default, today’s picture of the day is displayed, but the user can select any other day. Users can also select a specific image and mark it as favorite, these selections persist between browser sessions. Features include:  Displaying the picture of the day, its title and description based on the date selected from a date picker. Saving pictures of the day data into local storage. Ability to see and select any of the pictures of the day data saved as favourite. Ability to delete a single or all the favorited pictures of the day data from local storage. Ability to move the selected date for the picture of the day using previous and next day buttons besides using the date picker. Persisting favorited data on a NoSQL Database (Firebase, Mongo, etc.). Photo previews of previous and next pictures of the day.",
    alt: 'potd',
    github: 'https://github.com/kip-guile/photo-of-the-day',
    deployed: 'https://photo-of-the-day.vercel.app/',
  },
]

export const dump = [
  {
    gridColumn: '1/2',
    gridRow: '1/2',
    mid: false,
    src: purefont,
    alt: 'pure-retail',
    arr: ['React', 'NodeJS', 'MongoDB'],
    name: 'Pure Retail',
    github: 'https://github.com/LABS-EU3/shopping_cart_backend',
    deployed: 'https://pure-retail.com/',
  },
  {
    gridColumn: '2/3',
    gridRow: '1/2',
    src: lambdafont,
    mid: true,
    alt: 'lambda-door',
    arr: ['React', 'NodeJS', 'PostGres'],
    name: 'Lambda Door',
    github: 'https://github.com/Labs-EU-Flex/lambda-door-client',
    deployed: 'https://lambdadooreuflex.netlify.app/',
  },
  {
    gridColumn: '2/3',
    gridRow: '2/3',
    src: chatfont,
    mid: true,
    alt: 'chat-rage',
    arr: ['React', 'Firebase'],
    name: 'Chat Rage',
    github: 'https://github.com/kip-guile/chat-rage',
    deployed: 'https://chat-rage.web.app/',
  },
  {
    gridColumn: '3/4',
    gridRow: '1/2',
    src: bookfont,
    mid: false,
    alt: 'book-spren',
    arr: ['React', 'NodeJS', 'Firebase'],
    name: 'Book Spren',
    github: 'https://github.com/kip-guile/Lit-spren',
    deployed: 'https://book-spren.firebaseapp.com/login',
  },
  {
    gridColumn: '3/4',
    gridRow: '2/3',
    src: splitfont,
    mid: false,
    alt: 'split-the-bill',
    arr: ['React', 'NodeJS', 'PostGres'],
    name: 'Split the bill',
    github: 'https://github.com/kip-guile/split-the-bill',
    deployed: 'https://split-the-bill-six-alpha.now.sh/',
  },
  {
    gridColumn: '2/3',
    gridRow: '3/4',
    src: conwayfont,
    mid: true,
    alt: 'conway-gol',
    arr: ['React', 'Redux'],
    name: "Conway's game of life",
    github: 'https://github.com/kip-guile/Game-of-life',
    deployed: 'https://game-of-life.kvothe.vercel.app/',
  },
  {
    gridColumn: '1/2',
    gridRow: '2/3',
    src: potd,
    mid: false,
    alt: 'potd',
    arr: ['TypeScript', 'React', 'NodeJs'],
    name: 'Photo of the day',
    github: 'https://github.com/kip-guile/photo-of-the-day',
    deployed: 'https://photo-of-the-day.vercel.app/',
  },
]

export const contact = [
  { name: 'email', url: 'mailto:oguejioforalexander@gmail.com' },
  { name: 'github', url: 'https://github.com/kip-guile' },
  {
    name: 'linkedIn',
    url: 'https://www.linkedin.com/in/alexanderoguejiofor/',
  },
  { name: 'dev', url: 'https://dev.to/master_elodin' },
  {
    name: 'goodreads',
    url: 'https://www.goodreads.com/user/show/26479310-pokerface',
  },
  { name: 'twitter', url: 'https://twitter.com/master_elodin' },
]
