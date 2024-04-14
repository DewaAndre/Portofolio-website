"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const servisId = "service_bsgtcsl";
    const templateId = "template_q8d9ho9";
    const publicKey = "UjD6cEfAH36O8T8TC";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Andrean",
      message: message,
    };

    emailjs
      .send(servisId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email send successfuly", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <section>
      <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I'm currently exploring new opportunities and welcome messages in my
            inbox. Whether you have a query or simply want to say hello, I'll do
            my utmost to respond promptly!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="emailForm flex flex-col mt-10">
          <div className="mb-6">
            <label
              for="email"
              class="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              className="mb-5 bg-[rgb(22,23,29)] rounded-xl border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
              type="text"
              placeholder="Andrean"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              for="email"
              class="text-white block mb-2 text-sm font-medium"
            >
              your Email
            </label>
            <input
              className="mb-5 bg-[rgb(22,23,29)] rounded-xl border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
              type="email"
              placeholder="Andrean123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              for="email"
              class="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              className="mb-5 bg-[rgb(22,23,29)] rounded-xl border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5"
              placeholder="Your Message"
              id=""
              cols="5"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-1 py-1 w-full justify-self-end sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white ml-auto"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
