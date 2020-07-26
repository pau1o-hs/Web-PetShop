const { v4: uuid } = require('uuid');
const repos = require('./repositories');
const passwordEncrypter = require('./services/password-crypt');
const truncate = require('../__tests__/utils/truncate');

module.exports = async function () {
  await truncate(); // clean up the database

  // Create root admin
  await repos.admin.createNewAdmin(undefined, {
    CPF: '11111111111',
    name: 'Root Admin',
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/profile/admin1.jpg',
    phone: '11945678912',
    email: 'iamadmin@petshop.com',
    adminName: 'admin',
    password: await passwordEncrypter.encrypt('admin'),
  });

  const rootAdmin = await repos.admin.getByAdminName('admin');
  const rootId = rootAdmin._id;

  // Create child admins
  await repos.admin.createNewAdmin(rootId, {
    CPF: '11111111112',
    name: 'Bruno Santos',
    phone: '11945677438',
    email: 'brunos@petshop.com',
    adminName: 'bruno',
    password: await passwordEncrypter.encrypt('bruno'),
  });

  await repos.admin.createNewAdmin(rootId, {
    CPF: '11111111113',
    name: 'Paulo Henrique',
    phone: '11954787439',
    email: 'pauloh@petshop.com',
    adminName: 'paulo',
    password: await passwordEncrypter.encrypt('paulo'),
  });

  await repos.admin.createNewAdmin(rootId, {
    CPF: '11111111114',
    name: 'Vitor Santana',
    phone: '11947831245',
    email: 'vitors@petshop.com',
    adminName: 'vitor',
    password: await passwordEncrypter.encrypt('vitor'),
  });

  await repos.customer.create({
    CPF: '48061459912',
    name: 'Bruno Jesus',
    photo:
      'https://conhecimentocientifico.r7.com/wp-content/uploads/2020/04/jesus-5.jpg',
    phone: '16912359876',
    email: 'bruno@jesus.usp',
    password: await passwordEncrypter.encrypt('melhorquepele'),
    address: 'Rua Carlos de Camargo Salles',
  });

  await repos.service.createOne({
    name: 'Tosa',
    tags: ['tosa', 'banho'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/categorias/banhotosa.png',
    description: 'Uma tosa bem suave para seu bichinho',
    responsible: 'Paulo Henrique',
    price: 50.0,
    totalBooked: 10,
  });

  await repos.product.createOne({
    name: 'Ração para gatos 1',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-gato.jpg',
    description: 'Ração deliciosa e nutritiva para o seu gatinho.',
    price: 9.99,
    inStock: 42,
    totalSold: 17,
  });

  await repos.product.createOne({
    name: 'Ração para gatos 2',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-gato2.jpg',
    description: 'Ração deliciosa e nutritiva para o seu gatinho.',
    price: 9.99,
    inStock: 42,
    totalSold: 17,
  });

  await repos.product.createOne({
    name: 'Ração para gatos 3',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-gato3.jpg',
    description: 'Ração deliciosa e nutritiva para o seu gatinho.',
    price: 9.99,
    inStock: 42,
    totalSold: 17,
  });

  await repos.product.createOne({
    name: 'Ração para gatos 4',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-gato4.jpg',
    description: 'Ração deliciosa e nutritiva para o seu gatinho.',
    price: 9.99,
    inStock: 42,
    totalSold: 17,
  });

  await repos.product.createOne({
    name: 'Ração para cachorros 1',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-cao.jpg',
    description: 'Ração deliciosa e nutritiva para o seu cachorrinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Ração para cachorros 2',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-cao2.jpg',
    description: 'Ração deliciosa e nutritiva para o seu cachorrinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Ração para cachorros 3',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-cao3.jpg',
    description: 'Ração deliciosa e nutritiva para o seu cachorrinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Ração para cachorros 4',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-cao4.jpg',
    description: 'Ração deliciosa e nutritiva para o seu cachorrinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Ração para Passaros',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-passaro.jpg',
    description: 'Ração deliciosa e nutritiva para o seu passarinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Ração para Peixes',
    tags: ['foods'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/racoes/racao-peixe.jpg',
    description: 'Ração deliciosa e nutritiva para o seu peixinho.',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Brinquedo 1',
    tags: ['toys'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/brinquedos/brinquedo1.jpg',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Brinquedo 2',
    tags: ['toys'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/brinquedos/brinquedo2.jpg',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Brinquedo 3',
    tags: ['toys'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/brinquedos/brinquedo3.jpg',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Brinquedo 4',
    tags: ['toys'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/brinquedos/brinquedo4.jpg',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Brinquedo 5',
    tags: ['toys'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/brinquedos/brinquedo5.jpg',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Petisco 1',
    tags: ['snacks'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/petiscos/snack1.jpg',
    description: 'Petiscos',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Petisco 2',
    tags: ['snacks'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/petiscos/snack2.jpg',
    description: 'Petiscos',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Petisco 3',
    tags: ['snacks'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/petiscos/snack3.jpg',
    description: 'Petiscos',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Petisco 4',
    tags: ['snacks'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/petiscos/snack4.jpg',
    description: 'Petiscos',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Passeio 1',
    tags: ['walkway'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira1.png',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Passeio 2',
    tags: ['walkway'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira2.webp',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Passeio 3',
    tags: ['walkway'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira3.webp',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Passeio 4',
    tags: ['walkway'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira4.webp',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Passeio 5',
    tags: ['walkway'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira5.webp',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Passeio 6',
    tags: ['walkway'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira6.webp',
    description: 'Brinquedo',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Roupa 1',
    tags: ['cloths'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira1.png',
    description: 'Roupa',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Roupa 2',
    tags: ['cloths'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira2.webp',
    description: 'Roupa',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Roupa 3',
    tags: ['cloths'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira3.webp',
    description: 'Roupa',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Roupa 4',
    tags: ['cloths'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira4.webp',
    description: 'Roupa',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Roupa 5',
    tags: ['cloths'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira5.webp',
    description: 'Roupa',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Roupa 6',
    tags: ['cloths'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira5.webp',
    description: 'Roupa',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  await repos.product.createOne({
    name: 'Roupa 7',
    tags: ['cloths'],
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/passeio/coleira6.webp',
    description: 'Roupa',
    price: 11.99,
    inStock: 30,
    totalSold: 55,
  });

  const customers = await repos.customer.getAll();

  await repos.pet.createOne(customers[0]._id, {
    name: 'Tchutchucão',
    photo:
      'https://raw.githubusercontent.com/pau1o-hs/Web-PetShop/master/real-deal/frontend/public/images/tchutchucao.jpg',
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
