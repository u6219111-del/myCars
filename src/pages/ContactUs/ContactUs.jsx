import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

function ContactUs() {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_hucnwce",     
        "template_eihhfm5",      
        form.current,
        "_bZTv6mun39hIdXqL"    
      )
      .then(
        (result) => {
          console.log("EmailJS Result:", result.text);
          alert(t("message_sent") || "Сообщение отправлено!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert(t("message_error") || "Ошибка при отправке!");
        }
      );
  };

  return (
    <div className="contact-us">
      <div className="container">
        <div className="headerr">
          <h1>{t("contact_us")}</h1>
          <p>{t("contact_subtitle")}</p>
        </div>

        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>{t("get_in_touch")}</h3>
              <p>{t("contact_description")}</p>
              <dl className="info-list">
                <div>
                  <dt>{t("address")}</dt>
                  <dd>
                    123 Main Street, Downtown
                    <br />
                    Cary, NC 27511
                  </dd>
                </div>
                <div>
                  <dt>{t("phone")}</dt>
                  <dd>+996 (705) 414-210</dd>
                </div>
                <div>
                  <dt>{t("email")}</dt>
                  <dd>u263823@gmail.com</dd>
                </div>
              </dl>
            </div>

            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <label>
                  {t("name")}
                  <input type="text" name="name" required />
                </label>

                <label>
                  {t("email")}
                  <input type="email" name="user_email" required />
                </label>

                <label>
                  {t("subject")}
                  <input type="text" name="subject" required />
                </label>

                <label>
                  {t("message")}
                  <textarea name="message" rows="4" required />
                </label>

                <button type="submit">{t("send_message")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
