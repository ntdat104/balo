const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API edit_comment', () => {
    describe('Method=POST /edit_comment', () => {
        it('Sửa comment thành công', (done) => {
            const input = {
                token: "snnsbskj",
                id: "jnnshnns",
                id_com: "jnnshnns",
                comment: "jnnshnassns",
            };
            chai.request(API_URL)
                .post('/edit_comment')
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
