const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API add_post', () => {
    describe('Method=POST /add_post', () => {
        let token = null;
        it('Lấy token thành công', (done) => {
            const input = {
                phonenumber: '0123456789',
                password: '123456',
            };
            chai.request(API_URL)
                .post('/login')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('1000');
                    res.body.should.have.property('message').eql('OK');
                    token = res.body.token;
                    done();
                });
        });
        it('Đăng bài thành công', (done) => {
            const input = {
                token,
                described: 'Đây là bài viết đầu tiên',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('1000');
                    res.body.should.have.property('message').eql('OK');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Token không hợp lệ', (done) => {
            const input = {
                token: 'snsjsbsgs',
                described: 'Đăng bài mới 1',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Token không hợp lệ', (done) => {
            const input = {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.KTMtjpE5RsmxwEaDF_cDAelomv1QPTRu_t5sdGYZ2Bw',
                described: 'Đăng bài mới 2',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Token không hợp lệ', (done) => {
            const input = {
                token: ["apple", "banana", "lemon"],
                described: 'Đăng bài mới 3',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Token không hợp lệ', (done) => {
            const input = {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
                described: 'Đăng bài mới 4',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Token không hợp lệ', (done) => {
            const input = {
                described: 'Đăng bài mới 5',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Mô tả sai định dạng', (done) => {
            const input = {
                token,
                described: ["apple", "banana", "lemon"],
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('described is invalid');
                    done();
                });
        });
        it('Mô tả sai định dạng', (done) => {
            const input = {
                token,
                described: "",
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('described is invalid');
                    done();
                });
        });
        it('Mô tả sai định dạng', (done) => {
            const input = {
                token,
                described: () => {
                    let string = "",
                    for (let i = 0; i < 100000; i++) {
                        string += i;
                    }
                    return string;
                },
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('described is invalid');
                    done();
                });
        });
        it('Mô tả sai định dạng', (done) => {
            const input = {
                token,
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('code').eql('9998');
                    res.body.should.have
                        .property('message')
                        .eql('described is invalid');
                    done();
                });
        });
    });
});
