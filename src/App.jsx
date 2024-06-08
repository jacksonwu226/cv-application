import { useState } from "react";
import "./App.css";
import PersonalDetails from "./PersonalDetails";
import ResumePreview from "./ResumePreview";
import Education from "./Education";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import Experience from "./Experience";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const initialEducationItem = new EducationItem("UCI", "ENGR", "2020", "2024", "Irvine, CA");
  const initialExperienceItem = new ExperienceItem("Texas Instruments", "Software Engineer", "2020", "2024", "Irvine, CA", "Worked on so and so projects");
  const [educationList, setEducationList] = useState([initialEducationItem]);
  const [experienceList, setExperienceList] = useState([initialExperienceItem]);

  return (
    <>
      <PersonalDetails
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Education educationList={educationList} setEducationList={setEducationList} />
      <Experience experienceList={experienceList} setExperienceList={setExperienceList} />
      <ResumePreview personalDetails={personalDetails} />
    </>
  );
}

export default App;
