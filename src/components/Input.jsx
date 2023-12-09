const Input = ({ type, placeholder, value, onChange, style, ...rest }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      {...rest}
    />
  );
};

export default Input;
