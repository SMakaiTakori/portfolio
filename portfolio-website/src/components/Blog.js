import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Blog = () => {
  return (
    <div>
      <br />
      <h1 className="section-header" style={{ marginBottom: "50px" }}>
        My Blog
      </h1>
      <Card className="text-center">
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Interested in learning more about me and my tech journey? Check out
            my blog below!
          </Card.Text>
          <a href="https://smakaitakori.github.io/" target="_blank">
            <Button variant="primary">To Infinity and Beyond!</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
