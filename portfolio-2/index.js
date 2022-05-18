projects = [
  {
    title: "Quizzical",
    image: "./quizzical.png",
    link: "https://react-quizzicall.netlify.app",
  },
  {
    title: "Color Picker",
    image: "./color-picker.png",
    link: "https://color-picker5.netlify.app",
  },
  {
    title: "To-Do App with React",
    image: "./todo-app.png",
    link: "https://simple-todo-with-react.netlify.app",
  },
  {
    title: "Dashboard",
    image: "./dashboard.png",
    link: "https://ozge-dashboard.netlify.app",
  },
];

projects.map((p) => {
  document.getElementById("projects-content").innerHTML += `
    <div class="single-project">
        <h3>${p.title}</h3>
        <img src=${p.image} />
        <a href=${p.link} target=_blank>Visit...</a>
    </div>
    `;
});
