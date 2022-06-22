import { async } from "@firebase/util";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utility/firebase/firebase.utils";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event)=>{
    event.preventDefault();
    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <>
      <div>
        <form onSubmit={() => {}}>
          <label>Display Name</label>
          <input
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            required
          ></input>
          <label>Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          ></input>
          <label>Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          ></input>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
