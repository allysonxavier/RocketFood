import { Container } from "./styles";
const  Input = ({ icon: Icon, placeholder, value, onChange,...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={24} />}
      <input placeholder={placeholder}
             value={value}
             onChange={onChange}
             {...rest}
      />
    </Container>
  );
}

export default Input;