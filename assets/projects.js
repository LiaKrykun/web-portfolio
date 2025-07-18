import project1_img from "../assets/movich-screenshot.png";
import project2_img from "../assets/estore-screenshot.jpg";
import project3_img from "../assets/delivery-screenshot.png";

const projects = [
  {
    pj_num: 1,
    pj_url: "https://thekrykun.com/mrmovich",
    pj_github: "https://github.com/LiaKrykun/mrmovich",
    pj_name: "Movie Database",
    pj_img: project1_img,
    pj_overview:
      "A movie database built with React.js and integrated with the themoviedb.org API. Users can browse movies and add them to a favorites list, which is saved persistently using local storage. The interface was designed in Adobe XD using wireframes, mockups, and prototypes, following a design system and component-based architecture.",
    pj_time: "4 weeks",
    pj_stack: "ReactJS, Adobe Photoshop, Adobe XD",
  },
  {
    pj_num: 2,
    pj_name: "Capstone project",
    pj_img: project2_img,
    pj_overview: "Still coming...",
    pj_time: "Still coming...",
    pj_stack: "Still coming...",
  },
  {
    pj_num: 3,
    pj_name: "Delivery Service",
    pj_img: project3_img,
    pj_overview: "Still coming...",
    pj_time: "Still coming...",
    pj_stack: "Still coming...",
  },
];

export default projects;
