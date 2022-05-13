import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { searchPokemon } from "../api/searchPokemon";
import TitlePokemon from "../components/TitlePokemon";
import SettingsButton from "../components/SettingsButton";
import { Camera } from "expo-camera";

export default function SettingsScreen({ route, navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const settings = [
    {
      id: 1,
      title: "Mes informations",
      onPress: () => console.log("default onPress"),
    },
    {
      id: 2,
      title: "Mes pokémons",
      onPress: () => console.log("default onPress"),
    },
    {
      id: 3,
      title: "Mon équipe",
      onPress: () => console.log("default onPress"),
    },
    {
      id: 4,
      title: "Caméra",
      onPress: async () => {},
    },

    {
      id: 5,
      title: "Déconnexion",
      onPress: () => console.log("default onPress"),
    },
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const keyExtractor = useCallback((item) => item.id);

  const renderItem = useCallback(({ item }) => {
    return <SettingsButton onPress={() => item.onPress()} title={item.title} />;
  }, []);

  return (
    <Container>
      <List
        data={settings}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      {hasPermission === "granted" && <Camera />}
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
