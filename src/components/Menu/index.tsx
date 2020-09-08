import React from 'react';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode-generator';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, 
  Code, 
  Nav, 
  NavItem, 
  NavText, 
  SignOutButton, 
  SignOutButtonText,
} from './styles';

interface MenuProps {
  translateY: Animated.Value;
}

const Menu: React.FC<MenuProps> = ({ translateY }) => {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code>
        <QRCode
          value="https://github.com/rodolfoviolla"
          size={80}
          fgColor="#fff"
          bgColor="#8b10ae"
        />
      </Code>

      <Nav>
        <NavItem>
          <MaterialIcons name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        
        <NavItem>
          <MaterialIcons name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>

        <NavItem>
          <MaterialIcons name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}

export default Menu;