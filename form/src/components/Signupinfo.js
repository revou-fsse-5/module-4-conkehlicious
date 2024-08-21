import React from "react";

function Signupinfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={(event) =>
          setFormData({ ...formData, fullName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="date"
        placeholder="Date of Birth"
        value={formData.dob}
        onChange={(event) =>
          setFormData({ ...formData, dob: event.target.value })
        }
      />
    </div>
  );
}

export default Signupinfo;
