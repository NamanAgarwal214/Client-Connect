import React from "react";

const Ques2 = ({ user, changeHandler }) => {
  return (
    <>
      <div className="addform-1">
        <div className="ques">
          <h4>Name:</h4>
        </div>
        <div className="options">
          <div className="inp">
            <input
              type="text"
              title="name"
              name="name"
              value={user.name}
              onChange={changeHandler}
              placeholder="Name..."
              autoFocus={true}
              required
            />
          </div>
        </div>
      </div>
      {/* separation */}
      <br />
      <div className="addform-1">
        <div className="ques">
          <h4>Description {user.name && `about ${user.name}`}</h4>
        </div>
        <div className="options inp">
          {/* <div className="option"> */}
          <textarea
            className="textarea"
            onChange={changeHandler}
            rows={5}
            name="description"
            value={user.description}
            cols={20}
            required
          />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Ques2;
