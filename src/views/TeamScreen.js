import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TitlePokemon from "../components/TitlePokemon";
import SeparatorComponent from "../components/SeparatorComponent";

export default function TeamScreen({ route, navigation }) {
  const [team, setTeam] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const getData = async () => {
    // await AsyncStorage.clear();
    try {
      const value = await AsyncStorage.getItem("Team");
      if (value !== null) {
        console.log("VALUEE", JSON.parse(value));
        setTeam(JSON.parse(value));
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    getData();
    setIsLoaded(true);
  }, []);

  const onRemovePress = async () => {
    try {
      await AsyncStorage.removeItem("Team");
      setTeam(null);
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  return (
    <MainContainer>
      <Title>Mon équipe</Title>
      <SeparatorComponent marginBottom={20} marginTop={20} />
      {isLoaded && team && (
        <>
          <TitlePokemon name={team.name} image={team?.sprites?.front_default} />
          <TouchableOpacity onPress={onRemovePress}>
            <Text style={{ color: "red" }}>REMOVE</Text>
          </TouchableOpacity>
        </>
      )}
    </MainContainer>
  );
}

const MainContainer = styled(SafeAreaView)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 28px;
`;
