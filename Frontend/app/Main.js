import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing my component
import Login from "./Component/login";
import Register from "./Component/Register";
import ForgetPassWord from "./Component/ForgetPassWord";
import Chat from "./Component/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassWord />} />
        <Route path="/login" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
