import React from "react";
import { Container } from "react-bootstrap";
import Styles from '../Styles/ContactStyle.js';
import envelope from '../Images/Envelope.png'

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Styles>
        <Container id="contact">
          <h3>Contact Me</h3>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xbjyonzw"
            method="POST"
            className= 'form'
          >
            <label>Name: </label>
            <input type="text" name='name' className='message-input' />
            <label>Email: </label>
            <input type="email" name="email" className='message-input' />
            <label>Message: </label>
            <textarea className='message-input' name="message"></textarea>

            {status === "SUCCESS" ? <p>Thanks!</p> : <button>
              <img src={envelope} alt=''/>Send</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </Container>
      </Styles>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}