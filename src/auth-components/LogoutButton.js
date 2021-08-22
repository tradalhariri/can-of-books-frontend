import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Button className="mr-2"  variant="danger" onClick={() => {
        logout({ returnTo: window.location.origin });
      }}>Log out</Button>
    // <button >Log out</button>
  );
}

export default LogoutButton;