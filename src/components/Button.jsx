const Button = (props) => {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      {props.title ? (
        <a href={props.link} className="Button">
          {props.title}
        </a>
      ) : (
        "Hola"
      )}
    </div>
  );
};

// if (props.title) retun null
// props.title ? componente link : null

export default Button;
