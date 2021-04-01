const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API set_accept_friend', () => {
    describe('Method=POST /set_accept_friend', () => {
        it('set_accept_friend thành công', (done) => {
            const input = {
                user_id: 10,
                token: 'sjjsnannsk',
                is_accept: 'snnsj',
            };
            chai.request(API_URL)
                .post('/set_accept_friend')
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
