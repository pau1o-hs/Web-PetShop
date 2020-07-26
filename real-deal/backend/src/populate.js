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
    tags: ['foods', 'walkway'],
    photo: '../mockup/images/racoes/racao-gato.jpg',
    description: 'Ração deliciosa e nutritiva para o seu gatinho.',
    price: 9.99,
    inStock: 42,
    totalSold: 17,
  });

  await repos.product.createOne({
    name: 'Ração para cachorros',
    tags: ['foods', 'snacks'],
    photo: '../mockup/images/racoes/racao-cao.jpg',
    description: 'Ração deliciosa e nutritiva para o seu cachorrinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  const customers = await repos.customer.getAll();

  await repos.pet.createOne(customers[0]._id, {
    name: 'Tchutchucão',
    photo: 'um/exemplo3',
    race: 'Dog do mal',
    age: 5,
  });

  const services = await repos.service.getAllActives();
  const pet = await repos.pet.getBySlug(customers[0], 'tchutchucao');
  const products = await repos.product.getAllActives();

  await repos.order.createOne({
    number: uuid(),
    customer: customers[0]._id,
    services: [
      {
        service: services[0]._id,
        pet: services[0]._id,
        date: Date.UTC(2020, 6, 27, 12, 0), // 27/07/2020, as 12:00
      },
    ],
    products: [
      {
        quantity: 5,
        product: products[0]._id,
      },
      {
        quantity: 8,
        product: products[1]._id,
      },
    ],
  });

  await repos.schedule.fillSlot({
    customer: customers[0]._id,
    service: services[0]._id,
    date: Date.UTC(2020, 6, 27, 12, 0), // 27/07/2020, as 12:00
    pet: pet._id,
    state: 'BOOKED',
  });

  await repos.schedule.fillSlot({
    service: services[0]._id,
    date: Date.UTC(2020, 6, 27, 13, 0), // 27/07/2020, as 13:00
  });
};
