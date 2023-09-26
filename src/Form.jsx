// ControlledInputs2.js

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const ControlledInputs2 = () => {
  const [orderId, setOrderId] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use the email as the identifier
    const formData = {
      "user id": email,
      "order id": orderId,
      "order number": orderNumber,
    };

    try {
      await axios.post(
        "https://sheet.best/api/sheets/d3a0801f-fcca-45bd-a291-810582b5bf45",
        formData
      );

      setOrderId("");
      setOrderNumber("");
      setEmail("");

      toast.success("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Form submission failed");
    }
  };

  return (
    <section className="section">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Submit the form</h3>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="orderId" className="form-label">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="form-input"
            placeholder="Order ID"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="orderNumber" className="form-label">
            Order Number
          </label>
          <input
            type="text"
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            className="form-input"
            placeholder="Order Number"
            required
          />
        </div>
        <button className="btn btn-submit">Submit</button>
      </form>
    </section>
  );
};

export default ControlledInputs2;
