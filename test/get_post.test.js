const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API get_post', () => {
    describe('Method=POST /get_post', () => {
        it('Lấy bài viết thành công', (done) => {
            const post = {
                token: 'sjjsnannsk',
                id: 'anskndhsjjnsd',
            };
            chai.request(API_URL)
                .post('/get_post')
                .send(post)
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
