// Función para marcar tareas como completadas o desmarcarlas
function marcarCompletada(elemento) {
  if (elemento.classList.contains("completada")) {
    elemento.classList.remove("completada");
  } else {
    elemento.classList.add("completada");
  }
}
