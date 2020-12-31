import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Blog = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h1 className="section-header" style={{ marginBottom: "50px" }}>
        My Blog
      </h1>

      <Card className="text-center">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Interested in learning more about me and my tech journey? Check out
            my blog below!
          </Card.Text>
          <Button variant="primary">To Infinity and Beyond!</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>
    </div>
  );
};

export default Blog;
