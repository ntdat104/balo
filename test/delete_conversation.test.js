const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API delete_conversation', () => {
        describe('Method=POST /delete_conversation', () => {
                it('delete_conversation thành công', (done) => {
                        const input = {
                                token: 'snnsbskj',
                                conversation_id: 'jnnshnss',
                                parner_id: 'jnnshnss'
                        };
                        chai.request(API_URL)
                                .post('/delete_conversation')
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
