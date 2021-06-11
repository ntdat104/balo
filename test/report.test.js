const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API report", () => {
  describe("Method=POST /report", () => {
    it("Report thành công", (done) => {
      const input = {
        token: "sjjsnannsk",
        id: 12,
        subject: "sanasd",
        details: "asdnawdasd",
      };
      chai
        .request(API_URL)
        .post("/report")
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
