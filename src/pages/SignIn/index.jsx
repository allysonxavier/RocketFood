import { useState } from "react";
import {Container, Form, FormContent, FormFooter, FormHeader} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import logo from "../../assets/logo.svg";
export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

  return (
    <Container>
      <Form>
          <FormHeader>
              <img src={logo} alt="Food Explorer Logo" />
              <h1>food explorer</h1>
          </FormHeader>

          <FormContent>
              <FormFooter>
              <label htmlFor="email">E-mail</label>
              <Input placeholder="E-mail" type="text"  onChange={e => setEmail(e.target.value)} />
              </FormFooter>
              <FormFooter>
              <label htmlFor="password">Senha</label>
              <Input placeholder="Senha" type="password"  onChange={e => setPassword(e.target.value)} />
              </FormFooter>
              <Button title="Entrar" onClick={handleSignIn} />
              <Link to="/register">Criar Conta</Link>
          </FormContent>

      </Form>
    </Container>
  );
}
