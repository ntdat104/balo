const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API signup', () => {
    describe('Method=POST /signup', () => {
        it('Đăng kí thành công!', (done) => {
            const input = {
                phonenumber: '0987654321',
                password: '123456',
            };
            chai.request(API_URL)
                .post('/signup')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('OK');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Người dùng đã tồn tại', (done) => {
            const input = {
                phonenumber: '0987654321',
                password: '12345651',
            };
            chai.request(API_URL)
                .post('/signup')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(9996);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('User existed');
                    done();
                });
        });
        it('Số điện thoại không đúng định dạng', (done) => {
            const input = {
                phonenumber: '0987',
                password: '123456',
            };
            chai.request(API_URL)
                .post('/signup')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1003);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Parameter type is invalid');
                    done();
                });
        });
        it('Mật khẩu sai định dạng', (done) => {
            const input = {
                phonenumber: '0988776543',
                password: '1',
            };
            chai.request(API_URL)
                .post('/signup')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1003);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Parameter type is invalid');
                    done();
                });
        });
        it('Số điện thoại sai định dạng', (done) => {
            const input = {};
            chai.request(API_URL)
                .post('/signup')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1003);
                    res.body.should.be.a('object');
                    res.body.should.have
                        .property('message')
                        .eql('Parameter type is invalid');
                    done();
                });
        });
    });
});
