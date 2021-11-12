import { ReactComponent as Eye } from "bootstrap-icons/icons/eye-fill.svg";
import { ReactComponent as EyeSlash } from "bootstrap-icons/icons/eye-slash-fill.svg";

const Input = (props) => {
  const {
    type = "text",
    name,
    label,
    placeholder,
    handleShowPassword,
    ...rest
  } = props;
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <div className="input-group mb-1">
        <input
          type={type}
          aria-label={name}
          name={name}
          placeholder={placeholder}
          className="form-control"
          aria-describedby="show-password"
          {...rest}
        />
        {name === "password" && (
          <button
            className="btn btn-secondary"
            type="button"
            id="show-password"
            onClick={handleShowPassword}
          >
            {type === "password" ? <Eye /> : <EyeSlash />}
          </button>
        )}
      </div>
      <div id="emailHelp" className="form-text">
        Enter your fullname
      </div>
    </div>
  );
};
export default Input;
