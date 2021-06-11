const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API get_comment", () => {
  describe("Method=POST /get_comment", () => {
    it("Lấy comment thành công", (done) => {
      const input = {
        id: 12,
        index: "snbsjj",
        count: "asdnawd",
      };
      chai
        .request(API_URL)
        .post("/get_comment")
        .send(input)
        .end((err, res) => {
          res.should.have.status(1000);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          res.body.should.have.property("data");
          res.body.should.have.property("is_blocked");
          done();
        });
    });
  });
});
