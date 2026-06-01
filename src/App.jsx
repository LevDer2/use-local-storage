import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [fullName, setFullName] = useLocalStorage("fullName", {
    name: "",
    lastName: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFullName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Write your name"
        value={fullName.name}
        name="name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Write your second name"
        value={fullName.lastName}
        onChange={handleChange}
      />
      <p>Your name is {fullName.name}</p>
      <p>Your Last name is {fullName.lastName}</p>
    </div>
  );
}
