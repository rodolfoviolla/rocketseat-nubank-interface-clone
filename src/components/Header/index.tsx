import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import imgLogo from '../../assets/Nubank_Logo.png';

import { Container, Top, Logo, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={imgLogo} />
        <Title>Rodolfo</Title>
      </Top>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}