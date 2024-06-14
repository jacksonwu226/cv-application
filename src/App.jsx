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
    name: "John Doe",
    email: "johndoe2024@placeholder.net",
    phoneNumber: "123-456-7891",
  });
  const initialEducationItem = new EducationItem(
    "University of California, Irvine",
    "Computer Engineering",
    "2020",
    "2024",
    "Irvine, CA",
  );
  const initialEducationItem2 = new EducationItem(
    "University of California, Berkeley",
    "Computer Science",
    "2016",
    "2020",
    "Berkeley, CA",
  );
  const initialExperienceItemArray = []
  for(let i = 0; i < 5; i++){
    const expItem = new ExperienceItem(
      "Texas Instruments",
      "Software Engineer",
      "2020",
      "2024",
      "Irvine, CA",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi molestias dolores autem est pariatur, iusto qui nulla eligendi atque! Eos omnis porro quis quo voluptatum repudiandae repellendus beatae? Ut, iste!"    
);
    initialExperienceItemArray.push(expItem);
  }
  const [educationList, setEducationList] = useState([initialEducationItem, initialEducationItem2]);
  const [experienceList, setExperienceList] = useState(initialExperienceItemArray);

  return (
    <div className="app-content">
      <div className="data-input-panel">
        <PersonalDetails
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <Education
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <Experience
          experienceList={experienceList}
          setExperienceList={setExperienceList}
        />
      </div>
      <ResumePreview personalDetails={personalDetails} educationList={educationList} experienceList={experienceList}/>
    </div>
  );
}

export default App;
