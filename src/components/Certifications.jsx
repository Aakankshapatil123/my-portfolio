
// function Certifications() {
//   const certificates = [
//     {
//       title: "Full Stack Development with AI Tools",
//       issuer: "GUVI Geek Network",
//       file: "/fullstack-certificate.pdf",
//     },
//     {
//       title: "JavaScript",
//       issuer: "GUVI Geek Network",
//       file: "/javascript-certificate.pdf",
//     },
//     {
//       title: "React.js",
//       issuer: "GUVI Geek Network",
//       file: "/react-certificate.pdf",
//     },
//     {
//       title: "Node.js / Backend Development",
//       issuer: "GUVI Geek Network",
//       file: "/nodejs-certificate.pdf",
//     },
//     {
//       title: "Database / SQL",
//       issuer: "GUVI Geek Network",
//       file: "/databse-certificate.pdf",
//     },
//   ];

//   return (
//     <section
//       id="certifications"
//       className="bg-slate-900 px-6 py-20"
//     >
//       <div className="mx-auto max-w-6xl">
//         <div className="mb-14 text-center">
//           <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
//             My Achievements
//           </p>

//           <h2 className="text-3xl font-bold md:text-4xl">
//             My <span className="text-blue-400">Certifications</span>
//           </h2>

//           <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
//             Certificates representing my learning and development
//             in full-stack web development and programming.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {certificates.map((certificate) => (
//             <article
//               key={certificate.title}
//               className="flex flex-col rounded-2xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400"
//             >
//               <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="26"
//                   height="26"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   aria-hidden="true"
//                 >
//                   <circle cx="12" cy="8" r="6" />
//                   <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
//                 </svg>
//               </div>

//               <h3 className="mb-3 text-xl font-semibold text-white">
//                 {certificate.title}
//               </h3>

//               <p className="mb-6 text-sm text-gray-400">
//                 {certificate.issuer}
//               </p>

//               <div className="mt-auto flex flex-wrap gap-3">
//                 <a
//                   href={certificate.file}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
//                 >
//                   View Certificate ↗
//                 </a>

//                 <a
//                   href={certificate.file}
//                   download
//                   className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-gray-200 transition hover:border-blue-400 hover:text-blue-300"
//                 >
//                   Download ↓
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Certifications;




function Certifications() {
  const certificates = [
    {
      title: "Full Stack Development with AI Tools",
      issuer: "GUVI Geek Network",
      file: "/fullstack-certificate.pdf",
    },
    {
      title: "JavaScript",
      issuer: "GUVI Geek Network",
      file: "/javascript-certificate.pdf",
    },
    {
      title: "React.js",
      issuer: "GUVI Geek Network",
      file: "/react-certificate.pdf",
    },
    {
      title: "Node.js / Backend Development",
      issuer: "GUVI Geek Network",
      file: "/nodejs-certificate.pdf",
    },
    {
      title: "Database / SQL",
      issuer: "GUVI Geek Network",
      file: "/databse-certificate.pdf",
    },
  ];

  const buttonClass =
    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition";

  return (
    <section
      id="certifications"
      className="bg-slate-900 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            My Achievements
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            My <span className="text-blue-400">Certifications</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Certificates representing my learning and development
            in full-stack web development and programming.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="flex flex-col rounded-2xl border border-slate-700 bg-slate-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="mb-6 text-sm text-gray-400">
                {certificate.issuer}
              </p>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={certificate.file}
                  className={`${buttonClass} bg-blue-500 text-white hover:bg-blue-600`}
                >
                  View Certificate ↗
                </a>

                <a
                  href={certificate.file}
                  download
                  className={`${buttonClass} border border-slate-700 text-gray-200 hover:border-blue-400 hover:text-blue-300`}
                >
                  Download ↓
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;

