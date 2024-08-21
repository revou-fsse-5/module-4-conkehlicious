import React, { useState } from "react";
import Signupinfo from "./Signupinfo";
import Address from "./Address";
import Otherinfo from "./Otherinfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../Schema";

function Form() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    fullName: "",
    dob: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    userName: "",
    resolver: yupResolver(validationSchema),
  });

  const FormTitles = ["Sign---Up", "Address", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Signupinfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else {
      return <Otherinfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="header text-8xl">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body-container">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className="bg-amber-400"
          >
            BACK
          </button>

          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Form Submitted");
                console.log(formData);
              }
              setPage((currPage) => currPage + 1);
            }}
            className="bg-amber-400"
          >
            {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
