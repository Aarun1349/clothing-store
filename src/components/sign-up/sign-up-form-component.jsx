// import { async } from "@firebase/util";
import { useState,useContext } from "react";
import "./sign-up-form.styles.scss";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../../components/form-input/form-input.commponent";
import {UserContext} from '../../context/user.context'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utility/firebase/firebase.utils";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
 
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };
  const {setCurrentUser} = useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
        setCurrentUser(user)
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
      console.log(user, displayName);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <>
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            onChange={handleChange}
            name="displayName"
            value={displayName}
            required
          />

          <FormInput
            label="Email"
            type="email"
            onChange={handleChange}
            name="email"
            value={email}
            required
          />

          <FormInput
            label="Password"
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
            required
          />

          <FormInput
            label="Confirm Password"
            type="password"
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            required
          />

          <Button buttonType={BUTTON_TYPE_CLASSES.base} children=" Sign Up" type="submit" />
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
