const express = require("express");
const request = require("supertest");
const postRoute = require('../routes/posts');

const app = express();
app.use(express.json());
app.use('/api/post', postRoute);

jest.mock('../data/post.json', ()=> [
    {"id": 5, "title": "Bacon and Egg Breakfast Biscuits", 
    "des":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "img": "1664386175569breakfast.jpeg", "name":"Guy Fieri" },

    {"id": 33, "title": "Bacon and Egg Breakfast Biscuits", 
    "des":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "img": "1664386175569breakfast.jpeg", "name":"Guy Fieri" },

    {"id": 34, "title": "Seafood Sandwich", 
    "des":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "img": 	"1664386278139sandwich.jpeg", "name":"Gordon Ramsay" },

    {"id": 36, "title": "Home-Made Pizza", 
    "des":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    "img": "1664386580846Pizza.jpeg", "name":"Betty Crocker" }
])


describe("Integration tests for the posts API", () => {

    it('GET /api/post - success - get all the posts', async() => {
        const {body, statusCode} = await request(app).get("/api/post")
        expect(body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    title: expect.any(String),
                    des: expect.any(String),
                    img: expect.any(String),
                    name: expect.any(String)
                })
            ])
        )
        expect(statusCode).toBe(200);
    })

    it('POST /api/post - failure on invalid post body', async() => {
        const { body, statusCode } = await request(app).post('/api/post').send({
            title: '',
            des: 'Good Recipe',
            img: 'Some URL',
            name: 'Johnny Depp'
        });
        expect(statusCode).toBe(400);
        expect(body).toEqual({
            errors: [
                {
                    location: 'body',
                    msg: 'Post title is required',
                    param: 'title',
                    value: ''
                }
            ]
        });
    });

    it('POST /api/post -success- create a post', async () =>{
        const { body, statusCode } = await  request(app).post('/api/post').send({
            title: 'Apple Pie',
            des: 'Fantastic!',
            img: 'Some URL',
            name: 'Julie Andrews'
        });
        expect(statusCode).toBe(200);
        expect(body).toEqual({
            message: 'Success!'
        });
    });

    it('PUT /api/post/:id -success- Successfully updates post', async ()=>{
        const { body, statusCode } = await request(app).put('/api/post/5').send({
            title: 'Pizza',
            des: 'Crispy',
            img: 'Some URL',
            name: 'Mary Poppins'
        });
        expect(statusCode).toBe(201);
        expect(body).toEqual({
            message: 'Updated!'
        });
    }); 

    it('DELETE /api/post/:id -success- Successfully deletes post', async ()=>{
        const { body, statusCode } = await request(app).delete('/api/post/5');
        expect(statusCode).toBe(204);
    }); 
    
});

