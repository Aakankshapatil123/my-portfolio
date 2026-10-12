// function About() {
//   return (
//     <section id="about" className="py-20 px-6 bg-slate-900">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6">
//           About Me
//         </h2>

//         <p className="text-gray-300 leading-8">
//           I am a Computer Engineering graduate and aspiring Full Stack
//           Developer. I have knowledge of JavaScript, React.js, Node.js,
//           Express.js, MongoDB, SQL, HTML, and CSS. I enjoy building responsive
//           and user-friendly web applications and continuously improving my
//           development skills.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;




function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Get to know me
        </p>

        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          About <span className="text-blue-400">Me</span>
        </h2>

        <p className="mx-auto max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
          I am a Computer Engineering graduate with a strong interest in
          Full Stack Development. I have hands-on experience building web
          applications using JavaScript, React.js, Node.js, Express.js,
          MongoDB, SQL, HTML, and CSS. I enjoy creating responsive,
          user-friendly interfaces, developing practical solutions, and
          continuously improving my technical skills. I am looking for an
          opportunity to contribute to a development team, learn from
          experienced professionals, and grow as a Full Stack Developer.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div className="rounded-xl border border-slate-700 bg-slate-950/60 px-6 py-5 transition duration-300 hover:border-blue-400">
            <h3 className="mb-2 text-2xl font-bold text-blue-400">
              2025
            </h3>
            <p className="text-sm text-gray-400">
              Graduation Year
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/60 px-6 py-5 transition duration-300 hover:border-blue-400">
            <h3 className="mb-2 text-2xl font-bold text-blue-400">
              MERN
            </h3>
            <p className="text-sm text-gray-400">
              Full Stack Development
            </p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/60 px-6 py-5 transition duration-300 hover:border-blue-400">
            <h3 className="mb-2 text-2xl font-bold text-blue-400">
              9.03
            </h3>
            <p className="text-sm text-gray-400">
              Final Year SGPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;