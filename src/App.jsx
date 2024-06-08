import { useState } from "react";
import "./App.css";
import PersonalDetails from "./PersonalDetails";
import ResumePreview from "./ResumePreview";
import Education from "./Education";
import EducationItem from "./EducationItem";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const educationItem = new EducationItem("UCI", "ENGR", "2020", "2024", "Irvine, CA");
  const [educationList, setEducationList] = useState([educationItem]);

  return (
    <>
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Education educationList={educationList} setEducationList={setEducationList} />
      <ResumePreview personalDetails={personalDetails} />
    </>
  );
}

export default App;
