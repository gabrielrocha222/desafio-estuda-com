import { faker } from '@faker-js/faker';

export class UserInformation {
  constructor() {
    this.firstName = faker.person.firstName(); // Nome aleatório
    this.lastName = faker.person.lastName();  // Sobrenome aleatório
    this.address = faker.location.streetAddress(); // Endereço aleatório
    this.postalCode = faker.location.zipCode(); // CEP aleatório
    this.province = faker.location.state(); // Estado aleatório
  }
}
