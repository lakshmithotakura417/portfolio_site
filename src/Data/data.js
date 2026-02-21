// frontend image imports
import html from "../assets/frontend_img_list/html.svg";
import css from "../assets/frontend_img_list/css.svg";
import javascript from "../assets/frontend_img_list/javascript.svg";
import typescript from "../assets/frontend_img_list/typescript.svg";
import reactjs from "../assets/frontend_img_list/reactjs.svg";
import nextjs from "../assets/frontend_img_list/nextjs.svg";
import astrojs from "../assets/frontend_img_list/astrojs.svg";
import tailwind from "../assets/frontend_img_list/tailwind.svg";
import tsquery from "../assets/frontend_img_list/tsquery.svg";
import gsap from "../assets/frontend_img_list/gsap.svg";
import motion from "../assets/frontend_img_list/framermotion.svg";
import redux from "../assets/frontend_img_list/redux.svg";
import zustand from "../assets/frontend_img_list/zustand.webp"
import d3js from "../assets/frontend_img_list/d3js.svg";
import nanostories from "../assets/frontend_img_list/nanostores.svg";
// backend image imports
import nodejs from "../assets/backend_img_list/nodejs.svg";
import express from "../assets/backend_img_list/express.svg";
import mongodb from "../assets/backend_img_list/mongodb.svg";
import firebase from "../assets/backend_img_list/firebase.svg";
import mysql from "../assets/backend_img_list/mysql.svg";
import php from "../assets/backend_img_list/php.svg";
import restapi from "../assets/backend_img_list/restapi.svg";
import driveapi from "../assets/backend_img_list/driveapi.svg";
import authjs from "../assets/backend_img_list/authjs.svg";
import edgestore from "../assets/backend_img_list/edgestore.webp"
//  programming image import
import python from "../assets/programming_img_list/python.svg";
import java from "../assets/programming_img_list/java.svg";
import R from "../assets/programming_img_list/R.svg";
import c from "../assets/programming_img_list/c.svg";
// techtool image import
import bun from "../assets/techtool_img_list/bun.svg";
import figma from "../assets/techtool_img_list/figma.svg"
import git from "../assets/techtool_img_list/git.svg"
import Github from "../assets/techtool_img_list/Github.svg";
import netlify from "../assets/techtool_img_list/netlify.svg"
import npm from "../assets/techtool_img_list/npm.svg";
import socketio from "../assets/techtool_img_list/socketio.svg";
import vercel from "../assets/techtool_img_list/vercel.svg";
import vitejs from "../assets/techtool_img_list/vitejs.svg";
import vscode from "../assets/techtool_img_list/vscode.svg";

// projects data
import todoImage from "../assets/project_images/todoImage.png"
import employee_dashboard from "../assets/project_images/employee_dashboard.png"

export const frontendData = [
    {
      img: html,
      name: "HTML",
    },
    {
      img: css,
      name: "CSS",
    },
    {
    img: javascript,
      name: "Javascript",
    },
    {
      img: typescript,
      name: "Typescript",
    },
    {
      img: reactjs,
      name: "React Js",
    },
    {
      img: nextjs,
      name: "Next Js",
    },
    {
      img: astrojs,
      name: "Astro",
    },
    {
      img: tailwind,
      name: "Tailwind",
    },
    {
      img: tsquery,
      name: "TS Query",
    },
    {
      img:gsap,
      name: "GSAP",
    },
    {
      img: motion,
      name: "Motion",
    },
    {
      img: redux,
      name: "Redux",
    },
    {
      img: zustand,
      name: "Zustand",
    },
    {
      img: d3js,
      name: "D3js",
    },
    {
      img: nanostories,
      name: "Nanostories",
    },
  ];
  export const backendData = [
    {
      img: nodejs,
      name: "Nodejs",
    },
    {
      img: express,
      name: "Expressjs",
    },
    {
      img: mongodb,
      name: "Mongodb",
    },
    {
      img: firebase,
      name: "Firebase",
    },
    {
      img: edgestore,
      name: "Edge Store",
    },
    {
      img: mysql,
      name: "My Sql",
    },
    {
      img: php,
      name: "PHP",
    },
    {
      img: restapi,
      name: "REST API",
    },
    {
      img: driveapi,
      name: "Drive Api",
    },
    {
      img: authjs,
      name: "Auth Js",
    },
  ];
  export const programmingData = [
    {
      img: javascript,
      name: "Javascript",
    },
    {
      img: typescript,
      name: "Typescript",
    },
    {
      img: python,
      name: "Python",
    },
    {
      img: c,
      name: "C++",
    },
    {
      img: java,
      name: "Java",
    },
    {
      img: R,
      name: "R",
    },
  ];
  export const techToolData = [
    {
      img: npm,
      name: "NPM",
    },
    {
      img: bun,
      name: "Bun",
    },
    {
      img: git,
      name: "GIT",
    },
    {
      img: Github,
      name: "Github",
    },
    {
      img: vitejs,
      name: "Vite Js",
    },
    {
      img: socketio,
      name: "Socket.io",
    },
    {
      img: netlify,
      name: "Netlify",
    },
    {
      img: vercel,
      name: "Vercel",
    },
    {
      img: vscode,
      name: "VS Code",
    },
    {
      img: figma,
      name: "Figma",
    },
  ];
  export const projectsData = [
    {
      imgUrl:todoImage,
    pName: "Todo List",
    gitUrl: "https://github.com/lakshmithotakura417/todo_list",
    pDescription:
      "We can add new task to this todo and also we can update and delete todos..",
    languages: ["React js", "Tailwind"],
    },
    {
      imgUrl:employee_dashboard,
    pName: "Employee Dashboard",
    gitUrl: "https://github.com/lakshmithotakura417/employee-dashboard",
    pDescription:
      "A responsive Employee Management Dashboard built with React.js that allows users to add, update, and delete employee records with dynamic UI rendering and state management..",
    languages: ["React js", "Tailwind"],
    },
  {
    imgUrl:
      "https://img.freepik.com/free-vector/online-music-streaming-service-isometric-landing-page_107791-4911.jpg?semt=ais_hybrid&w=740&q=80",
    pName: "melody track",
    gitUrl: "https://github.com/bellamkondasrikanth66/melodytrack",
    pDescription:
      "About MelodyTrack is a web-based music inventory management pplication designed to manage and organize music inventory..",
    languages: ["python", "Django"],
  },
  {
    imgUrl:
      "https://img.freepik.com/free-vector/online-music-streaming-service-isometric-landing-page_107791-4911.jpg?semt=ais_hybrid&w=740&q=80",
    pName: "sad talker",
    gitUrl: "https://github.com/bellamkondasrikanth66/SadTalker",
    pDescription:
      "Learning Realistic 3D Motion Coefficients for Stylized Audio-Driven Single Image Talking Face Animation ..",
    languages: ["python", "Django"],
  },
  {
    imgUrl:
      "https://img.freepik.com/free-vector/online-music-streaming-service-isometric-landing-page_107791-4911.jpg?semt=ais_hybrid&w=740&q=80",
    pName: "expences tracker",
    gitUrl: "https://github.com/bellamkondasrikanth66/webbasedexpensestracker",
    pDescription:
      "Web-based expenses tracker is a web application designed to help users track, manage, and analyze their personal expenses",
    languages: ["python", "Django"],
  },
];