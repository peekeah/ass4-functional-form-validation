import React, { useState } from "react";

export default function FormFunction() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    course: "Mongo",
    errors: {
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errKeys = Object.keys(value).filter((key) => value[key] === "" && key !== "error");
    if(errKeys.length >= 1) {
      window.alert("please fill all the required fields")
    }
    else {
      console.log(value);
    }
  };

  const handleChange = (e) => {
    let errors = { ...value.errors };
    let name = e.target.name;

    if (e.target.value === "") {
      errors[name] = "Required";
    } else {
      errors[name] = "";
    }

    let tempValues = { ...value };
    tempValues[e.target.name] = e.target.value;
    tempValues.errors = errors;
    setValue(tempValues);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>First Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="firstname"
                    value={value.firstname}
                    onChange={handleChange}
                  />
                </td>
                <td style={{ color: "red" }}>{value.errors.firstname}</td>
              </tr>
              <tr>
                <td>
                  <label>Last Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="lastname"
                    value={value.lastname}
                    onChange={handleChange}
                  />
                </td>
                <td style={{ color: "red" }}>{value.errors.lastname}</td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                  />
                </td>
                <td style={{ color: "red" }}>{value.errors.email}</td>
              </tr>
              <tr>
                <td>
                  <label>Gender</label>
                </td>
                <td>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  Female
                </td>
                <td style={{ color: "red" }}>{value.errors.email}</td>
              </tr>
              <tr>
                <td>
                  <label>Courses</label>
                </td>
                <td>
                  <select
                    name="courses"
                    value={value.course}
                    onChange={handleChange}
                  >
                    <option value="mongo">Mongo</option>
                    <option value="react">React</option>
                    <option value="node">Node</option>
                    <option value="mysql">MySQL</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <button type="submit">Submit</button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      setValue({
                        firstname: "",
                        lastname: "",
                        email: "",
                        gender: "",
                        course: "",
                      })
                    }
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}
