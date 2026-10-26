function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950 px-6 py-20 md:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-extrabold text-white md:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-300" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            I am open to entry-level Full Stack Developer opportunities.
            Have a project or opportunity in mind? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {/* Contact Information */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 sm:p-9">
            <h3 className="mb-3 text-2xl font-bold text-white">
              Let's Talk
            </h3>

            <p className="mb-8 leading-7 text-slate-400">
              I would love to connect, discuss opportunities, and collaborate
              on interesting web development projects.
            </p>

            {/* Email */}
            <a
              href="mailto:aakankshapatil6580@gmail.com"
              className="group mb-4 flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-blue-400/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-300">
                ✉
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-sm text-slate-400">Email Me</p>
                <p className="break-all font-medium text-white transition group-hover:text-blue-300">
                  aakankshapatil6580@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Aakankshapatil123"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-blue-400/50"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-300">
                {"</>"}
              </div>

              <div>
                <p className="mb-1 text-sm text-slate-400">GitHub</p>
                <p className="font-medium text-white transition group-hover:text-blue-300">
                  View My Projects ↗
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 sm:p-9">
            <h3 className="mb-2 text-2xl font-bold text-white">
              Send a Message
            </h3>

            <p className="mb-7 text-sm leading-6 text-slate-400">
              Fill out the form below to get in touch.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you for your message! Please contact me directly by email."
                );
              }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:from-blue-400 hover:to-cyan-500"
              >
                Send Message <span className="ml-2">↗</span>
              </button>

              <p className="text-xs leading-5 text-slate-500">
                This form currently displays a confirmation message only.
                It does not send an email yet.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
