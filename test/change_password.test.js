const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API change_password', () => {
        describe('Method=POST /change_password', () => {
                it('change_password thành công', (done) => {
                        const input = {
                                password: 'sjsnsba',
                                token: 'sjjsnannsk',
                                new_password: 'snsnjkak'
                        };
                        chai.request(API_URL)
                                .post('/change_password')
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
