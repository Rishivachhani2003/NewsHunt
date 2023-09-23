import React, { useEffect, useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Image,
  Statusbar,
} from "react-native";
import themeContext from "../config/themeContext";

import Card from "../components/Card";
import newAPI from "../apis/News";

const Health = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [newstech, setNewsTech] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  function getNewsFromAPI() {
    newAPI
      .get(
        "top-headlines?country=us&category=health&apiKey=3e76e471a95d4374b3ac14ff2a558aec"
      )
      .then(async function (response) {
        setNewsTech(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }

  if (!newstech) {
    return null;
  }

  const theme = useContext(themeContext);

  return (
    <ScrollView style={{ backgroundColor: theme.backColor }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#DA3349" />
      ) : (
        <FlatList
          data={newstech.articles}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => <Card item={item} />}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  midText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
  },
});

export default Health;
