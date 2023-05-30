import React from "react";
import { ButtonSize, ButtonType } from "../Theme/Theme";

function Button2({size, type, children}) {

  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size];

  return (
    <button className={classNames}>{children}</button>
  )
}
export default Button2;
