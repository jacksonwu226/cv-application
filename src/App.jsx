import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonalDetails from "./PersonalDetails";
import ResumePreview from "./ResumePreview";
function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <>
      <PersonalDetails personalDetails={personalDetails} setPersonalDetails={setPersonalDetails} />
      <ResumePreview personalDetails={personalDetails}/>
    </>
  );
}

export default App;
