import "./ResumePreview.css"

export default function ResumePreview({ personalDetails, educationList, experienceList }) {
  return (
    <div className="page-container">
      <PrintButton />
      <div className="page">
        <PersonalDetailsSection personalDetails={personalDetails} />
        <EducationSection educationList={educationList} />
        <ExperienceSection experienceList={experienceList} />
      </div>
    </div>
  );
}

function PersonalDetailsSection({personalDetails}){
  return(
    <div className="personal-details-preview">
      <h1 className="name-preview">{personalDetails.name}</h1>
      <div className="personal-additional-details-container">
        <p className="email-preview">{personalDetails.email}</p>
        <p> | </p>
        <p className="phone-number-preview">{personalDetails.phoneNumber}</p>
      </div>
    </div>  
  )
}
function EducationItemSection({eduItem}){
  return(
    <div className="education-item-preview">
      <div className="education-date"> <span className="education-start-date">{eduItem.startDate}</span> &ndash; <span className="education-end-date">{eduItem.endDate}</span></div>
      <div className="education-school-name">{eduItem.school}</div>
      <div className="education-location">{eduItem.location}</div>
      <div className="education-degree-name">{eduItem.degree}</div>
    </div>
  )
}

function EducationSection({educationList}){
  return(
    <div className="education-preview">
      <h1>Education</h1>
      <hr className="solid-divider" />
      {      
        educationList.map(educationItem => {
          return <EducationItemSection key={educationItem.id} eduItem={educationItem} />
      })}
    </div>
  )
}

function ExperienceSection({experienceList}){
  return(
    <div className="experience-preview">
      <h1>Experience</h1>
      <hr className="solid-divider" />
      {
        experienceList.map((experienceItem) => {
          return <ExperienceItemSection key={experienceItem.id} expItem={experienceItem} />
        })
      }
    </div>
  )
}

function ExperienceItemSection({expItem}){
  return(
    <div className="experience-item-preview">
      <div className="experience-date">
        <span className="experience-start-date">{expItem.startDate}</span> &ndash; <span className="experience-end-date">{expItem.endDate}</span>
      </div>
      <div className="experience-company-name">{expItem.company}</div>
      <div className="experience-position">{expItem.position}</div>

      <div className="experience-location">{expItem.location}</div>
      <div className="experience-description">{expItem.description}</div>
    </div>
  )
}

function PrintButton() {
  const handlePrint = () => {
    const printContents = document.querySelector(".page").innerHTML;
    const originalContents = document.body.innerHTML;
  
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  
    window.location.reload(); // Reload the page to restore event listeners and state
  };

  return (
    <button className="primary-button no-print" onClick={handlePrint}>
      Print Resume
    </button>
  );
}