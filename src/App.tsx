import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CallBack from "./assets/pages/useCallBack";
import UseMemo from "./assets/pages/useMemo";
import UseRef from "./assets/pages/useRef";
import SynAPI from "./assets/pages/synAPI";
import FileExplorer from "./assets/pages/fileExplorer";

function App() {
  return (
    <Routes>
      <Route path="/callBack" element={<CallBack />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/synAPI" element={<SynAPI />} />
      <Route path="/fileExplorer" element={<FileExplorer />} />
    </Routes>
  );
}

export default App;
