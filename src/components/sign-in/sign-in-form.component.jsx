// import { async } from "@firebase/util";
import { useState, useContext } from "react";
import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { UserContext } from "../context/user.context";
import FormInput from "../../components/form-input/form-input.commponent";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocFromAuth,
  signInWithEmail,
} from "../../utility/firebase/firebase.utils";
const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };
  const { setCurrentUser } = useContext(UserContext);
  const signInWithGoogle = async () => {
    // const { user } = await signInWithGooglePopup();
    await signInWithGooglePopup();
    // setCurrentUser(user)
    // await createUserDocFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithEmail(email, password);
      console.log(user);
      // setCurrentUser(user)
      resetFormFields();
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
        <h2>Already have an account!</h2>
        <span>SignIn with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="text"
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
          <div className="buttons-container">
            <Button type="submit" childern="SignIn" />
            <Button
              onClick={signInWithGoogle}
              buttonType="google"
              type="button"
              childern="Google SignIn"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
