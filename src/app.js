import React from "react";
import "./app.css";
import Button from "./components/Button/Button";
import CustomButton from "./components/CustomButton/CustomButton";
import Table from "./components/TableContents/Table";

function App() {
  return (
    <div>
      <Button />
      <CustomButton color="secondary" size="sm" >
        Click Me
      </CustomButton>
      <Table/>
    </div>
  );
}

export default App;
