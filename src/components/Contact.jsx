
function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Contact <span className="text-blue-400">Me</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            I am open to entry-level Full Stack Developer opportunities.
            Feel free to contact me.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-white">
              Let's Connect
            </h3>

            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:aakankshapatil6580@gmail.com"
                className="text-blue-400 hover:underline"
              >
                 aakankshapatil6580@gmail.com
              </a>
            </p>

            <p className="text-gray-300">
              GitHub:{" "}
              <a
                href="https://github.com/Aakankshapatil123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View GitHub Profile
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Please contact me directly by email.");
            }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-400"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-blue-400"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
