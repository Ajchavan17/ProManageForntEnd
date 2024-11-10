import React, { useState } from "react";
import "./MainContent.css";
import Card from "./Card";
import assets from "../assets/assets";
import { stages } from "../assets/assets";
import { tasks } from "../assets/assets";
import AddTask from "../model/AddTask";
const MainContent = () => {
  const [addTaskModelShow, setAddTaskModelShow] = useState(false);

  const toggleAddTaskModel = () => {
    setAddTaskModelShow(!addTaskModelShow);
  };

  const [collapseStates, setCollapseStates] = useState(
    stages.reduce((acc, stage) => {
      acc[stage] = false;
      return acc;
    }, {})
  );

  const toggleCollapse = (stage) => {
    setCollapseStates((prev) => ({
      ...prev,
      [stage]: !prev[stage],
    }));
  };

  return (
    <div className="task-main-container">
      {stages.map((stage, index) => {
        const filteredTasks = tasks.filter((task) => task.status === stage);
        return (
          <div className="task-category" key={index}>
            <div className="stage-header">
              <h1>{stage}</h1>
              <div>
                {stage === "To do" ? (
                  <img
                    className="plusIcon"
                    src={assets.plusICon}
                    onClick={() => toggleAddTaskModel()}
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                ) : null}

                <img
                  className="collpaseIcon"
                  src={assets.collpaseIcon}
                  onClick={() => toggleCollapse(stage)}
                  style={{ cursor: "pointer" }}
                  alt=""
                />
              </div>
            </div>
            <div className="card-container">
              {filteredTasks.map((task, taskIndex) => (
                <Card
                  key={taskIndex}
                  task={task}
                  isCollapsed={collapseStates[stage]}
                />
              ))}
            </div>
          </div>
        );
      })}
      {addTaskModelShow && (
        <div className="add-task-model">
          <AddTask closeModel={toggleAddTaskModel} />
        </div>
      )}
    </div>
  );
};

export default MainContent;
