const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API get_post', () => {
    describe('Method=POST /get_post', () => {
        let token = null;
        let id = null;
        it('Lấy token thành công!', (done) => {
            const input = {
                phonenumber: '0987654321',
                password: '123456',
            };
            chai.request(API_URL)
                .post('/login')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('OK');
                    token = res.body.token;
                    done();
                });
        });
        it('Đăng bài thành công!', (done) => {
            const input = {
                token,
                described: 'Test đăng bài',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('OK');
                    res.body.should.have.property('data');
                    id = res.body.data.id;
                    done();
                });
        });
        it('Lấy bài viết thành công', (done) => {
            const post = {
                token,
                id,
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
        it('Token không hợp lệ!', (done) => {
            const post = {
                token: 'sknsjss',
                id,
            };
            chai.request(API_URL)
                .post('/get_post')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(9998);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Token không hợp lệ!', (done) => {
            const post = {
                token: '',
                id,
            };
            chai.request(API_URL)
                .post('/get_post')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(9998);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Bài viết không tồn tại!', (done) => {
            const post = {
                token,
                id: 'snshkasn',
            };
            chai.request(API_URL)
                .post('/get_post')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(9992);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Post is not existed');
                    done();
                });
        });
    });
});
