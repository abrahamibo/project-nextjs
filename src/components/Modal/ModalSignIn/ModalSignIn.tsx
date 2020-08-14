import React, { useState, useEffect } from 'react';
// import { login } from '../../../service/auth.service';
import Router from 'next/router';
import { Modal, Form, Button, Image, Alert } from 'react-bootstrap';
import styles from './ModalSignIn.module.css';
import signin from "../../../network/api/User/postSignin";

const ModalSignIn = (props) => {
  const [user, setUser] = useState({ email: '' });
  const [
    errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    signin(user)
    //
    // const res = await login(user);
    // let { status, textStatus, data } = res;
    //
    // if (status === 200) {
    //   Router.push('/dashboard');
    //
    //   props.onHide();
    // } else {
    //   // puts message errors
    //   setErrors({ message: res });
    // }
  }

  async function handleField(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className={styles.modalBody}>
        <Image src="./logo_free_pro.svg" height={40} />
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Group>
            <Form.Control
              className={styles.formControl}
              type="text"
              name="email"
              placeholder="Votre adresse e-mail"
              value={user.email}
              onChange={handleField}
            />
            {/*errors.email && <p>{errors.email}</p>*/}
          </Form.Group>

          <Form.Group>
            <Form.Control
              className={styles.formControl}
              type="password"
              name="password"
              placeholder="Mot de passe"
              onChange={handleField}
            />
            {/*errors.password && <p>{errors.password}</p>*/}
          </Form.Group>
          <Button variant="dark" type="submit" className="btn " onClick={handleSubmit} block>
            Login
          </Button>
        </Form>

        <p></p>
        {errors.message && <Alert variant="danger">{errors.message}</Alert>}
      </Modal.Body>
    </Modal>
  );
};
export default ModalSignIn;