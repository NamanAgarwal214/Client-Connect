import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Ques1 from "./Ques1";
import Ques2 from "./Ques2";
import Ques3 from "./Ques3";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../context/Context";

const CreateForm = () => {
  const [user, setUser] = useState({
    role: "service",
    category: "",
    name: "",
    description: "",
    price: "",
  });
  const [active, setActive] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { token } = useContext(StateContext);

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.name === "role") {
      setActive(!active);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(user);

    for (let key in user) {
      if (user.hasOwnProperty(key)) {
        let value = user[key];
        if (value === "") {
          toast.error("Please fill all fields");
          return;
        }
      }
    }
    try {
      const res = await axios.post("/createPost", user, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.status === "success") {
        // success
        toast.success(`${user.role} added successfully`);
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
        <form onSubmit={submitHandler}>
          {page === 1 && (
            <Ques1 active={active} user={user} changeHandler={changeHandler} />
          )}
          {page === 2 && <Ques2 user={user} changeHandler={changeHandler} />}
          {page === 3 && <Ques3 user={user} changeHandler={changeHandler} />}

          <div className="form-btn">
            {page > 1 && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setPage(page - 1)}
              >
                Previous
              </button>
            )}
            {page <= 2 && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setPage(page + 1)}
              >
                {page === 3 ? "Submit" : "Next"}
              </button>
            )}
            {page === 3 && (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
