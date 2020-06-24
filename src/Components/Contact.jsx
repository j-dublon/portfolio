import React from "react";

export default function Contact() {
  return (
    <main>
      <h2 className="contact__title">Get in touch</h2>
      <div className="contact__container">
        <form className="contact__form">
          <label htmlFor="name" className="contact__form__label">
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="contact__form__input"
            required
          ></input>
          <label htmlFor="email" className="contact__form__label">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="text"
            className="contact__form__input"
            required
          ></input>
          <label htmlFor="message" className="contact__form__label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="contact__form__input__textarea"
            required
          />
          <button className="contact__form__button">Send</button>
        </form>
      </div>
    </main>
  );
}
