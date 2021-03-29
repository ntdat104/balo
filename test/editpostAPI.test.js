const chai = require('chai');
const chaiHttp = require('chai-http');

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require('../apiURL');

describe('editpost API', () => {
    describe('Method=POST /editpost', () => {
        it('Lấy bài viết thành công', (done) => {
            const editPost = {
                token: 'sjjsnannsk',
                id: 'anskndhsjjnsd',
                described: 'sbsvs',
                image: ['ảnh 1', 'ảnh 2', 'ảnh 3'],
                image_del: ['ảnh x', 'ảnh y'],
                image_sort: [2, 0, 1],
                video: 'url video',
            };
            chai.request(API_URL)
                .post('/editpost')
                .send(editPost)
                .end((err, res) => {
                    res.should.have.status(1000);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
});
