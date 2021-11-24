import React, { useState, useEffect, useCallback } from "react";
import { TouchableOpacity, View, Dimensions, Text } from "react-native";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import { useFocusEffect } from "@react-navigation/native";
import AnalysisName from "./AnalysisName";

var { width, height } = Dimensions.get("window");

const Analysis = (props) => {
  const { item } = props;
  const [weightList, setWeightList] = useState();
  const baseURLS = "https://bigdatabasedbackendeshop.herokuapp.com/api/v1/";

  useFocusEffect(
    useCallback(() => {
      getWeightList();
      return () => {
        setWeightList();
      };
    }, [])
  );

  const getWeightList = async () => {
    await axios
      .get(`${baseURLS}weights/`)
      .then((x) => {
        setWeightList(x.data[0]);
        //console.log(x.data[0]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <View style={{ width: width }}>
      <AnalysisName weightList={weightList} />
    </View>
  );
};

export default Analysis;
