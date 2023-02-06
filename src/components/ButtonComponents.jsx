const ButtonComponent = (props) => {
  return (
    <>
      <button
        style={{
          backgroundColor: props.backgroundColor,
          width: props.width,
          border: props.border,
          marginBottom: props.marginBottom + "em",
          marginTop: props.marginTop + "em",
          borderRadius: props.borderRadius + "em",


        }}
      >
        {props.title}
      </button>
    </>
  );
};

export default ButtonComponent;
