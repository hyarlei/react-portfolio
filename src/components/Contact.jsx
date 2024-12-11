import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message || !/\S+@\S+\.\S+/.test(email)) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-scree bg-gradient-to-b to-gray-800 from-black text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/e36b057a-59af-4ec0-a66f-52bcd13b14e9"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:ring focus:ring-blue-500"
              required
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;