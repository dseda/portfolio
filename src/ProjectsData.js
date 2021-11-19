import contactsapp from "./images/address-book.png";
import todoapp from "./images/todoapp.png";
import coinflipper from "./images/coinflipper.png";
export default [
  {
    id: 1,
    imgSrc: contactsapp,
    title: "Contacts App",
    summary:
      "A client-side JQuery Application : Contacts app with Create, Read, Update & Delete operations and Search functionality. ",
    details: [
      "JavaScript Class structure: Create Contact instances. Get contact details and update contact details",
      "Search Algorithm: Search contacts in an array of contact objects for each object property. Filter in real-time as you type. Used Array.prototype.every and Array.prototype.some to find all matching input strings (e.g. 'Helen London') using an intuitive search bar.",
      "Client-side Form Validation: Validate UK phone number and display an error if number is not valid",
    ],
    techsUsed: ["js", "css", "html", "jquery"],
    src: "https://dseda.github.io/address-book/",
  },
  {
    id: 2,
    imgSrc: todoapp,
    title: "Todo App",
    summary: "",
    details: [],
    techsUsed: ["js", "reactjs", "css", "html"],
    src: "https://dseda.github.io/react-todo-app/",
  },
  {
    id: 3,
    imgSrc: coinflipper,
    title: "Coin Flipper",
    summary: "",
    details: [],
    techsUsed: ["js", "reactjs", "css", "html"],
    src: "https://dseda.github.io/coin-flipper/",
  },
];
