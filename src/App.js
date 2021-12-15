import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wordcloud from "./WordCloud";
import Subject from "./Subject";
import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <div>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/subject/:subject" element={<Subject />} />
          <Route path="/" exact element={<Wordcloud />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
