import { TextField } from "@material-ui/core";
import { useState } from "react";
import styles from "./style.module.css";

const Contact = () => {
  const [inputs, setInputs] = useState([
    { id: 1, label: "Name", type: "text", required: true },
    {
      id: 2,
      label: "Email",
      type: "email",
      tip: "Please enter a right email address!",
      required: true,
      validator: (val) => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(val.toUpperCase());
      },
    },
    { id: 3, label: "Address", type: "text", required: true },
    { id: 4, label: "Message", type: "text", required: true },
  ]);
  const handleBlur = (input, val) => {
    if (input.required && !val.trim()) {
      input.error = true;
      input.helpText = "Please enter this input!";
    } else if (input.validator && !input.validator(val)) {
      input.error = true;
      input.helpText = input.tip;
    } else {
      input.error = false;
      input.helpText = "";
    }
    setInputs(
      inputs.map((item) => {
        return item.id === input.id ? input : item;
      })
    );
  };
  const renderInputs = () => {
    return inputs.map((input) => {
      return (
        <TextField
          onBlur={(e) => handleBlur(input, e.target.value)}
          error={input.error}
          helperText={input.helpText}
          key={input.id}
          label={input.label}
          type={input.type}
          required={input.required}
          variant="outlined"
        />
      );
    });
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.form}>{renderInputs()}</div>
    </div>
  );
};

export default Contact;
