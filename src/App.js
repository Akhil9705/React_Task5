import React, { useState } from "react";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      const ageDiff = today - birthDate;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

      setAge(calculatedAge);
    } else {
      alert("Please enter your date of birth.");
    }
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "20px",
    },
    center: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    datePicker: {
      display: "flex",
      alignItems: "center",
    },
    dateInput: {
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "5px",
      appearance: "none",
      width: "300px",
    },
    calendarIcon: {
      color: "black",
      marginLeft: "-25px",
      cursor: "pointer",
    },
    calculateButton: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "4px",
      marginTop: "10px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1> Age Calculator </h1> <h5> Enter your date of birth:</h5>{" "}
      <div style={styles.center}>
        <div style={styles.datePicker}>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={styles.dateInput}
          />{" "}
          <i className="fa fa-calendar" style={styles.calendarIcon}>
            {" "}
          </i>{" "}
        </div>{" "}
        <button onClick={calculateAge} style={styles.calculateButton}>
          Calculate Age{" "}
        </button>{" "}
      </div>{" "}
      {age && (
        <h3>
          {" "}
          Your are {age}
          years old{" "}
        </h3>
      )}{" "}
    </div>
  );
}

export default App;
