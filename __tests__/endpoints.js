const app = require('../api/app') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe("testing-server-routes", () => {
    it("gets the test endpoint", async done => {
        const response = await request.get("/");

        expect(response.status).toBe(200);
        done();
    });
    it("post the test endpoint", async done => {
        const response = await request.post("/createTask").send({
            task: 'test',
            isEdit: false,
            isDone: false,
        });

        expect(response.status).toBe(200);
        done();
    });
    it("patch the test endpoint", async done => {
        const response = await request.patch("/updateTask");

        expect(response.status).toBe(200);
        done();
    });
    it("delete the test endpoint", async done => {
        const response = await request.delete("/deleteTask");

        expect(response.status).toBe(200);
        done();
    });
});

