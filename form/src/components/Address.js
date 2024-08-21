import React from "react";

function Address({ formData, setFormData }) {
  return (
    <div className="address-container">
      <input
        type="text"
        placeholder="Street Address"
        value={formData.address}
        onChange={(event) =>
          setFormData({ ...formData, address: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(event) =>
          setFormData({ ...formData, city: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="State"
        value={formData.state}
        onChange={(event) =>
          setFormData({ ...formData, state: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={(event) =>
          setFormData({ ...formData, zipCode: event.target.value })
        }
      />
    </div>
  );
}

export default Address;
