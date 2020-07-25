const request = require('supertest');
const app = require('../../src/app');

describe('Customer authentication', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // makes jest stop giving an error when running test suites
  });

  it('authenticates when given valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({ email: 'bruno@jesus.usp', password: 'melhorquepele' });
    expect(res.status).toBe(200);
  });

  it("doesn't autheticate when given invalid email", async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({ email: 'bruno@jesus.unicamp', password: 'melhorquepele' });
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('message');
  });

  it("doesn't autheticate when given invalid password", async () => {
    const res = await request(app)
      .post('/api/auth')
      .send({ email: 'bruno@jesus.usp', password: 'melhorquemaradona' });
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('message');
  });
});
