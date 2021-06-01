const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API get_requested_friend', () => {
        describe('Method=POST /get_requested_friend', () => {
                it('get_requested_friend thành công', (done) => {
                        const input = {
                                user_id: 10,
                                token: 'sjjsnannsk',
                                index: 11,
                                count: 2
                        };
                        chai.request(API_URL)
                                .post('/get_requested_friend')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(1000);
                                        res.body.should.be.a('object');
                                        res.body.should.have.property(
                                                'message'
                                        );
                                        res.body.should.have.property('data');
                                        done();
                                });
                });
        });
});
