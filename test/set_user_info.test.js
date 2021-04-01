const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('API set_user_info', () => {
    describe('Method=POST /set_user_info', () => {
        it('set_user_info thành công', (done) => {
            const input = {
                token: 'sjjsnannsk',
                username: 'snsnjkak',
                description: 'sxjnsh',
                avatar: 'sxjnsh',
                address: 'sxjnsh',
                city: 'sxjnsh',
                country: 'sxjnsh',
                cover_image: 'sxjnsh',
                link: 'sxjnsh',
            };
            chai.request(API_URL)
                .post('/set_user_info')
                .send(input)
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
