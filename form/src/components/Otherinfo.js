import React from "react";

function Otherinfo({ formData, setFormData }) {
  return (
    <div className="other-container">
      <input
        type="text"
        placeholder="User Name"
        value={formData.userName}
        onChange={(event) =>
          setFormData({ ...formData, userName: event.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />

      <input
        type="password"
        placeholder="Comfirm Password"
        value={formData.cpassword}
        onChange={(event) =>
          setFormData({ ...formData, cpassword: event.target.value })
        }
      />
    </div>
  );
}

export default Otherinfo;
