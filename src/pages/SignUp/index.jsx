import { useState } from "react";
import {Container, Form, FormContent, FormBox, FormHeader} from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import logo from "../../assets/logo.svg";
export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate();
  async function handleSignUp() {
    if(!name || !email || !password) {
      return  alert('Preencha todos os campos');
    }

    await api.post('/users', {name, email, password}).then(( ) => {

      alert('Usuário cadastrado com sucesso');
      navigate("/")
    }).catch(err => {
        if (err.response){
          alert(err.response.data.message);
        } else {
          alert('Não foi possível cadastrar usuário');
        }
    })
  }

  return (
    <Container>
        <FormHeader>
          <img src={logo} alt="Food Explorer Logo" />
          <h1>food explorer</h1>
        </FormHeader>
      <Form>

  <FormContent>
        <FormBox>
          <label htmlFor="name">Seu nome</label>
          <Input placeholder="Nome" type="text"  onChange={e => setName(e.target.value)} />
        </FormBox>
        <FormBox>
        <label htmlFor="email">E-mail</label>
        <Input type="text" name="email" id="email" placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
        </FormBox>
        <FormBox>
        <label htmlFor="password">Senha</label>
        <Input placeholder="Senha" type="password"  onChange={e => setPassword(e.target.value)} />
        </FormBox>
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/" >
          Já tenho uma conta
        </Link>
  </FormContent>
      </Form>
    </Container>
  );
}
