import React from "react";

const Ques1 = ({ active, user, changeHandler }) => {
  const prodCategory = [
    "Home Appliances",
    "Kitchen Appliances",
    "Books",
    "Sports",
    "Stationery",
  ];
  const servCategory = [
    "Painting",
    "Car Wash",
    "Apppliance Repair",
    "Pest Control",
    "Cleaning",
  ];

  return (
    <>
      <div className="addform-1">
        <div className="ques">
          <h4>What are you adding?</h4>
        </div>
        <div className="options">
          <div className={active ? `option active` : "option"}>
            <input
              type="radio"
              name="role"
              id="prod"
              className="input"
              value="product"
              onChange={changeHandler}
            />
            <label htmlFor="prod">Product</label>
          </div>
          <div className={!active ? `option active` : "option"}>
            <input
              type="radio"
              name="role"
              id="serv"
              className="input"
              value="service"
              onChange={changeHandler}
            />
            <label htmlFor="serv">Service</label>
          </div>
        </div>
      </div>
      {/* separation */}
      <br />
      <div className="addform-1">
        <div className="ques">
          <h4>What Category of {user.role}?</h4>
        </div>
        <div className="options">
          <div className="option sel">
            <select
              name="category"
              id="category"
              value={user.category}
              onChange={changeHandler}
              className="select"
            >
              <option>Choose a category</option>
              {user.role === "product"
                ? prodCategory.map((el) => {
                    return (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    );
                  })
                : servCategory.map((el) => {
                    return (
                      <option key={el} value={el}>
                        {el}
                      </option>
                    );
                  })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ques1;
