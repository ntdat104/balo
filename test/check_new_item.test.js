const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API check_new_item', () => {
    describe('Method=POST /check_new_item', () => {
        it('Số phần tử mới chưa được hiển thị.', (done) => {
            const newItem = {
                last_id: 'anskndhsjjnsd',
                category_id: 'snsjbbgss',
            };
            chai.request(API_URL)
                .post('/check_new_item')
                .send(newItem)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
    });
});
