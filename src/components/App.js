import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './../styles/App.css';
import Layout from "./Layout";
import Home from "./Home";
import Category from "./Category";
import Item from "./Item";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="women" element={<Category />}>
              <Route path=":itemId" element={<Item />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
