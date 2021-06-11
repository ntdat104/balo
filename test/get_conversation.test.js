const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API get_conversation", () => {
  describe("Method=POST /get_conversation", () => {
    it("get_conversation thành công", (done) => {
      const input = {
        token: "snnsbskj",
        partner_id: "jnnshnns",
        conversation_id: "jnnshnss",
        index: "jnnshnss",
        count: "jnnshs",
      };
      chai
        .request(API_URL)
        .post("/get_conversation")
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
