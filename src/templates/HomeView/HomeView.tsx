import React from "react";
import { motion } from "framer-motion";
import withLayout from "../../hocs/withLayout";
import style from "./HomeView.module.scss";
import { Alert, Col, Container, Row } from "react-bootstrap";

const HomeView = () => (
  <main className={style.main}>
    <p className="description">
      Get started by editing
      <code>pages/index.js</code>
    </p>
    <Alert show={true} variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again.
      </p>
    </Alert>
    <Container>
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    <div className="grid">
      <a href="https://nextjs.org/docs" className="card">
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
      </a>

      <a href="https://nextjs.org/learn" className="card">
        <h3>Learn &rarr;</h3>
        <p>Learn about Next.js in an interactive course with quizzes!</p>
      </a>
      <a
        href="https://github.com/zeit/next.js/tree/master/examples"
        className="card"
      >
        <h3>Examples &rarr;</h3>
        <p>Discover and deploy boilerplate example Next.js projects.</p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="card"
      >
        <h3>Deploy &rarr;</h3>
        <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
      </a>
      <motion.div
        animate={{
          x: 0,
          y: 100,
          scale: 1,
          rotate: 0,
        }}
      >
        <p>kkkkkkkkkkkkkk</p>
      </motion.div>
    </div>
  </main>
);

export default withLayout(HomeView);
