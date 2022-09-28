import React from "react";
import styles from "./Button.module.css";
const Button = (props) => {
  const handleClick = () => {
    props.switchType(`${props.name}`);
  };
  return (
    <div onClick={handleClick} className={styles.buttonContainer}>
      <p className={styles.name}>{props.name}</p>
    </div>
  );
};

// const ColorButton = styled(Button)(({ theme }) => ({
//     color: theme.palette.getContrastText(grey[900]),
//     backgroundColor: grey[900],
//     "&:hover": {
//       backgroundColor: grey[700],
//     },
//     width: "200px",
//     height: "50px",
//     borderRadius: 100,
//   }));
export default Button;
