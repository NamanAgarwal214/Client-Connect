import React from "react";

const Ques3 = ({ user, changeHandler }) => {
  return (
    <>
      <div className="addform-1">
        <div className="ques">
          <h4>Price:</h4>
        </div>
        <div className="options">
          <div className="inp">
            <input
              type="text"
              title="Price"
              name="price"
              value={user.price}
              onChange={changeHandler}
              placeholder="Rs..."
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
          <h4>Upload Photos</h4>
        </div>
        <div className="options">
          <div className="option">
            <input type="file" accept="image/*" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ques3;
