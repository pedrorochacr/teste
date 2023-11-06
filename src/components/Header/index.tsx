import React from 'react';
import { LogoImage, Container } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoImage
        style={{ resizeMode: 'contain' }}
        source={require('../../assets/logos/logoAll.png')}
      />
    </Container>
  );
};

export default Header;
