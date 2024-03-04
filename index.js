const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "a",
  },
  {
    tema: "node",
    class: "a",
  },
  {
    tema: "oop",
    class: "a",
  },
  {
    tema: "typescript",
    class: "a",
  },
  {
    tema: "css",
    class: "a",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEl = document.querySelector(".lista"); //querySelectorAll(".lista li")
  while (listaEl.firstChild) {
    listaEl.removeChild(listaEl.firstChild);
  }

  for (const item of cosasQueAprendimos) {
    let liEl = document.createElement("li");
    liEl.append(item.tema); //liEl.textContent = item.tema
    liEl.classList.add(item.class); //se puede usar or si la clase esta vacia
    listaEl.append(liEl);
  }
}

main();
