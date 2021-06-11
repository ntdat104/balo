const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API edit_post", () => {
  describe("Method=POST /edit_post", () => {
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
    it("Sửa bài đăng thành công", (done) => {
      const post = {
        token,
        id,
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
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
    it("Token không hợp lệ", (done) => {
      const post = {
        token: "sbsjbssjjs",
        id,
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ", (done) => {
      const post = {
        token: ["apple", "banana", "lemon"],
        id,
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ", (done) => {
      const post = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        id,
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ", (done) => {
      const post = {
        id,
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ", (done) => {
      const post = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.KTMtjpE5RsmxwEaDF_cDAelomv1QPTRu_t5sdGYZ2Bw",
        id,
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("id không hợp lệ", (done) => {
      const post = {
        token,
        id: ["apple", "mango", "banana"],
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
    it("id không hợp lệ", (done) => {
      const post = {
        token,
        id: "",
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
    it("id không hợp lệ", (done) => {
      const post = {
        token,
        id: "abcskj123js",
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
    it("id không hợp lệ", (done) => {
      const post = {
        token,
        described: "Mô tả mới",
      };
      chai
        .request(API_URL)
        .post("/edit_post")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("OK");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
  });
});
