function alternarVisibilidade() {
  const elemento = document.getElementById("texto3");
  if (elemento.style.display === "none" || elemento.style.display === "") {
    elemento.style.display = "block";
  } else {
    elemento.style.display = "none";
  }
}
