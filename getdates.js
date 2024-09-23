// Obtener el año actual para el copyright
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Obtener la última fecha de modificación del documento
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = "Última modificación: " + document.lastModified;
