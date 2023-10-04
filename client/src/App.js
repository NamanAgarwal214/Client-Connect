import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Protect from "./helpers/Protect";
import CreateForm from "./components/create post/CreateForm";
import NotFound from "./helpers/NotFound";
axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add-post"
          element={
            <Protect>
              <CreateForm />
            </Protect>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
