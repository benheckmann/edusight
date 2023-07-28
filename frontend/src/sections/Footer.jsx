const Footer = () => (
  <footer class="bg-midnight">
    <div class="mx-auto w-full max-w-screen-2xl px-8 py-8 lg:py-12">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href={process.env.PUBLIC_URL} className="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/edusight-logo-white.svg"}
              className="h-7 mr-3"
              alt="Edusight Logo"
            />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">
              Kontakt
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a href="mailto:hallo@edusight.de" class="hover:underline ">
                  hallo@edusight.de
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  +49 176 43810790
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">
              Links
            </h2>
            <ul class="text-gray-400 font-medium">
              <li class="mb-4">
                <a href={process.env.PUBLIC_URL} class="hover:underline">
                  Home
                </a>
              </li>
              <li class="mb-4">
                <a href={process.env.PUBLIC_URL} class="hover:underline">
                  Impressum
                </a>
              </li>
              <li>
                <a href={process.env.PUBLIC_URL} class="hover:underline">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm sm:text-center text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Edusight
          </a>
          .
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
