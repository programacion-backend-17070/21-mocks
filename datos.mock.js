const nombres = ['Facundo', 'Santiago', 'Luciano', 'Brian', 'Joaquin']
const apellidos = ['Saravia', 'Salinas', 'Otero', 'Schmidt', 'Colavini']
const colores = ['rojo', 'azul', 'marron', 'verde', 'rosa']

const mocks = []

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 5; i++) {
  const user = {
    nombre: nombres[getRandomInt(0, 4)],
    apellido: apellidos[getRandomInt(0, 4)],
    color: colores[getRandomInt(0, 4)],
  }

  mocks.push(user)
}


console.log(JSON.stringify(mocks, null, 2))