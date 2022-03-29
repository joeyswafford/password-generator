// Random Password Generator
// Using useState to store random password and update when user clicks on button.
// After user clicks on button the generatePassword function will fire.
// Re-render the password div to contain the updated password.
// Automatically copy the new password to user's clipboard and display message (using react.toastify for this).

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState("**********************");

  const generatePassword = () => {
    // Function fires after user clicks on the generate password button.
    debugger;
    const stepOne = Math.random();
    const stepTwo = stepOne.toString(36).slice(2);
    const stepThree = Math.random();
    const stepFour = stepThree.toString(36).slice(2);
    const stepFive = stepTwo + stepFour;

    const randomPassword = stepFive;
    // Math.random()
    // Provides random number between 0-1
    // .toString(36) + Math.random().toString(36);
    // toString converts object to string.

    setPassword(randomPassword); // Puts the password that was generated as the state.

    if (navigator.clipboard.writeText(randomPassword)) {
      // Copies the generated password to the clipboard. Quality of life.
      toast("Password copied to your clipboard.");
    }
  };

  return (
    <div className="background">
      <h1 className="header">Click to generate a random password</h1>
      <div className="card">
        <div className="password">{password}</div>
        <button className="button" onClick={generatePassword}>
          Generate Password
        </button>
      </div>
      <ToastContainer /> {/* Adds the container to show the copy message. */}
      <div className="icons">
        <div className="iconGithub">
          <a href="https://github.com/joeyswafford?tab=overview&from=2022-03-01&to=2022-03-28">
            <FontAwesomeIcon icon={brands("github")} size="3x" />
          </a>
        </div>
        <div className="iconLinked">
          <a href="https://www.linkedin.com/in/joey-swafford-b267201a6/">
            <FontAwesomeIcon icon={brands("linkedin")} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
