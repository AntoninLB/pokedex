import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { searchPokemon } from "../api/searchPokemon";
import TitlePokemon from "../components/TitlePokemon";

export default function SearchScreen({ route, navigation }) {
  const [value, SetValue] = useState("");
  const [url, SetUrl] = useState("");
  const [isSearch, SetIsSearch] = useState(false);
  const [pokemons, setPokemon] = useState([]);

  const onChangeText = (text) => {
    SetValue(text);
  };

  const search = async () => {
    await searchPokemon(value.toLowerCase()).then((response) => {
      setPokemon(response);
      console.log("->", response);
      SetUrl(`https://pokeapi.co/api/v2/pokemon/${response.name}`);
      console.log("REPONSE POKEMON", response.sprites.front_default);
    });

    SetIsSearch(true);
  };

  console.log("URL", url);

  return (
    <SafeAreaView>
      <MainContainer>
        <Search
          onChangeText={onChangeText}
          value={value}
          placeholder="Recherche un pokémon"
          placeholderTextColor={"grey"}
        />
        <TouchableOpacity onPress={search}>
          <Text>Rechercher</Text>
        </TouchableOpacity>

        {isSearch && pokemons && (
          <TitlePokemon
            navigation={navigation}
            image={pokemons.sprites.front_default}
            url={url}
            name={pokemons.name}
          />
        )}

        {isSearch && <Text>etet</Text>}
      </MainContainer>
    </SafeAreaView>
  );
}

const Search = styled(TextInput)`
  margin-top: 50px;
  height: 40px;
  width: 250px;
  padding-left: 20px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  background-color: white;
  margin-bottom: 20px;
`;

const MainContainer = styled(View)`
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;
