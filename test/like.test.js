const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API like", () => {
  describe("Method=POST /like", () => {
    it("Like thành công", (done) => {
      const input = {
        token: "snnsbskj",
        id: "jnnshnns",
      };
      chai
        .request(API_URL)
        .post("/like")
        .send(input)
        .end((err, res) => {
          res.should.have.status(1000);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("data");
          done();
        });
    });
  });
});
