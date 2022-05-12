import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { searchPokemon } from "../api/searchPokemon";
import TitlePokemon from "../components/TitlePokemon";
import SettingsButton from "../components/SettingsButton";

export default function SettingsScreen({ route, navigation }) {
  const settings = [
    {
      id: 1,
      title: "Mes informations",
    },
    {
      id: 2,
      title: "Mes pokémons",
    },
    {
      id: 3,
      title: "Mon équipe",
    },
    {
      id: 3,
      title: "Déconnexion",
    },
  ];

  const keyExtractor = useCallback((item) => item.id);

  const renderItem = useCallback(({ item }) => {
    return <SettingsButton title={item.title} />;
  }, []);

  return (
    <Container>
      <List
        data={settings}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 1000px;
`;

const List = styled(FlatList)`
  margin-top: 50%;
`;
