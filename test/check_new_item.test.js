const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API check_new_item", () => {
  describe("Method=POST /check_new_item", () => {
    let token = null;
    let id = null;
    it("Lấy token thành công!", (done) => {
      const input = {
        phonenumber: "0123456789",
        password: "123456",
      };
      chai
        .request(API_URL)
        .post("/login")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("1000");
          res.body.should.have.property("message").eql("OK");
          token = res.body.token;
          done();
        });
    });
    it("Đăng bài thành công", (done) => {
      const input = {
        token,
        described: "Đây là bài viết thứ tư",
      };
      chai
        .request(API_URL)
        .post("/add_post")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("1000");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("data");
          id = res.body.data.id;
          done();
        });
    });
    it("Lấy bài viết thành công", (done) => {
      const post = {
        token,
        id,
      };
      chai
        .request(API_URL)
        .post("/get_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("1000");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("data");
          done();
        });
    });
    it("Số phần tử mới", (done) => {
      const input = {
        last_id: id,
        category_id: "0",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("1000");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("data");
          done();
        });
    });
    it("Last_id không hợp lệ", (done) => {
      const input = {
        last_id: "sbsjbssjjs",
        category_id: "0",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Last_id không hợp lệ", (done) => {
      const input = {
        last_id: ["apple", "banana", "lemon"],
        category_id: "0",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Last_id không hợp lệ", (done) => {
      const input = {
        last_id: "abc",
        category_id: "0",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Last_id không hợp lệ", (done) => {
      const input = {
        category_id: "0",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Last_id không hợp lệ", (done) => {
      const input = {
        last_id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        category_id: "0",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Category_id không hợp lệ", (done) => {
      const input = {
        last_id: id,
        category_id: "sbsjbssjjs",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Category_id không hợp lệ", (done) => {
      const input = {
        last_id: id,
        category_id: ["apple", "banana", "lemon"],
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Category_id không hợp lệ", (done) => {
      const input = {
        last_id: id,
        category_id: "abc",
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
    it("Category_id không hợp lệ", (done) => {
      const input = {
        last_id: id,
      };
      chai
        .request(API_URL)
        .post("/check_new_item")
        .send(input)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("code").eql("1004");
          res.body.should.be.a("object");
          res.body.should.have.property("message").eql("Parameter value is invalid");
          done();
        });
    });
  });
});
