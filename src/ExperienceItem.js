import { v4 as uuidv4 } from "uuid";

export default class ExperienceItem {
  constructor(
    company = "",
    position = "",
    startDate = "",
    endDate = "",
    location = "",
    description = "",
  ) {
    this._id = uuidv4(); // Generate a unique identifier for each instance
    this._company = company;
    this._position = position;
    this._startDate = startDate;
    this._endDate = endDate;
    this._location = location;
    this._description = description;
  }

  // Getter methods
  get id() {
    return this._id;
  }

  get company() {
    return this._company;
  }

  get position() {
    return this._position;
  }

  get startDate() {
    return this._startDate;
  }

  get endDate() {
    return this._endDate;
  }

  get location() {
    return this._location;
  }

  get description() {
    return this._description;
  }

  // Setter methods
  set company(value) {
    this._company = value;
  }

  set position(value) {
    this._position = value;
  }

  set startDate(value) {
    this._startDate = value;
  }

  set endDate(value) {
    this._endDate = value;
  }

  set location(value) {
    this._location = value;
  }

  set description(value) {
    this._description = value;
  }
}
