const Footer = () => (
  <footer className="bg-midnight">
    <div className="mx-auto w-full max-w-screen-2xl px-8 py-8 lg:py-12">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href={process.env.PUBLIC_URL + "/"} className="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/edusight-logo-white.svg"}
              className="h-7 mr-3"
              alt="Edusight Logo"
            />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Kontakt
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href="mailto:info@edusight.de" className="hover:underline ">
                  info@edusight.de
                </a>
              </li>
              {/* <li>
                <a className="hover:underline">+49 176 43810790</a>
              </li> */}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Links
            </h2>
            <ul className="text-gray-400 font-medium">
              <li className="mb-4">
                <a href={process.env.PUBLIC_URL + "/"} className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a
                  href={process.env.PUBLIC_URL + "/impressum"}
                  className="hover:underline"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a
                  href={process.env.PUBLIC_URL + "/datenschutz"}
                  className="hover:underline"
                >
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center text-gray-400">
          © 2023 <a className="hover:underline">Edusight</a>.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
