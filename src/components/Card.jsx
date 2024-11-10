import React, { useEffect, useState } from "react";
import "./card.css";
import assets from "../assets/assets";
import { truncateString, isDueDatePassed } from "../../utils/utils";

const Card = ({ task, isCollapsed }) => {
  const [collapse, setCollapse] = useState(false);

  const priorityColor = {
    High: "#FF2473",
    Medium: "#18B0FF",
    Low: "#63C05B",
  };

  const completedTasks = task.checklist.filter((item) => item.completed).length;

  const truncateedTitle = truncateString(task.title);

  useEffect(() => {
    setCollapse(isCollapsed);
  }, [isCollapsed]);

  return (
    <div className="card-main-container">
      <div className="card-inner-container">
        <div className="card-top-container">
          <div>
            <div
              className="proirity-dot"
              style={{ backgroundColor: priorityColor[task.priority] }}
            />
            <h1>{task.priority} PRIORITY</h1>
            <div>{task.assignedTo}</div>
          </div>
          <img src={assets.ellipseIcon} alt="" />
        </div>
        <h1 className="card-title">{truncateString(task.title)}</h1>
        <div className="card-checklists-container">
          <h1>
            Checklist ({completedTasks}/{task.checklist.length})
          </h1>
          <img
            src={assets.downArrow}
            alt=""
            onClick={() => setCollapse(!collapse)}
            style={{
              transform: collapse ? "rotate(0deg)" : "rotate(180deg)",
              cursor: "pointer",
            }}
          />
        </div>
        {collapse && (
          <div className="card-checklist-details-container">
            {task.checklist.map((item, index) => (
              <div key={index}>
                <input type="checkbox" checked={item.completed} />
                <p>{item.task}</p>
              </div>
            ))}
          </div>
        )}
        <div className="bottom-btn-container">
          <div className="due-date-container">
            <p
              style={{
                backgroundColor: isDueDatePassed(task.date)
                  ? "#cf3636"
                  : "#DBDBDB",
                color: isDueDatePassed(task.date) ? "#fffff" : "#5A5A5A",
              }}
            >
              {task.date}


            </p>
          </div>
          <div className="stage-btn-container">
            {/* hide respective btn that matches with the tsk.status */}

            {task.status !== "Backlog" && <button>BACKLOG</button>}
            {task.status !== "In progress" && <button>PROGRESS</button>}
            {task.status !== "To do" && <button>TO-DO</button>}
            {task.status !== "Done" && <button>DONE</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
