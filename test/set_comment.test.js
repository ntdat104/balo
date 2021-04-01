const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API set_comment', () => {
    describe('Method=POST /set_comment', () => {
        it('Set comment thành công', (done) => {
            const input = {
                token: 'snnsbskj',
                id: 'jnnshnns',
                comment: 'snnsjh',
                index: 'snaksnn',
                count: 'snnskha',
            };
            chai.request(API_URL)
                .post('/set_comment')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    res.body.should.have.property('is_blocked');
                    done();
                });
        });
    });
});
