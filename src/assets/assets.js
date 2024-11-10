import astronautBackground from "./svg/astronautBackground.svg";
import openEye from "./svg/openEye.svg";
import closeEye from "./svg/closeEye.svg";
import emailIcon from "./svg/emailIcon.svg";
import profileIcon from "./svg/profileIcon.svg";
import passwordIcon from "./svg/passwordIcon.svg";
import promanageLogo from "./svg/promanageLogo.svg";
import board from "./svg/board.svg";
import analytics from "./svg/analytics.svg";
import settings from "./svg/settings.svg";
import logout from "./svg/logout.svg";
import peopleIcon from "./svg/peopleIcon.svg";
import dropDownIcon from "./svg/dropDownIcon.svg";
import collpaseIcon from "./svg/collpaseIcon.svg";
import plusICon from "./svg/plusIcon.svg";
import ellipseIcon from "./svg/ellipseIcon.svg";
import downArrow from "./svg/downArrow.svg";
import binIcon from "./svg/binIcon.svg";

const assets = {
  astronautBackground,
  profileIcon,
  emailIcon,
  openEye,
  closeEye,
  passwordIcon,
  promanageLogo,
  board,
  analytics,
  settings,
  logout,
  peopleIcon,
  dropDownIcon,
  collpaseIcon,
  plusICon,
  ellipseIcon,
  downArrow,
  binIcon,
};

export default assets;

export const stages = ["Backlog", "To do", "In progress", "Done"];

export const tasks = [
  {
    title: "Set up project repository",
    priority: "High",
    date: "Oct 15th",
    status: "Backlog",
    assignedTo: "AB",
    checklist: [
      { task: "Initialize repository", completed: true },
      { task: "Create initial README", completed: false },
    ],
  },
  {
    title: "Define project requirements",
    priority: "Medium",
    date: "Oct 20th",
    status: "Backlog",
    assignedTo: "CD",
    checklist: [
      { task: "Gather client requirements", completed: false },
      { task: "Document requirements", completed: false },
    ],
  },
  {
    title: "Design mockups for homepage",
    priority: "High",
    date: "Oct 25th",
    status: "To do",
    assignedTo: "EF",
    checklist: [
      { task: "Sketch wireframes", completed: false },
      { task: "Create high-fidelity mockups", completed: false },
    ],
  },
  {
    title: "Create database schema",
    priority: "Medium",
    date: "Oct 30th",
    status: "To do",
    assignedTo: "GH",
    checklist: [
      { task: "Define tables and relationships", completed: true },
      { task: "Write migration scripts", completed: false },
    ],
  },
  {
    title: "Develop login functionality",
    priority: "High",
    date: "Nov 5th",
    status: "In progress",
    assignedTo: "IJ",
    checklist: [
      { task: "Create login UI", completed: true },
      { task: "Implement authentication logic", completed: false },
      { task: "Add validation", completed: false },
    ],
  },
  {
    title: "Set up continuous integration",
    priority: "Medium",
    date: "Nov 10th",
    status: "In progress",
    assignedTo: "KL",
    checklist: [
      { task: "Configure CI tool", completed: true },
      { task: "Write initial test cases", completed: false },
    ],
  },
  {
    title: "Complete project setup",
    priority: "Low",
    date: "Oct 5th",
    status: "Done",
    assignedTo: "MN",
    checklist: [
      { task: "Install dependencies", completed: true },
      { task: "Verify environment setup", completed: true },
    ],
  },
  {
    title: "Finish homepage design",
    priority: "High",
    date: "Oct 12th",
    status: "Done",
    assignedTo: "OP",
    checklist: [
      { task: "Review with stakeholders", completed: true },
      { task: "Implement feedback", completed: true },
    ],
  },
];
