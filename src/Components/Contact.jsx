import React, { Component } from "react";
import emailjs from "emailjs-com";

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitted: false,
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "portfolio_contact",
        event.target,
        "user_HscMrgACyIEyGVRoGO0lS"
      )
      .then((res) => console.log(res.text, "email sent!"))
      .catch((err) => console.log(err.text));
    this.setState({ name: "", email: "", message: "", submitted: true });
  };

  render() {
    return (
      <main>
        <h2 className="contact__title">Get in touch</h2>
        {this.state.submitted === true && (
          <p className="contact__confirmation">
            Thanks for getting in touch. I will get back to you shortly.
          </p>
        )}
        <div className="contact__container">
          <form className="contact__form" onSubmit={this.handleSubmit}>
            <label htmlFor="name" className="contact__form__label">
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact__form__input"
              onChange={this.handleChange}
              value={this.state.name}
              required
            ></input>
            <label htmlFor="email" className="contact__form__label">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="contact__form__input"
              onChange={this.handleChange}
              value={this.state.email}
              required
            ></input>
            <label htmlFor="message" className="contact__form__label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="contact__form__input__textarea"
              onChange={this.handleChange}
              value={this.state.message}
              required
            />
            <button className="contact__form__button">Send</button>
          </form>
        </div>
      </main>
    );
  }
}
