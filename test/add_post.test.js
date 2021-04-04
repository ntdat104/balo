const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API add_post', () => {
    describe('Method=POST /add_post', () => {
        let token = null;
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
                described: 'Đăng trạng thái mới',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('OK');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Token không hợp lệ!', (done) => {
            const input = {
                token: 'snsjsbsgs',
                described: 'Đăng trạng thái mới 1',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
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
            const input = {};
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(9998);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Token is invalid');
                    done();
                });
        });
        it('Bài đăng không có mô tả', (done) => {
            const input = {
                token,
                described: '',
            };
            chai.request(API_URL)
                .post('/add_post')
                .send(input)
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
