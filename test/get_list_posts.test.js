const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API get_list_posts', () => {
    describe('Method=POST /get_list_posts', () => {
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
                described: 'Test đăng bài mới nhất',
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
        it('Lấy danh sách bài viết thành công', (done) => {
            const post = {
                token,
                lastid: id,
                index: '2',
                count: '10',
            };
            chai.request(API_URL)
                .post('/get_list_posts')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('OK');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Token không hợp lệ!', (done) => {
            const post = {
                token: 'sbsjbssjjs',
                lastid: id,
                index: '2',
                count: '10',
            };
            chai.request(API_URL)
                .post('/get_list_posts')
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
                lastid: id,
                index: '2',
                count: '10',
            };
            chai.request(API_URL)
                .post('/get_list_posts')
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
        it('Tham không hợp lệ!', (done) => {
            const post = {
                token,
                lastid: id,
                index: '-1',
                count: '10',
            };
            chai.request(API_URL)
                .post('/get_list_posts')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(1004);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Parameter value is invalid');
                    done();
                });
        });
        it('Tham không hợp lệ!', (done) => {
            const post = {
                token,
                lastid: id,
                index: '2',
                count: '-1',
            };
            chai.request(API_URL)
                .post('/get_list_posts')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(1004);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Parameter value is invalid');
                    done();
                });
        });
        it('Tham không hợp lệ!', (done) => {
            const post = {
                token,
                lastid: id,
                index: '-1',
                count: '-1',
            };
            chai.request(API_URL)
                .post('/get_list_posts')
                .send(post)
                .end((err, res) => {
                    res.should.have.status(1004);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Parameter value is invalid');
                    done();
                });
        });
    });
});
