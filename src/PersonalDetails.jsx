import { useState } from "react";
import './personalDetails.css'
import caretIcon from './assets/menu-up-outline.svg';

export default function PersonalDetails({personalDetails, setPersonalDetails}){
  const [open, setOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("full-name");
    const email = formData.get("email");
    const phoneNumber = formData.get("phone-number");
    setPersonalDetails({name, email, phoneNumber });
  };

  return(
    <div className="personal-details-container">
      <button className="personal-details-trigger" onClick={()=>{setOpen(!open)}}>
        <h2>Personal Details</h2>
        <img src={caretIcon} className={`caret ${open ?  'active' : ''}`} />
      </button>
      <form onSubmit={handleSubmit} className={`personal-details-form ${open ?  'active' : 'inactive'}`} >
          <label htmlFor="full-name">Full name</label>
          <input type="text" id="full-name" name="full-name" defaultValue={personalDetails.name}></input>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" defaultValue={personalDetails.email}></input>

          <label htmlFor="phone-number">Phone number</label>
          <input type="tel" id="phone-number" name="phone-number" defaultValue={personalDetails.phoneNumber}></input>

          <button type="submit">Save</button>
      </form>
    </div>
  )
}