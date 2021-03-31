const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API search', () => {
    describe('Method=POST /search', () => {
        it('Search thành công', (done) => {
            const input = {
                token: 'sjjsnannsk',
                keyword: "snshskas",
                category_id: 10,
                index: 11,
                count: 2
            };
            chai.request(API_URL)
                .post('/search')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
    });
});
