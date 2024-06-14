import { useState } from "react";
import "./education.css";
import caretIcon from "./assets/menu-down.svg";
import EducationItem from "./EducationItem";

export default function Education({ educationList, setEducationList }) {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [showEducationList, setShowEducationList] = useState(true);
  const [educationItemDisplay, setEducationItemDisplay] = useState(null);

  const updateEducationItemDisplay = (item) => {
    setEducationItemDisplay(item);
    setShowEducationList(false);
  };
  const addNewEducationItemDisplay = () => {
    setShowEducationList(false);
  };
  const updateEducationList = (newEducationItem) => {
    const index = educationList.findIndex(
      (item) => item === educationItemDisplay,
    );
    if (index !== -1) {
      const updatedList = [...educationList];
      updatedList[index] = newEducationItem;
      setEducationList(updatedList);
    } else {
      appendEducationList(newEducationItem);
    }
    setEducationItemDisplay(null);
    setShowEducationList(true);
  };
  const appendEducationList = (newEducationItem) => {
    const updatedList = educationList.concat(newEducationItem);
    setEducationList(updatedList);
  };
  const cancelUpdateEducation = () => {
    setEducationItemDisplay(null);
    setShowEducationList(true);
  };
  const removeEducationItem = (educationItem) => {
    const updatedList = educationList.filter((item) => item !== educationItem);
    setEducationList(updatedList);
  };

  return (
    <div className="education-section-container">
      <button
        className="education-section-trigger"
        onClick={() => {
          setSectionOpen(!sectionOpen);
        }}
      >
        <h2>Education</h2>
        <img
          src={caretIcon}
          className={`caret ${sectionOpen ? "active" : ""}`}
        />
      </button>
      {showEducationList ? (
        <EducationList
          educationList={educationList}
          updateEducationItemDisplay={updateEducationItemDisplay}
          appendEducationList={appendEducationList}
          addNewEducationItemDisplay={addNewEducationItemDisplay}
          removeEducationItem={removeEducationItem}
          sectionOpen={sectionOpen}
        />
      ) : (
        <EducationForm
          educationItemDisplay={educationItemDisplay}
          updateEducationList={updateEducationList}
          cancelUpdateEducation={cancelUpdateEducation}
          removeEducationItem={removeEducationItem}
          sectionOpen={sectionOpen}
        />
      )}
    </div>
  );
}

function EducationForm({
  educationItemDisplay,
  updateEducationList,
  cancelUpdateEducation,
  sectionOpen,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const school = formData.get("school");
    const degree = formData.get("degree");
    const startDate = formData.get("start-date");
    const endDate = formData.get("end-date");
    const location = formData.get("location");
    const newEducationItem = new EducationItem(
      school,
      degree,
      startDate,
      endDate,
      location,
    );
    updateEducationList(newEducationItem);
  }
  function handleCancel(event) {
    event.preventDefault();
    cancelUpdateEducation();
  }
  return (
    <div className={`education-info-container ${sectionOpen ? "active" : ""}`}>
      <form onSubmit={handleSubmit} className="education-info-form">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          defaultValue={
            educationItemDisplay === null ? "" : educationItemDisplay.school
          }
        />

        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          defaultValue={
            educationItemDisplay === null ? "" : educationItemDisplay.degree
          }
        />

        <label htmlFor="start-date">Start Date</label>
        <input
          type="text"
          name="start-date"
          id="start-date"
          defaultValue={
            educationItemDisplay === null ? "" : educationItemDisplay.startDate
          }
        />

        <label htmlFor="end-date">End Date</label>
        <input
          type="text"
          name="end-date"
          id="end-date"
          defaultValue={
            educationItemDisplay === null ? "" : educationItemDisplay.endDate
          }
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          defaultValue={
            educationItemDisplay === null ? "" : educationItemDisplay.location
          }
        />
        <div className="button-container">
          <button className="primary-button" type="submit">Save</button>
          <button className="secondary-button" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function EducationListItem({
  educationItemDisplay,
  updateEducationItemDisplay,
  removeEducationItem,
}) {
  const handleInfoClick = () => {
    updateEducationItemDisplay(educationItemDisplay); // Wrap it in a function
  };
  const handleRemoveClick = (event) => {
    event.stopPropagation();
    removeEducationItem(educationItemDisplay);
  };
  return (
    <div className="education-list-item">
      <button onClick={handleInfoClick} className="main-btn">
        <span>{educationItemDisplay.school}</span>
        <span onClick={handleRemoveClick} className="remove-btn">
          X
        </span>
      </button>
    </div>
  );
}

function EducationList({
  educationList,
  updateEducationItemDisplay,
  addNewEducationItemDisplay,
  removeEducationItem,
  sectionOpen,
}) {
  return (
    <div className={`education-list-container  ${sectionOpen ? "active" : ""}`}>
      {educationList.map((item) => {
        return (
          <EducationListItem
            key={item.id}
            educationItemDisplay={item}
            updateEducationItemDisplay={updateEducationItemDisplay}
            removeEducationItem={removeEducationItem}
          />
        );
      })}
      <div className="add-new-education-btn">
        <button className="primary-button" type="button" onClick={addNewEducationItemDisplay}>
          Add New
        </button>
      </div>
    </div>
  );
}
