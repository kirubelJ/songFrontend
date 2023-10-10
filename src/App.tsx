import React from "react";
import "./App.css";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//

//Pages
import Landing from "./components/pages/Landing/Landing";
import Manage from "./components/pages/Manage/Manage";
import Create from "./components/pages/Manage/Create/Create";
import ReadAll from "./components/pages/Manage/Read/ReadAll";
import Update from "./components/pages/Manage/Update/Update";
import Delete from "./components/pages/Manage/Delete/Delete";
import Statistics from "./components/pages/Statistics/Statistics";
//

import Home from "./components/pages/Home/Home";
//

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/readall" element={<ReadAll />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
