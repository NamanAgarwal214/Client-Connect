import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackIcon from "../BackIcon";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import axios from "axios";
import { toast } from "react-toastify";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CreateForm = () => {
  const [user, setUser] = useState({
    role: "",
  });

  const [radio, setRadio] = useState("");

  const [open, setOpen] = useState();
  const passRef = useRef();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     loadCaptchaEnginge(5, "cyan");
  //   }, []);

  const toggle = () => {
    setOpen(!open);
    if (passRef.current.type === "text") passRef.current.type = "password";
    else passRef.current.type = "text";
  };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setRadio(e.target.value);
    console.log("hello");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    for (let key in user) {
      if (user.hasOwnProperty(key)) {
        let value = user[key];
        if (value === "") {
          toast.error("Please fill all fields");
          return;
        }
      }
    }
    if (!validateCaptcha(user.captcha)) {
      toast.error("Please enter the captcha correctly");
      loadCaptchaEnginge(5, "cyan");
      return;
    }
    try {
      const res = await axios.post("/register", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.status === "success") {
        // success
        toast.success("Registered successfully");
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error.message);
    }
  };

  return (
    <div className="addform-container">
      <div className="addform-title">
        <h1>ADD PRODUCT / SERVICE</h1>
      </div>
      <div className="addform">
        <form>
          <div className="addform-1">
            <div className="ques">
              <h4>What are you adding?</h4>
            </div>
            <div className="option">
              <div
                id="prod"
                name="role"
                onClick={changeHandler}
                className="abc"
                aria-selected={user.role === "product"}
              >
                Option 1
              </div>
              {/* <div
                id="serv"
                name="role"
                value="service"
                onClick={changeHandler}
              >
                <input
                  type="radio"
                  id="serv"
                  name="role"
                  value="service"
                  onChange={changeHandler}
                />
                <label htmlFor="serv">Option 2</label>
              </div> */}
            </div>
          </div>
          {/* <button onClick={submitHandler}>Submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
