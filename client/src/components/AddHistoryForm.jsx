import React, { useState } from "react";

const AddHistoryForm = ( props ) => {
  const intialInputs = {
    event: props.event || "",
    date: props.date || "",
    description: props.description || "",
  };

  const [inputs, setInputs] = useState(intialInputs, );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(inputs, props._id)
    setInputs(intialInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="add-form-title">Add Form</h2>
      <input
        type="text"
        name="event"
        value={inputs.event}
        onChange={handleChange}
        placeholder="Event"
        className="event-input"
      />
      <input
        type="text"
        name="date"
        value={inputs.date}
        onChange={handleChange}
        placeholder="Date"
        className="date-input"
      />
      <textarea
        type="text"
        name="description"
        value={inputs.description}
        onChange={handleChange}
        placeholder="Description"
        className="description-input"
      />
      <button className="addEvent-btn">
        Add Event
      </button>
    </form>
  );
};

export default AddHistoryForm;
