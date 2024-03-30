import React, { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import { uid } from "uid";
import { ref, set } from "firebase/database";
import { db } from "../firebase";

const FormContact = ({ currentLang }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const onFocusNumber = () => {
    if (!phone.startsWith("+1")) {
      setPhone("+1");
    }
  };

  // write to database
  const writeToDb = () => {
    const id = uid();
    // get current Date
    let currentDate = new Date();
    // Extract the date components
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    let year = currentDate.getFullYear();

    // Extract the time components
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Format the date and time
    let formattedDate =
      (day < 10 ? "0" : "") +
      day +
      "." +
      (month < 10 ? "0" : "") +
      month +
      "." +
      year;

    let formattedTime =
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes;

    // Combine date and time
    let formattedDateTime = formattedDate + ", " + formattedTime;
    // Date for filtering
    let filteringDate =
      year + (month < 10 ? "0" : "") + month + (day < 10 ? "0" : "") + day;

    let filteringTime =
      (hours < 10 ? "0" : "") +
      hours +
      (minutes < 10 ? "0" : "") +
      minutes +
      (seconds < 10 ? "0" : "") +
      seconds;

    // send to database
    set(ref(db, `/${id}`), {
      name,
      phone,
      state,
      city,
      id,
      isCompleted: false,
      submitedDate: formattedDateTime,
      filteringDate: filteringDate + filteringTime,
    });
  };

  // on submit
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      setName("");
      setPhone("");
      setCity("");
      setState("");

      writeToDb();
      alert(currentLang.sended);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <div id="form" className="form">
        {/* <div className="mr-2 form__text">
          <h2 className="text-5xl text-white font-semibold max-w-[540px]">
            {currentLang.formText1}
          </h2>

          <h3 className="mt-4 text-2xl text-white max-w-[250px]">
            {currentLang.formText2}
          </h3>
        </div> */}

        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-[400px]">
          <input
            required
            className="bg-transparent outline-none border-b-2 border-white text-white placeholder:text-white py-4 w-full"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={currentLang.name}
            maxLength={20}
          />

          <div>
            <input
              onFocus={onFocusNumber}
              required
              className="bg-transparent outline-none border-b-2 border-white text-white placeholder:text-white py-4 w-full"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={currentLang.number}
              maxLength={12}
            />
          </div>

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
            className="bg-transparent outline-none border-b-2 border-white text-white py-4 w-full"
          >
            <option value="">{currentLang.country}</option>
            {currentLang.states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-transparent outline-none border-b-2 border-white text-white placeholder:text-white py-4 w-full"
            type="text"
            placeholder={currentLang.city}
            maxLength={30}
          />

          <Button type="submit">{currentLang.button}</Button>
        </form>
      </div>
    </Container>
  );
};

export default FormContact;
