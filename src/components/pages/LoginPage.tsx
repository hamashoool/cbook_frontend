// @flow
import { Alert, Checkbox } from "@material-tailwind/react";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthMachine } from "../../hooks/useAuthMachine";

type Props = {};
export const AuthPage = (props: Props) => {
  const navigate = useNavigate();
  const { state, send } = useAuthMachine();

  React.useEffect(() => {
    if (state.matches("authenticated")) {
      navigate("/dashboard");
    }
    // send("LOGIN");
    // send("REGISTER");
  }, [state.value]);

  return (
    <>
      <section className="h-screen w-full flex justify-center items-center flex-wrap bg-img bg-cover">
        <div className="h-screen bg-white/30 absolute top-0 w-full"></div>
        <div className="relative flex justify-center items-center flex-wrap g-6 text-gray-800 md:bg-primary-500/30 md:w-11/12 xl:w-2/5 p-1 md:p-5 rounded-lg">
          <div className="w-full p-1 md:p-5">
            <p>
              State Value:
              <pre>{JSON.stringify(state.value)}</pre>
            </p>
            <p>
              State Context:
              <pre>{JSON.stringify(state.context)}</pre>
            </p>
            {state.matches("login") && (
              // login form
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send("SUBMIT");
                }}
              >
                {state.context.error.type === "loginError" && (
                  <Alert color="red" className="mb-5">
                    {state.context.error.message}
                  </Alert>
                )}

                {/* <!-- Email input --> */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                    placeholder="Email address"
                    onChange={(e) => {
                      send({
                        type: "emailInputChanged",
                        value: e.target.value,
                      });
                    }}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                    placeholder="Password"
                    onChange={(e) => {
                      send({
                        type: "password1InputChanged",
                        value: e.target.value,
                      });
                    }}
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check items-center flex">
                    <Checkbox color="purple" defaultChecked />
                    <label className="form-check-label inline-block text-white">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    className="duration-200 transition ease-in-out text-white"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <button
                  className="btn btn-primary w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() => {
                    send("REGISTER");
                  }}
                >
                  Sign Up
                </button>
              </form>
            )}
            {state.matches("register") && (
              // register form
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send("SUBMIT");
                }}
              >
                {state.context.error.type === "registrationError" && (
                  <Alert color="red" className="mb-5">
                    {state.context.error.message}
                  </Alert>
                )}

                <div className="flex flex-col md:flex-row md:gap-x-5 justify-evenly">
                  <div className="w-full">
                    {/* <!-- First Name input --> */}
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                        placeholder="First Name"
                        onChange={(e) => {
                          send({
                            type: "firstNameInputChanged",
                            value: e.target.value,
                          });
                        }}
                      />
                    </div>
                    {/* <!-- Last Name input --> */}
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                        placeholder="Last Name"
                        onChange={(e) => {
                          send({
                            type: "lastNameInputChanged",
                            value: e.target.value,
                          });
                        }}
                      />
                    </div>
                    {/* <!-- Email input --> */}
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                        placeholder="Email address"
                        onChange={(e) => {
                          send({
                            type: "emailInputChanged",
                            value: e.target.value,
                          });
                        }}
                      />
                    </div>
                    {/* <!-- Username input --> */}
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                        placeholder="Username"
                        onChange={(e) => {
                          send({
                            type: "usernameInputChanged",
                            value: e.target.value,
                          });
                        }}
                      />
                    </div>
                    {/* <!-- Phone input --> */}
                    <div className="mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                        placeholder="Phone Number"
                        onChange={(e) => {
                          send({
                            type: "phoneNumberInputChanged",
                            value: e.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    {/* <!-- Password1 input --> */}
                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                        placeholder="Password"
                        onChange={(e) => {
                          send({
                            type: "password1InputChanged",
                            value: e.target.value,
                          });
                        }}
                      />
                    </div>

                    {/* <!-- Password2 input --> */}
                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-600 focus:outline-none"
                        placeholder="Confirm Password"
                        onChange={(e) => {
                          send({
                            type: "password2InputChanged",
                            value: e.target.value,
                          });
                        }}
                      />
                    </div>

                    {/* // user type and terms and conditions */}
                    <div className="flex flex-col mb-6 gap-3 py-3">
                      <div className="flex gap-6 text-white pl-3">
                        <span>User Type: </span>
                        <div className="flex gap-3">
                          <span>Store</span>
                          <input
                            type="radio"
                            name="radio-1"
                            className="radio radio-secondary"
                            checked
                          />
                        </div>
                        <div className="flex gap-3">
                          <span>Customer</span>
                          <input
                            type="radio"
                            name="radio-1"
                            className="radio radio-secondary"
                          />
                        </div>
                      </div>
                      <div className="flex">
                        <div className="form-group form-check items-center flex">
                          <Checkbox color="purple" defaultChecked />
                          <label className="form-check-label inline-block text-white">
                            I AGREE TO THE <Link to="#">TERMS</Link> AND{" "}
                            <Link to="#">CONDITIONS</Link>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <button
                  className="btn btn-primary w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={() => {
                    send("LOGIN");
                  }}
                >
                  Sign In
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
