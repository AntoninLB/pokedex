import { StyleSheet, View, Button } from "react-native";
import styled from "styled-components";

export default function SeparatorComponent({ marginBottom, marginTop }) {
  return (
    <Separator
      style={{ marginBottom: marginBottom, marginTop: marginTop }}
    ></Separator>
  );
}

const Separator = styled(View)`
  margin-top: 5px;
  border: 1px;
  opacity: 0.1;
  width: 100%;
`;
