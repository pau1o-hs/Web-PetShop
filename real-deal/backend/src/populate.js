const { v4: uuid } = require('uuid');
const repos = require('./repositories');
const passwordEncrypter = require('./services/password-crypt');
const truncate = require('../__tests__/utils/truncate');

module.exports = async function () {
  await truncate(); // clean up the database

  await repos.admin.createNewAdmin({
    CPF: '11111111111',
    name: 'Root Admin',
    phone: '11945678912',
    email: 'iamadmin@petshop.com',
    adminName: 'admin',
    password: await passwordEncrypter.encrypt('admin'),
  });

  await repos.customer.create({
    CPF: '48061459912',
    name: 'Bruno Jesus',
    phone: '16912359876',
    email: 'bruno@jesus.usp',
    password: await passwordEncrypter.encrypt('melhorquepele'),
    address: 'Rua Carlos de Camargo Salles',
  });

  await repos.service.createOne({
    name: 'Tosa',
    tags: ['tag1', 'tag2'],
    photo: 'path/example',
    description: 'Uma tosa bem suave para seu bichinho',
    responsible: 'Paulo Henrique',
    price: 50.0,
    totalBooked: 10,
  });

  await repos.product.createOne({
    name: 'Ração para gatos',
    tag: ['foods'],
    photo: 'um/exemplo',
    description: 'Ração deliciosa e nutritiva para o seu gatinho.',
    price: 9.99,
    inStock: 42,
    totalSold: 17,
  });

  await repos.product.createOne({
    name: 'Ração para cachorros',
    tag: ['foods'],
    photo: 'um/exemplo2',
    description: 'Ração deliciosa e nutritiva para o seu cachorrinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.pet.createOne('5f1c5b6a44652540c66f0f28', {
    name: 'Tchutchucão',
    photo: 'um/exemplo3',
    race: 'Dog do mal',
    age: 5,
  });

  await repos.order.createOne({
    number: uuid(),
    customer: '5f1c5b6a44652540c66f0f28',
    services: [
      {
        service: '5f1c61785f23af470a76ed97',
        pet: '5f1c61785f23af470a76ed9a',
        date: Date.UTC(2020, 6, 27, 12, 0), // 27/07/2020, as 12:00
      },
    ],
    products: [
      {
        quantity: 5,
        products: '5f1c61785f23af470a76ed98',
      },
      {
        quantity: 8,
        products: '5f1c61785f23af470a76ed99',
      },
    ],
  });

  await repos.schedule.fillSlot({
    service: '5f1c61785f23af470a76ed97',
    date: Date.UTC(2020, 6, 27, 12, 0), // 27/07/2020, as 12:00
    pet: '5f1c61785f23af470a76ed9a',
    state: 'BOOKED',
  });

  await repos.schedule.fillSlot({
    service: '5f1c61785f23af470a76ed97',
    date: Date.UTC(2020, 6, 27, 13, 0), // 27/07/2020, as 13:00
  });
};
