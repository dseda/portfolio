import contactsapp from "./images/address-book.png";
import coinflipper from "./images/coinflipper.png";
import todoapp from "./images/to-doapp.png";

export default [
  {
    id: 1,
    imgSrc: contactsapp,
    title: "Contacts App",
    summary:
      "A client-side JQuery Application : Contacts app with Create, Update & Delete operations and Search functionality. ",
    details: [
      {
        keyPoint: "JavaScript Class structure",
        description:
          "Create Contact instances. Get contact details and update contact details",
      },
      {
        keyPoint: "Search Algorithm",
        description:
          "Search contacts in an array of contact objects for each object property. Filter in real-time as you type. Used Array.prototype.every and Array.prototype.some to find all matching input strings (e.g. 'Helen London') using an intuitive search bar.",
      },
      {
        keyPoint: "Client-side Form Validation",
        description:
          "Validate UK phone number and display an error if number is not valid",
      },
    ],
    techsUsed: ["js", "css", "html", "jquery"],
    src: "https://dseda.github.io/address-book/",
  },
  {
    id: 2,
    imgSrc: todoapp,
    title: "To-do App",
    summary: "A React App: Create, Delete and Update to-dos.",
    details: [
      {
        keyPoint: "Local Storage",
        description: "Create to-dos that persist in local storage.",
      },
      {
        keyPoint: "React Lifecycle Methods",
        description:
          "ComponentDidMount() is used to load stored to-dos. Then, assign them to To-do List Component's state. ",
      },
      {
        keyPoint: "React Events",
        description: "Click, Form Submit and Input Change events",
      },
      {
        keyPoint: "Method Binding",
        description:
          "Binding with and without arguments, create new to-do and delete to-do by id, respectively",
      },
    ],
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
