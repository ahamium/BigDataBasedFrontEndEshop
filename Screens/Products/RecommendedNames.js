import React, { useState, useEffect, useCallback } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { Left, Right, Container, H1, H2, H3, H4 } from "native-base";

export default function RecommendedNames(props) {
  //console.log(props.recommendedItemList[0]);

  const displayNames = (props) => {
    const { recommendedItemList } = props;

    if (recommendedItemList !== undefined) {
      return (
        <Text>
          {recommendedItemList[0]}, {recommendedItemList[1]}
        </Text>
      );
      /*
      return recommendedItemList.map((name) => {
        console.log(name);
        <Text
          style={{
            marginBottom: 80,
            padding: 5,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {name}
        </Text>;
      });
      */
    }
  };

  return <>{displayNames(props)}</>;
}
