import app from '../api/app'; // Link to your server file
const supertest = require('supertest');
const request = supertest(app);

describe('testing-server-routes', () => {
    it('gets the test endpoint', async done => {
        const response = await request.get('/');
        const {status} = response;

        expect(status).toBe(200);
        done();
    });
    it('post the test endpoint', async done => {
        const response = await request.post('/createTask').send({
            task: 'test',
            isEdit: false,
            isDone: false,
        });
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

