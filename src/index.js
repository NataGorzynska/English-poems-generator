function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem goes here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);
