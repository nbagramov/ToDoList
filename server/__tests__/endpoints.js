import app from '../src/app'; // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('testing-server-routes', () => {
    afterAll(() => setTimeout(() => process.exit(), 1000));
    it('gets the test endpoint', async done => {
        const response = await request.get('/');
        const {status} = response;

        expect(status).toBe(200);
        done();
    });
    it('post the test endpoint', async done => {
        const response = await request.post('/createTask');
        const {status} = response;

        expect(status).toBe(200);
        done();
    });
    it('patch the test endpoint', async done => {
        const response = await request.patch('/updateTask');
        const {status} = response;

        expect(status).toBe(200);
        done();
    });
    it('delete the test endpoint', async done => {
        const response = await request.delete('/deleteTask');
        const {status} = response;

        expect(status).toBe(200);
        done();
    });
});

