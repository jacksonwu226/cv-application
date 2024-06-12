import { useState } from "react";
import "./experience.css";
import caretIcon from "./assets/menu-down.svg";
import ExperienceItem from "./ExperienceItem";

export default function Experience({ experienceList, setExperienceList }) {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [showExperienceList, setShowExperienceList] = useState(true);
  const [selectedExpItem, setSelectedExpItem] = useState(null);

  const updateSelectedItem = (item) => {
    setSelectedExpItem(item);
    setShowExperienceList(false);
  };

  const addNewExpItemDisplay = () => {
    setShowExperienceList(false);
  };

  const updateExpList = (newExpItem) => {
    const index = experienceList.findIndex((item) => item === selectedExpItem);
    if (index !== -1) {
      const updatedList = [...experienceList];
      updatedList[index] = newExpItem;
      setExperienceList(updatedList);
    } else {
      appendExpList(newExpItem);
    }
    setSelectedExpItem(null);
    setShowExperienceList(true);
  };
  const appendExpList = (item) => {
    const updatedList = experienceList.concat(item);
    setExperienceList(updatedList);
  };

  const cancelUpdateExp = () => {
    setSelectedExpItem(null);
    setShowExperienceList(true);
  };

  const removeExpItem = (expItem) => {
    const updatedList = experienceList.filter((item) => item !== expItem);
    setExperienceList(updatedList);
  };

  return (
    <div className="experience-section-container">
      <button
        className="experience-section-trigger"
        onClick={() => setSectionOpen(!sectionOpen)}
      >
        <h2>Experience</h2>
        <img
          src={caretIcon}
          className={`caret ${sectionOpen ? "active" : ""}`}
        />
      </button>
      {showExperienceList ? (
        <ExperienceList
          experienceList={experienceList}
          updateSelectedItem={updateSelectedItem}
          appendExpList={appendExpList}
          addNewExpItemDisplay={addNewExpItemDisplay}
          removeExpItem={removeExpItem}
          sectionOpen={sectionOpen}
        />
      ) : (
        <ExperienceForm
          selectedExpItem={selectedExpItem}
          updateExpList={updateExpList}
          cancelUpdateExp={cancelUpdateExp}
          sectionOpen={sectionOpen}
        />
      )}
    </div>
  );
}

function ExperienceList({
  experienceList,
  updateSelectedItem,
  addNewExpItemDisplay,
  removeExpItem,
  sectionOpen,
}) {
  return (
    <div className={`experience-list-container ${sectionOpen ? "active" : ""}`}>
      {experienceList.map((item) => {
        return (
          <ExperienceListItem
            key={item.id}
            item={item}
            updateSelectedItem={updateSelectedItem}
            removeExpItem={removeExpItem}
          />
        );
      })}
      <div className="add-new-experience-btn">
        <button type="button" onClick={addNewExpItemDisplay}>
          Add New
        </button>
      </div>
    </div>
  );
}

function ExperienceListItem({ item, updateSelectedItem, removeExpItem }) {
  const handleInfoClick = () => {
    updateSelectedItem(item);
  };
  const handleRemoveClick = (event) => {
    event.stopPropagation();
    removeExpItem(item);
  };
  return (
    <div className="experience-list-item">
      <button onClick={handleInfoClick} className="main-btn">
        <span>{item.company}</span>
        <span onClick={handleRemoveClick} className="remove-btn">
          X
        </span>
      </button>
    </div>
  );
}

function ExperienceForm({
  selectedExpItem,
  updateExpList,
  cancelUpdateExp,
  sectionOpen,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const company = formData.get("company");
    const position = formData.get("position");
    const startDate = formData.get("start-date");
    const endDate = formData.get("end-date");
    const location = formData.get("location");
    const description = formData.get("description"); // Added description field
    const newExpItem = new ExperienceItem(
      company,
      position,
      startDate,
      endDate,
      location,
      description,
    ); // Include description in newExpItem
    updateExpList(newExpItem);
  }

  function handleCancel(event) {
    event.preventDefault();
    cancelUpdateExp();
  }

  return (
    <div className={`experience-info-container ${sectionOpen ? "active" : ""}`}>
      <form onSubmit={handleSubmit} className="experience-info-form">
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          name="company"
          defaultValue={selectedExpItem === null ? "" : selectedExpItem.company}
        />
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          id="position"
          defaultValue={
            selectedExpItem === null ? "" : selectedExpItem.position
          }
        />
        <label htmlFor="start-date">Start Date</label>
        <input
          type="text"
          name="start-date"
          id="start-date"
          defaultValue={
            selectedExpItem === null ? "" : selectedExpItem.startDate
          }
        />
        <label htmlFor="end-date">End Date</label>
        <input
          type="text"
          name="end-date"
          id="end-date"
          defaultValue={selectedExpItem === null ? "" : selectedExpItem.endDate}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          defaultValue={
            selectedExpItem === null ? "" : selectedExpItem.location
          }
        />
        <label htmlFor="description">Description</label>{" "}
        {/* Added description field */}
        <textarea
          id="description"
          name="description"
          defaultValue={
            selectedExpItem === null ? "" : selectedExpItem.description
          } // Added defaultValue for description field
        />
        <div className="button-container">
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
