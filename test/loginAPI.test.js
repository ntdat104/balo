const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('login API', () => {
    describe('Method=POST /login', () => {
        it('Đăng nhập thành công!', (done) => {
            const newUser = {
                phonenumber: '0987654321',
                password: '123456',
            };
            chai.request(API_URL)
                .post('/login')
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Số điện thoại chưa đăng kí', (done) => {
            const newUser = {
                phonenumber: '0123456789',
                password: '12345651',
            };
            chai.request(API_URL)
                .post('/login')
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(9995);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Số điện thoại không đúng định dạng', (done) => {
            const newUser = {
                phonenumber: '0987',
                password: '123456',
            };
            chai.request(API_URL)
                .post('/login')
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(1003);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Mật khẩu sai định dạng', (done) => {
            const newUser = {
                phonenumber: '0987654321',
                password: '1',
            };
            chai.request(API_URL)
                .post('/login')
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(1003);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Số điện thoại sai định dạng', (done) => {
            chai.request(API_URL)
                .post('/login')
                .end((err, res) => {
                    res.should.have.status(1003);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Không thể kết nối Internet!', (done) => {
            const newUser = {
                phonenumber: '0987654321',
                password: '123456',
            };
            chai.request(API_URL)
                .post('/login')
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(1001);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Mật khẩu sai định dạng', (done) => {
            const newUser = {
                phonenumber: '0987654321',
                password: '0987654321',
            };
            chai.request(API_URL)
                .post('/login')
                .send(newUser)
                .end((err, res) => {
                    res.should.have.status(1003);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
    });
});
