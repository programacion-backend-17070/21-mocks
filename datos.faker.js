const faker = require("faker")
const mocks = []


for (let i = 0; i < 5; i++) {
  const user = {
    nombre: faker.name.firstName(),
    email: faker.internet.email(),
  }

  mocks.push(user)
}


console.log(JSON.stringify(mocks, null, 2))