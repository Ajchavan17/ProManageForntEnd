import React, { useState, useRef } from "react";
import "./AddTask.css";
import assets from "../assets/assets";
import { formatDate } from "../../utils/utils";
import Select from "react-select";


const AddTask = ({ closeModel }) => {
  const priorityColor = {
    High: "#FF2473",
    Medium: "#18B0FF",
    Low: "#63C05B",
  };

  const [priority, setPriority] = useState("Moderate");

  const [selectedDate, setSelectedDate] = useState(null);
  const dateInputRef = useRef(null);

  const openDatePicker = () => {
    dateInputRef.current.showPicker();
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState([]);
  const options = [
    { value: "A1B2C3", label: "email1@example.com" },
    { value: "D4E5F6", label: "email2@example.com" },
    { value: "G7H8I9", label: "email3@example.com" },
    { value: "J1K2L3", label: "email4@example.com" },
    { value: "M4N5O6", label: "email5@example.com" },
    { value: "P7Q8R9", label: "email6@example.com" },
    { value: "S1T2U3", label: "email7@example.com" },
    { value: "V4W5X6", label: "email8@example.com" },
    { value: "Y7Z8A9", label: "email9@example.com" },
    { value: "B1C2D3", label: "email10@example.com" },
  ];

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="add-task-main-container">
      <h1>
        Title <span className="star">*</span>
      </h1>
      <input type="text" placeholder="Enter Task Title" />
      <div className="add-task-priority-container">
        <h2>
          Select Priority <span className="star">*</span>
        </h2>
        <div
          className="task-priority-container"
          onClick={() => setPriority("High")}
          style={priority === "High" ? { backgroundColor: "#EEECEC" } : {}}
        >
          <div
            className="proirity-dot"
            style={{ backgroundColor: priorityColor.High }}
          ></div>
          <p>HIGH PRIORITY</p>
        </div>
        <div
          className="task-priority-container"
          onClick={() => setPriority("Moderate")}
          style={priority === "Moderate" ? { backgroundColor: "#EEECEC" } : {}}
        >
          <div
            className="proirity-dot"
            style={{ backgroundColor: priorityColor.Medium }}
          ></div>
          <p>MODERATE PRIORITY</p>
        </div>
        <div
          className="task-priority-container"
          onClick={() => setPriority("Low")}
          style={priority === "Low" ? { backgroundColor: "#EEECEC" } : {}}
        >
          <div
            className="proirity-dot"
            style={{ backgroundColor: priorityColor.Low }}
          ></div>
          <p>LOW PRIORITY</p>
        </div>
      </div>
      <div className="add-task-assignee-container">
        <div>
          <h3>Assign to</h3>
        </div>

        <Select
          options={options}
          value={selectedOption}
          onChange={handleOptionChange}
          // isMulti={true}
        />
      </div>
      <p className="checklist-count-container">
        Checklist (1/3) <span className="star">*</span>
      </p>
      <div className="add-task-add-checklist">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="add-task-add-checklist-item">
            <input type="checkbox" />
            <input type="text" placeholder="Type..." />
            <img src={assets.binIcon} alt="" />
          </div>
        ))}
        <div className="add-task-add-checklist-item-btn">
          <img src={assets.plusICon} alt="" />
          <h2>Add New</h2>
        </div>
      </div>
      <div className="add-task-bottom-btn-container">
        <div>
          <input
            ref={dateInputRef}
            onChange={handleDateChange}
            className="add-task-calender"
            type="date"
          />
          <button className="add-task-due-date-btn" onClick={openDatePicker}>
            {selectedDate ? formatDate(selectedDate) : "Select Due Date"}
            {/* Select due date */}
          </button>
        </div>
        <div>
          <button className="add-task-cancel-btn" onClick={closeModel}>
            Cancel
          </button>
          <button className="add-task-save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
