import BorderLessButton from "./BorderLessButton";
import SquareButton from "./SquareButton";

const NavigationBar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="mx-auto max-w-screen-2xl flex flex-wrap items-center justify-between px-8 py-2 lg:py-3">
        <a href={process.env.PUBLIC_URL + "/"} className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/edusight-logo.svg"}
            className="h-9 mr-3"
            alt="Edusight Logo"
          />
        </a>
        <div className="hidden md:block">
          <BorderLessButton text="Features" />
          <BorderLessButton text="Über Uns" />
          <BorderLessButton text="Preise" />
        </div>
        <div className="flex md:order-2">
          <div>
            <SquareButton text="Anmelden" isDark={false} margin="my-1" />
          </div>
          <div className="hidden md:block">
            <SquareButton text="Kontakt" isDark={true} margin="ml-3 my-1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
