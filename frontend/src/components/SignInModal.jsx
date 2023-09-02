import React, { useRef } from "react";

const InputField = React.forwardRef(
  ({ label, type, name, placeholder, required }, ref) => (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />
    </div>
  ),
);

const CheckboxField = React.forwardRef(({ label, id, required }, ref) => (
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        ref={ref}
        id={id}
        aria-describedby={id}
        type="checkbox"
        required={required}
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={id} className="font-light text-gray-500">
        {label}
      </label>
    </div>
  </div>
));

const SignInModal = ({ setShow, handleLogin, handleRegister }) => {
  const [isLogin, setIsLogin] = React.useState(true); // whether to display the login or register fields
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const termsRef = useRef(null);

  const handleSubmit = (e) => {
    const form = e.target.closest("form"); // Get the form element
    if (form.checkValidity()) {
      // Run HTML5 validation
      // Continue with custom logic
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if (isLogin) {
        handleLogin(email, password);
      } else {
        const confirmPassword = confirmPasswordRef.current.value;
        const termsAccepted = termsRef.current.checked;

        if (password === confirmPassword && termsAccepted) {
          handleRegister(email, password);
        } else if (password !== confirmPassword) {
          alert("Passwörter stimmen nicht überein");
        } else {
          alert("Bitte akzeptiere die Nutzungsbedingungen");
        }
      }

      setShow(false); // Close the modal
    } else {
      form.reportValidity(); // This will display HTML5 error messages
    }
    e.preventDefault(); // Prevent default form submission
  };

  return (
    <section className="pt-20 bg-black bg-opacity-80 fixed top-0 w-full h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                {isLogin ? "Login" : "Registrieren"}
              </h1>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={() => setShow(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <InputField
                label="Deine E-Mail"
                type="email"
                name="email"
                placeholder="name@company.com"
                required
                ref={emailRef}
              />
              <InputField
                label="Passwort"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                ref={passwordRef}
              />
              {!isLogin && (
                <InputField
                  label="Passwort bestätigen"
                  type="password"
                  name="confirm-password"
                  placeholder="••••••••"
                  required
                  ref={confirmPasswordRef}
                />
              )}
              {!isLogin && (
                <CheckboxField
                  label={
                    <span>
                      Ich stimme den{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline"
                        href="impressum"
                      >
                        Nutzungsbedingungen
                      </a>{" "}
                      zu
                    </span>
                  }
                  id="terms"
                  required
                  ref={termsRef}
                />
              )}
              <button
                type="submit"
                className="w-full bg-yellow focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleSubmit}
              >
                {isLogin ? "Einloggen" : "Account Erstellen"}
              </button>
              <p className="text-sm font-light text-gray-500">
                {isLogin
                  ? "Sie haben noch keinen Account?"
                  : "Sie haben schon einen Account?"}{" "}
                <a
                  onClick={() => setIsLogin(!isLogin)}
                  className="font-medium text-primary-600 hover:underline"
                >
                  {isLogin ? "Hier Registrieren" : "Hier Einloggen"}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInModal;
