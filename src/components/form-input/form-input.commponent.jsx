import {Group,FormInputLabel,Input} from  "./form-input.styles.jsx";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
      {label && (
        <FormInputLabel
        shrink ={otherProps.value.length}
          
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
