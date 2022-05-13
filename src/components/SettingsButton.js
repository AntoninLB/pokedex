import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import SeparatorComponent from "./SeparatorComponent";

export default function SettingsButton({ title }) {
  return (
    <Container>
      <MainButton>
        <Title>{title}</Title>
      </MainButton>

      <SeparatorComponent />
    </Container>
  );
}

const Title = styled(Text)`
  font-size: 24px;
`;
const Container = styled(View)`
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
`;

const MainButton = styled(TouchableOpacity)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
