// Referencias a elementos del DOM
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector("toggler-icon");

// Variable para controlar el tema oscuro o claro
let isDark = true;

// Manejo de clics en los botones
buttons.forEach((item) => {
  item.onclick = () => {
    // Lógica para cada tipo de botón
    if (item.id == "clear") {
      // Limpiar el display
      display.innerText = "";
    } else if (item.id == "backspace") {
      // Eliminar el último carácter
      let string = display.innerText.toString();
      display.innerText = string.substring(0, string.length - 1);
    } else if (display.innerText !== "" && item.id == "equal") {
      // Evaluar la expresión matemática en el display
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      // Mostrar "Null" si el display está vacío y se pulsa "="
      display.innerText = "Null";
      // Limpiar después de 2 segundos
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      // Agregar el contenido del botón al display
      display.innerText += item.id;
    }
  };
});

// Manejo de eventos de teclado para números
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[0-9]/.test(key)) {
    // Agregar el número al display si la tecla es un número
    display.innerText += key;
  } else if (key === "Enter" && display.innerText !== "") {
    event.preventDefault();
    // Si se presiona Enter y el display no está vacío, evaluar la expresión
    display.innerText = eval(display.innerText);
  } else if (/[+,-,*,/]/.test(key)) {
    // Si la tecla es un operador, agregarlo al display
    display.innerText += key;
  }
});

// Manejo del cambio de tema
themeToggleBtn.onclick = () => {
  // Alternar la clase "dark" en la calculadora
  calculator.classList.toggle("dark");
  // Alternar la clase "active" en el botón de cambio de tema
  themeToggleBtn.classList.toggle("active");
  // Cambiar el estado de la variable isDark
  isDark = !isDark;
};
