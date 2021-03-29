const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API logout', () => {
    describe('Method=POST /logout', () => {
        it('Đăng xuất thành công!', (done) => {
            const token = 'asjdanwdnaskd';
            chai.request(API_URL)
                .post('/logout')
                .send(token)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
        it('Không thể kết nối Internet!', (done) => {
            const token = 'asjdanwdnaskd';
            chai.request(API_URL)
                .post('/logout')
                .send(token)
                .end((err, res) => {
                    res.should.have.status(1001);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
});
