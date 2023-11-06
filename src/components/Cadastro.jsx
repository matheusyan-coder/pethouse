import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Cadastro() {
  return (


          

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Endereço de email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          Nós nunca compartilharemos seu email com ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar de mim" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Cadastro;