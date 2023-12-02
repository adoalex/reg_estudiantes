const { mostrarEstudiantes } = require("./list_est");
const readlineSync = require("readline-sync");

const registrarEstudiantes = () => {
  const candidadEstudiantes = readlineSync.question(
    "Ingrese la cantidad de estudiantes a registrar: "
  );
  const estudiantes = [];

  for (let i = 0; i < candidadEstudiantes; i++) {
    const nombre = readlineSync.question(
      `Ingrese el nombre del estudiante ${i}: `
    );
    const edad = readlineSync.question(`Ingrese la edad de ${nombre}: `);

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }

  mostrarEstudiantes(estudiantes);
};
registrarEstudiantes();
