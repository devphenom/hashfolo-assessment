import defImage from "./defaultlogo.jpg";
const BasketCard = ({ children }) => {
  return (
    <li className="list-group-item d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between list-card px-5">
      {children}
    </li>
  );
};

export const BasketImage = ({ image }) => {
  const defaultImage = (ev) => (ev.target.src = defImage);

  return (
    //   col-1
    <div className="col-12 col-md-3 my-md-0">
      <img
        src={image}
        onError={defaultImage}
        alt="Logo"
        className="img-fluid rounded-c"
      />
    </div>
  );
};

export const Basket = (props) => {
  const { name, assets, manager } = props;

  return (
    // {/* col-2 */}
    <div className="col-12 col-md-3 my-3 my-md-0 basket">
      <div className="d-flex ">
        <p className="list-card-title">Basket: </p>
        <h5 className="ml-2">{name}</h5>
      </div>

      <div className="d-flex">
        <p className="list-card-title">Assets:</p> {"  "}
        <p className="list-card-value">{assets?.join(", ")}</p>
      </div>

      <div className="d-flex">
        <p className="list-card-title">Manager:</p> {"  "}
        <p className="list-card-value">{manager}</p>
      </div>
    </div>
  );
};

export const BasketData = ({ type, title, value }) => {
  return (
    <div className="col-12 col-md-2  text-center">
      <p className="list-card-title">{title}</p>
      {type === "returns" ? (
        <p className="list-card-value percentage">
          {value ? `${value}%` : "-"}
        </p>
      ) : (
        <p className="list-card-value"> {value ? `₹ ${value}` : "-"}</p>
      )}
    </div>
  );
};

export default BasketCard;
