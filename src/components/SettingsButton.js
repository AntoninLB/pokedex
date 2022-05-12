import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export default function SettingsButton({ title }) {
  return (
    <Container>
      <MainButton>
        <Title>{title}</Title>
      </MainButton>
      <Separator></Separator>
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

const Separator = styled(View)`
  margin-top: 5px;
  border: 1px;
  opacity: 0.1;
  width: 100%;
`;
