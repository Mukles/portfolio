import Button from "./Helper/button";
import { contactData } from "./Helper/contact/contactdata";
import Title from "./Helper/title";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-24">
      <div className="container mx-auto px-5 flex flex-col space-y-12 lg:space-y-0 lg:justify-between  lg:flex-row">
        <div className="">
          <Title title={"Contact"} header="Let's discuss your project" />
          {contactData.map((contact) => (
            <div
              key={contact.id}
              className="contact-details flex space-y-5 space-x-7"
            >
              <img src={contact.img} alt="" />
              <p className="text-[#6e6e6e] text-base leading[30px]">
                {contact.text}
              </p>
            </div>
          ))}
        </div>

        <div className="contact-form flex-1">
          <h1 className="text-[25px] leading-[40px] text-[#6e6e6e] pb-12">
            <span>I'm always open to discussing product </span>
            <br />
            <span className="text-blue">design work or partnerships.</span>
          </h1>
          <form className="text-base leading-[26px] font-medium flex flex-col space-y-16 mb-4">
            <div className="name">
              <input
                className="input"
                type={"text"}
                name="name"
                placeholder="Name *"
              />
              <span className="err-message"></span>
            </div>
            <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-16 space-y-16">
              <div className="w-full">
                <input className="input" type={"email"} placeholder="Email *" />
                <span className="err-message"></span>
              </div>
              <div className="w-full">
                <input
                  className="input"
                  type={"text"}
                  name=""
                  placeholder="Subject "
                />
                <span className="err-message"></span>
              </div>
            </div>
            <div className="">
              <input
                className="input"
                type={"text"}
                name="message"
                placeholder="Message *"
              />
              <span className="err-message"></span>
            </div>
          </form>
          <Button text={"submit"} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
