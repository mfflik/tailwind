import classNames from "classnames";

function Dropdown({ options, onOptionSelect }) {
const [isActive, setActive] = useState(false);
    
    const buttonClasses = `inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-500 active:text-gray-200 transition ease-in-out duration-150`;
  
    return (
    <>
      <button onClick={() => setActive(!isActive)} className={buttonClasses}>
        Options
      </button>
      <div class={classNames("origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg", {
        block: isActive,
        hidden: !isActive
      })}>
   {options.map((option) => <div key={option} onClick={(e) => onOptionSelect(option)}>{option}</div>)}
     </div>
     </>
    )
  }
  
  export default Dropdown;