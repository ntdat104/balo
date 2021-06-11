const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API delete_message", () => {
  describe("Method=POST /delete_message", () => {
    it("delete_message thành công", (done) => {
      const input = {
        token: "snnsbskj",
        message_id: "jnnshnns",
        conversation_id: "jnnshnss",
        parner_id: "jnnshnss",
      };
      chai
        .request(API_URL)
        .post("/delete_message")
        .send(input)
        .end((err, res) => {
          res.should.have.status(1000);
          res.body.should.be.a("object");
          res.body.should.have.property("message");
          done();
        });
    });
  });
});
