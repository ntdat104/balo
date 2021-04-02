const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

//TODO AIP_URL
const API_URL = 'http://localhost:3000/api';

describe('Posts API', () => {
    /**
     * Test the GET route
     */
    describe('/GET api/posts', () => {
        it('It should GET all the posts', (done) => {
            chai.request(API_URL)
                .get('/posts')
                .end((err, res) => {
                    res.should.have.status(200)
                    console.log(res.body);
                    done();
                });
        });
    });
});
