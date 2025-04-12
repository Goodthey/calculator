import "./DataComponents.css";
import { useState } from "react";
function DataComponent(props) {
  const { label, type, options, checked, onChange, state } = props;
  const [value, setValue] = useState(state);

  const handleChange = (val) => {
    setValue(val.target.value);
  };
  return (
    <div className="data-components">
      <label>{label}</label>
      {type === "input" && (
        <input type="text" value={value} onChange={handleChange}></input>
      )}
      {type === "select" && options && (
        <select onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === "checkbox" && (
        <div className="last-comp">
          <input type="checkbox" checked={checked} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

export default DataComponent;
