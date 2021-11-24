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

export default function AnalysisName(props) {
  const displayNames = (props) => {
    const { weightList } = props;

    if (weightList !== undefined) {
      weightList.unixReviewTime;
      const timestemp = new Date(weightList.unixReviewTime * 1000);
      const formatted = timestemp.toUTCString();
      return (
        <View>
          <Text>
            {"\n"}
            Current weights for the "brand" feature and the "season feature" and
            the latest review time.
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {"\n"}
            {"\n"}
            weightForBrand : {weightList.weightForBrand.$numberDecimal}
            {"\n"}
            {"\n"}
            weightForSeason : {weightList.weightForSeason.$numberDecimal}
            {"\n"}
            {"\n"}
            unixReviewTime : {formatted}
          </Text>
        </View>
      );
    }
  };

  return <>{displayNames(props)}</>;
}
