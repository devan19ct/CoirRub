import React, { useRef } from "react";
import emailjs from "emailjs-com";
import ContactBg from "../assets/Garden.jpg";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxxx",      // your EmailJS Service ID
        "template_xxxxxx",     // your EmailJS Template ID
        form.current,
        "public_xxxxxx"        // your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 px-6 md:px-12 bg-gray-100 overflow-hidden"
    >

      <img
        src={ContactBg}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gray-100 backdrop-blur-[1px]" />


      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 z-10">

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Get In <span className="text-amber-700">Touch</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have questions about our handcrafted coir products, or want to discuss a custom order?
            We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <span className="font-medium">Marari Coir Rubs</span><br />
              Mararikulam, Kerala, India
            </p>
            <p>📞 +91 9551072222</p>
            <p>✉️ Info@mararicoirrub.com</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100 rounded-lg shadow-lg p-8 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:border-amber-700"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:border-amber-700"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border border-gray-300 rounded-md px-4 py-3 w-full mb-4 focus:outline-none focus:border-amber-700"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 rounded-md px-4 py-3 w-full mb-6 focus:outline-none focus:border-amber-700"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-amber-700 text-white px-6 py-3 rounded-md uppercase text-sm font-medium hover:bg-amber-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
