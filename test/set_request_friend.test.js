const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API set_request_friend', () => {
    describe('Method=POST /set_request_friend', () => {
        it('set_request_friend thành công', (done) => {
            const input = {
                user_id: 10,
                token: 'sjjsnannsk',
            };
            chai.request(API_URL)
                .post('/set_request_friend')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
});
