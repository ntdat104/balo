const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

const { API_URL } = require("../apiURL");

describe("API get_list_posts", () => {
  describe("Method=POST /get_list_posts", () => {
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
        described: "Đây là bài viết thứ ba",
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
    it("Lấy danh sách bài viết thành công", (done) => {
      const post = {
        token,
        lastid: id,
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
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
    it("Token không hợp lệ!", (done) => {
      const post = {
        token: "sbsjbssjjs",
        lastid: id,
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ!", (done) => {
      const post = {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.KTMtjpE5RsmxwEaDF_cDAelomv1QPTRu_t5sdGYZ2Bw",
        lastid: id,
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ!", (done) => {
      const post = {
        token: ["apple", "banana", "lemon"],
        lastid: id,
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ!", (done) => {
      const post = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        lastid: id,
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("Token không hợp lệ!", (done) => {
      const post = {
        lastid: id,
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("Token is invalid");
          done();
        });
    });
    it("id không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: ["apple", "banana", "lemon"],
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
    it("id không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: "",
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
    it("id không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: () => {
          let string = "";
          for (let i = 0; i < 100000; i++) {
            string += i;
          }
          return string;
        },
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
    it("id không hợp lệ!", (done) => {
      const post = {
        token,
        index: "2",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("id is invalid");
          done();
        });
    });
    it("index không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: id,
        index: "-1",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("index is invalid");
          done();
        });
    });
    it("index không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: id,
        index: "",
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("index is invalid");
          done();
        });
    });
    it("index không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: id,
        count: "10",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("index is invalid");
          done();
        });
    });
    it("count không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: id,
        index: "2",
        count: "-1",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("count is invalid");
          done();
        });
    });
    it("count không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: id,
        index: "2",
        count: "",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("count is invalid");
          done();
        });
    });
    it("count không hợp lệ!", (done) => {
      const post = {
        token,
        lastid: id,
        index: "2",
      };
      chai
        .request(API_URL)
        .post("/get_list_posts")
        .send(post)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("code").eql("9998");
          res.body.should.have.property("message").eql("count is invalid");
          done();
        });
    });
  });
});
