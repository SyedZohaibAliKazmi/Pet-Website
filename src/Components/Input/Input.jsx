// import { useForm } from "react-hook-form";
// import "./Input.css";

// function Input({
//   formKey,
//   obj,
//   placeholder,
//   errors,
//   errorMsg,
//   type,
//   value,
//   onChange,
// }) {
//   return (
//     <div>
//       <div className="main-inp">
//         {errors && errors[formKey] && (
//           <span>**{errorMsg ? errorMsg : "Its Error"}**</span>
//         )}
//         <input
//           placeholder={placeholder}
//           value={value}
//           type={type ? type : "text"}
//           {...obj}
//           onChange={onChange}
//         />
//       </div>
//     </div>
//   );
// }

// export default Input;


import { useForm } from "react-hook-form";
import "./Input.css";

function Input({
  formKey,
  obj,
  placeholder,
  errors,
  errorMsg,
  type,
  value,
  onChange,
  options, // New prop for dropdown options
}) {
  return (
    <div>
      <div className="main-inp">
        {errors && errors[formKey] && (
          <span>**{errorMsg ? errorMsg : "It's an Error"}**</span>
        )}

        {/* Render input if it's not a dropdown */}
        {type !== "select" ? (
          <input
            placeholder={placeholder}
            value={value}
            type={type ? type : "text"}
            {...obj}
            onChange={onChange}
          />
        ) : (
          // Render dropdown if type is "select"
          <select {...obj} value={value} onChange={onChange}>
            <option value="">Select a category</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default Input;
