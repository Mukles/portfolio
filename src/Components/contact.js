import { contactData } from "./Helper/contact/contactdata";
import Title from "./Helper/title";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container mx-auto px-5">
        <Title title={"Contact"} header="Let's discuss your project" />
        {contactData.map((contact) => (
          <div className="contact-details flex space-y-5 space-x-7">
            <img src={contact.img} alt="" />
            <p className="text-[#f9f9f9] text-base leading[30px]">
              {contact.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
