const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API add_post', () => {
    describe('Method=POST /add_post', () => {
        it('Đăng bài thành công!', (done) => {
            const newPost = {
                token: 'sjjsnannsk',
                described: 'đăng trạng thái',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(newPost)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Không thể kết nối Internet!', (done) => {
            const newPost = {
                token: 'sjjsnannsk',
                described: 'đăng trạng thái',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(newPost)
                .end((err, res) => {
                    res.should.have.status(1001);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
});
