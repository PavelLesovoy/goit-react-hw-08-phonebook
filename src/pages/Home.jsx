import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container
      component="main"
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>
        Welcome to the contact manager client application or simply Phonebook
      </h1>
      <p>
        Handy app to save all your contacts in one place.Sign up and add your
        contacts so you don't lose anyone!
      </p>
      <Button
        sx={{
          marginTop: 2,
        }}
        variant="contained"
        component={Link}
        to="/contacts"
      >
        Start
      </Button>
    </Container>
  );
};
