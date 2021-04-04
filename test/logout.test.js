const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API logout', () => {
    describe('Method=POST /logout', () => {
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
        it('Đăng xuất thành công!', (done) => {
            const input = {
                token,
            };
            chai.request(API_URL)
                .post('/logout')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('OK');
                    done();
                });
        });
        it('Token không hợp lệ!', (done) => {
            const input = {
                token: 'snsjsbsgs',
            };
            chai.request(API_URL)
                .post('/logout')
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
                .post('/logout')
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
    });
});
