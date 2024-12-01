import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Define Routes */}
        <Routes>
          {/* Route for the Form page */}
          <Route path="/" element={<Form />} />

          {/* Route for the HomePage */}
          <Route path="/home" element={<HomePage />} />

          {/* Fallback or Error Page (Optional) */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <h1>404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>

        {/* Footer visible only on specific routes */}
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/home" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
