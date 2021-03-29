const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('deletepost API', () => {
    describe('Method=POST /deletepost', () => {
        it('Lấy bài viết thành công', (done) => {
            const deletePost = {
                token: 'sjjsnannsk',
                id: 'anskndhsjjnsd',
            };
            chai.request(API_URL)
                .post('/deletepost')
                .send(deletePost)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
});
