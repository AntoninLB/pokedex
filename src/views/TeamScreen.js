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

  return (
    <SafeAreaView>
      <Text>TEAM</Text>

      {isLoaded && team && (
        <TitlePokemon name={team.name} image={team?.sprites?.front_default} />
      )}
    </SafeAreaView>
  );
}
