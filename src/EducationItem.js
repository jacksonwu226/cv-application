import { v4 as uuidv4 } from "uuid";

export default class EducationItem {
  constructor(
    school = "",
    degree = "",
    startDate = "",
    endDate = "",
    location = "",
  ) {
    this._school = school;
    this._degree = degree;
    this._startDate = startDate;
    this._endDate = endDate;
    this._location = location;
    this._id = uuidv4();
  }
  get school() {
    return this._school;
  }
  set school(newSchool) {
    this._school = newSchool;
  }
  get degree() {
    return this._degree;
  }
  set degree(newDegree) {
    this._degree = newDegree;
  }
  get startDate() {
    return this._startDate;
  }
  set startDate(newDate) {
    this._startDate = newDate;
  }
  get endDate() {
    return this._endDate;
  }
  set endDate(newDate) {
    this._endDate = newDate;
  }
  get location() {
    return this._location;
  }
  set location(newLocation) {
    this._location = newLocation;
  }
  get id() {
    return this._id;
  }
  set id(newId) {
    this._id = newId;
  }
}
