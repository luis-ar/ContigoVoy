import { useAuth } from '@/context/authContext';
import { Navbar } from '@nextui-org/react';
import React from 'react';
import PrivateNavbar from './navbar/privateNavbar';
import PublicNavbar from './navbar/publicNavbar';

const ENavbar: React.FC = () => {
  const { token } = useAuth();  // Accedemos al estado de autenticación

  return (
    <Navbar
      isBordered
      isBlurred={false}
      className="bg-white h-16 sm:h-20 fixed w-full z-50 flex justify-between items-center px-4 backdrop-blur-md"
      maxWidth="2xl"
    >
      {token ? <PrivateNavbar /> : <PublicNavbar />}
    </Navbar>
  );
};

export default ENavbar;
