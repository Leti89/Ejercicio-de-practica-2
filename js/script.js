const DATA = [
  { name: "Laura", lastname: "Hightower" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Joaquina", lastname: "Hand" },
  { name: "Maria", lastname: "White" },
];

// Escribe el código necesario aquí
window.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos el div con id "container"
  const container = document.getElementById("container");
  
  DATA.forEach(person => {
      // Creamos un nuevo elemento de párrafo
      const paragraph = document.createElement("p");
      // Asignamos el texto del párrafo combinando name y lastname
      paragraph.textContent = `${person.name} ${person.lastname}`;
      // Agregamos el párrafo al contenedor
      container.appendChild(paragraph);
  });
});

