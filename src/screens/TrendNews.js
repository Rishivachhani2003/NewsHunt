import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import TopNewsCard from "../components/TopNewsCard";
import newAPI from "../apis/News";

const TrendNews = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [newstech, setNewsTech] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

 
  function getNewsFromAPI() {
    newAPI
      .get(
        "top-headlines?country=in&category=general&apiKey=3e76e471a95d4374b3ac14ff2a558aec"
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

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator visible={true} />
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={newstech.articles}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => <TopNewsCard item={item} />}
        />
      )}
    </ScrollView>
  );
};

export default TrendNews;
