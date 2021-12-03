import React from "react";
import ReactWordcloud from "react-wordcloud";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wordcloud from "./WordCloud";
import Subject from "./Subject";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/subject/:subject" element={<Subject />} />
          <Route path="/" exact element={<Wordcloud />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
