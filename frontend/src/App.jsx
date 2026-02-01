import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from './components/Layout'
import Dashboard from "./pages/Dashboard";
import TaskPage from "./pages/Tasks";
import Projects from "./pages/Projects";
import Setting from "./pages/Setting";
import Tasks from './components/tasks.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route path="index" element={<Dashboard />} />
          <Route path="tasksInfo" element={<TaskPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="setting" element={<Setting />} />
           </Route>
      </Routes>
     
      </BrowserRouter>
  );
}