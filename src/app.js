import React from "react";
import "./app.css";
import Button from "./components/Button/Button";
import CustomButton from "./components/CustomButton/CustomButton";
import Table from "./components/TableContents/Table";
import Button2 from "./components/Button/Button2";
function App() {
  return (
    <div>
      {/* <Button />
      <CustomButton color="secondary" size="sm" >
        Click Me
      </CustomButton>
      <Table/>
      <Button2 size="sm" type="primary">Enable</Button2> */}
       <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div>
    </div>
  );
}

export default App;
