import { Container } from "./styles";

const Button = ({ title, icon, ...rest }) => {
    return (
        <Container type="button" {...rest}>
            {icon && <img src={icon} alt={title} />}
            {title}
        </Container>
    );
}

export default Button;