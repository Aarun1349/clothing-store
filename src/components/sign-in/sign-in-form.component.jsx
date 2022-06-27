import FormInput from "../form-input/form-input.commponent";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import { useState } from "react";
const SignInForm = () => {
  const defaultLoginFields = {
    email: "",
    password: "",
  };
  const [loginFields, setLoginFields] = useState(defaultLoginFields);
  const { email, password } = loginFields;
  const handleSubmit = () => {
    console.log("submitted");
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log("handle");
  };
  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Your Email"
          type="text"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="text"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
      </form>
    </div>
  );
};

export default SignInForm;
