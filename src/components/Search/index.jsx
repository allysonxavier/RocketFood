import { Container } from "./styles";

const Input = ({ icon: Icon, ...rest }) => {
    return (
        <Container>
            {Icon && <Icon size={24} />}
            <input {...rest} />
        </Container>
    )
}

export default Input;