import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Blog = () => {
  return (
    <div className="blog-section">
      <h1 className="skills-header"> Blog</h1>
      <br />
      <Card className="text-center ">
        <Card.Body className=" blog-card">
          <Card.Title></Card.Title>
          <Card.Text>
            Interested in learning more about me and my tech journey? Check out
            my blog below!
          </Card.Text>
          <a
            href="https://smakaitakori.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="primary">To Infinity and Beyond!</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
