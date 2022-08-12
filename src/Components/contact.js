import { motion } from "framer-motion";
import Button from "./Helper/button";
import { contactData } from "./Helper/contact/contactdata";
import ContactHelper from "./Helper/contactHelper";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 pb-24">
      <div className="lg:container md:px-8 mx-auto px-5 flex flex-col space-y-12 lg:space-y-0 lg:justify-between  lg:flex-row">
        <div className="">
          <ContactHelper
            title={"Contact"}
            header="Let's discuss your project"
          />
          <div className="pt-12 flex flex-col space-y-4">
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
        </div>

        <div className="contact-form flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1 }}
            className="text-[22px] leading-[35px]  md:text-[25px] md:leading-[40px] text-[#6e6e6e] pb-12"
          >
            <p>I'm always open to discussing product </p>
            <br />
            <span className="text-blue">design work or partnerships.</span>
          </motion.h1>
          <form className="text-base leading-[26px] font-medium flex flex-col space-y-16 mb-4">
            <div className="name font-dmSans">
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
