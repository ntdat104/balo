const chai = require("chai");
const chaiHttp = require("chai-http");

//TODO Assertion Style
const should = chai.should();

chai.use(chaiHttp);

//TODO AIP_URL
const AIP_URL = "http://localhost:3000";

describe("Posts API", () => {
	/**
	 * Test the GET route
	 */
	describe("/GET api/posts", () => {
		it("It should GET all the posts", (done) => {
			chai.request(AIP_URL)
				.get("/api/posts")
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a("array");
					res.body.length.should.be.eq(4);
					done();
				});
		});

		it("It should not GET all the posts", (done) => {
			chai.request(AIP_URL)
				.get("/api/post")
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});
	});
});
