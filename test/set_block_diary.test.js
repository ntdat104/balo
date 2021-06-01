const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API set_block_diary', () => {
        describe('Method=POST /set_block_diary', () => {
                it('set_block_diary thành công', (done) => {
                        const input = {
                                user_id: 10,
                                token: 'sjjsnannsk',
                                type: 2
                        };
                        chai.request(API_URL)
                                .post('/set_block_diary')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(1000);
                                        res.body.should.be.a('object');
                                        res.body.should.have.property(
                                                'message'
                                        );
                                        done();
                                });
                });
        });
});
