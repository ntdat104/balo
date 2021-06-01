const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API login', () => {
        describe('Method=POST /login', () => {
                it('Đăng nhập thành công!', (done) => {
                        const input = {
                                phonenumber: '0123456789',
                                password: '123456'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1000');
                                        res.body.should.have
                                                .property('message')
                                                .eql('OK');
                                        done();
                                });
                });
                it('Số điện thoại chưa đăng kí', (done) => {
                        const input = {
                                phonenumber: '0524312548',
                                password: '123456'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('9995');
                                        res.body.should.have
                                                .property('message')
                                                .eql('User is not validated');
                                        done();
                                });
                });
                it('Số điện thoại sai định dạng', (done) => {
                        const input = {
                                phonenumber: '1234567890',
                                password: '123456'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Số điện thoại sai định dạng', (done) => {
                        const input = {
                                phonenumber: '0123',
                                password: '123456'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Số điện thoại sai định dạng', (done) => {
                        const input = {
                                phonenumber: 'abc1234',
                                password: '123456'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Số điện thoại sai định dạng', (done) => {
                        const input = {
                                password: '123456'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Số điện thoại sai định dạng', (done) => {
                        const input = {};
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Mật khẩu sai định dạng', (done) => {
                        const input = {
                                phonenumber: '0987654321',
                                password: 'avbc'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Mật khẩu sai định dạng', (done) => {
                        const input = {
                                phonenumber: '0987654321',
                                password: 'avbc12345223'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Mật khẩu sai định dạng', (done) => {
                        const input = {
                                phonenumber: '0987654321',
                                password: '0987654321'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
                it('Mật khẩu sai định dạng', (done) => {
                        const input = {
                                phonenumber: '0987654321'
                        };
                        chai.request(API_URL)
                                .post('/login')
                                .send(input)
                                .end((err, res) => {
                                        res.should.have.status(200);
                                        res.body.should.be.a('object');
                                        res.body.should.have
                                                .property('code')
                                                .eql('1003');
                                        res.body.should.have
                                                .property('message')
                                                .eql(
                                                        'Parameter type is invalid'
                                                );
                                        done();
                                });
                });
        });
});
