const request = require('supertest');

const server = 'http://localhost:33210';

describe('API', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with a 404 status', () => request(server).get('/').expect(404));
    });
  });
});
