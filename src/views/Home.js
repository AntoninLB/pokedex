import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";

import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import { getPokemon } from "../api/getPokemons";

import TitlePokemon from "../components/TitlePokemon";

export default function Home({ navigation }) {
  const [listPokemons, setListPokemon] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    !isLoading && loadPokemon(nextPage);
  }, []);

  loadPokemon = (url) => {
    setIsLoading(true);
    getPokemon(url).then((datas) => {
      setTimeout(() => {
        setListPokemon([...listPokemons, ...datas.results]);
        setNextPage(datas.next);
        setIsLoading(false);
      }, 3000);
    });
  };

  const renderItem = useCallback(({ item }) => {
    // const onPokemonPress = () => {
    //   navigation.navigate("Details", { data });
    // };
    return (
      <TitlePokemon navigation={navigation} name={item.name} url={item.url} />
    );
  }, []);

  const keyExtractor = useCallback((item) => item.name);

  return (
    <View style={styles.container}>
      <FlatList
        data={listPokemons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          loadPokemon(nextPage);
        }}
        numColumns={2}
        columnWrapperStyle={styles.listColumn}
        onRefresh={loadPokemon}
        refreshing={isLoading}
        contentContainerStyle={styles.pokemonList}
        ListFooterComponent={() =>
          isLoading && (
            <View style={styles.loader}>
              <ActivityIndicator size={"large"} color={"blue"} />
            </View>
          )
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
  },
  pokemonList: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
  },
  loader: {
    marginTop: "30%",
    height: "20%",
  },
  listColumn: {
    justifyContent: "space-around",
  },
});
