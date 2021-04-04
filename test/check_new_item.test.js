const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API check_new_item', () => {
    describe('Method=POST /check_new_item', () => {
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
        it('Số phần tử mới chưa được hiển thị.', (done) => {
            const input = {
                last_id: id,
                category_id: '0',
            };
            chai.request(API_URL)
                .post('/check_new_item')
                .send(input)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('OK');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('Giá trị category_id không hợp lệ!', (done) => {
            const input = {
                last_id: id,
                category_id: '4',
            };
            chai.request(API_URL)
                .post('/check_new_item')
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
        it('Giá trị category_id không hợp lệ!', (done) => {
            const input = {
                last_id: id,
                category_id: '-1',
            };
            chai.request(API_URL)
                .post('/check_new_item')
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
        it('Giá trị last_id không tồn tại!', (done) => {
            const input = {
                last_id: 'sjsnskass',
                category_id: '2',
            };
            chai.request(API_URL)
                .post('/check_new_item')
                .send(input)
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
