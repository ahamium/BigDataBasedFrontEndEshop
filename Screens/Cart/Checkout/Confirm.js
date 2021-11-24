import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";

import Toast from "react-native-toast-message";
import axios from "axios";
import baseURL from "../../../assets/common/baseUrl";

var { width, height } = Dimensions.get("window");

const Confirm = (props) => {
  const baseURLS = "https://bigdatabasedbackendeshop.herokuapp.com/api/v1/";
  const finalOrder = props.route.params;

  const confirmOrder = () => {
    const order = finalOrder.orderP.order;
    console.log("taannn??");
    console.log(order);

    //const mongoose = require("mongoose");
    //mongoose.Types.ObjectId('4edd40c86762e0fb12000003');

    //console.log(mongoose.Types.ObjectId(order.orderItems[0].product));
    //order.orderItems[0].product.richDescription = "ddd";
    //console.log(order.orderItems[0].product.richDescription);

    axios
      .post(`${baseURLS}orders`, order)
      .then((res) => {
        console.log(res.status);
        if (res.status == 200 || res.status == 201) {
          //console.log("taa222??");
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Order Completed",
            text2: "",
          });
          setTimeout(() => {
            props.clearCart();
            props.navigation.navigate("Cart");
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("daa??");
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Something went wrong",
          text2: "Please try again",
        });
      });

    /*
    setTimeout(() => {
      props.clearCart();
      props.navigation.navigate("Cart");
    }, 500);
    */
  };

  //for data test
  const dd = () => {
    console.log("---------------------------------------------------------");
    console.log(finalOrder);
  };

  return (
    /*<ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title={"dd"} onPress={dd} />
        </View>
      </View>
    </ScrollView>*/
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Confirm Order</Text>
        {props.route.params ? (
          <View style={{ borderWidth: 1, borderColor: "orange" }}>
            <Text style={styles.title}>Shipping to:</Text>
            <View style={{ padding: 8 }}>
              <Text>Address: {finalOrder.orderP.order.shippingAddress1}</Text>
              <Text>Address2: {finalOrder.orderP.order.shippingAddress2}</Text>
              <Text>City: {finalOrder.orderP.order.city}</Text>
              <Text>Zip Code: {finalOrder.orderP.order.zip}</Text>
              <Text>Country: {finalOrder.orderP.order.country}</Text>
            </View>
            <Text style={styles.title}>Items:</Text>
            {finalOrder.orderP.order.orderItems.map((x) => {
              return (
                <ListItem style={styles.listItem} key={x.product.name} avatar>
                  <Left>
                    <Thumbnail source={{ uri: x.product.image }} />
                  </Left>
                  <Body style={styles.body}>
                    <Left>
                      <Text>{x.product.name}</Text>
                    </Left>
                    <Right>
                      <Text>$ {x.product.price}</Text>
                    </Right>
                  </Body>
                </ListItem>
              );
            })}
          </View>
        ) : null}
        <View style={{ alignItems: "center", margin: 20 }}>
          <Button title={"Place order"} onPress={confirmOrder} />
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  title: {
    alignSelf: "center",
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default connect(null, mapDispatchToProps)(Confirm);

/*


var { width, height } = Dimensions.get('window')


const Confirm = (props) => {

    const finalOrder = props.route.params;

    const confirmOrder = () => {

        const order = finalOrder.order.order;

        axios
        .post(`${baseURL}orders`, order)
        .then((res) => {
            if (res.status == 200 || res.status == 201) {
                Toast.show({
                    topOffset: 60,
                    type: "success",
                    text1: "Order Completed",
                    text2: "",
                })
                setTimeout(() => {
                    props.clearCart();
                    props.navigation.navigate("Cart")
                }, 500)
            }
        })
        .catch((error) => {
            Toast.show({
                topOffset: 60,
                type: "error",
                text1: "Something went wrong",
                text2: "Please try again",
            })
        })

        
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold'}}>
                    Confirm Order
                </Text>
                {props.route.params ? 
                <View style={{ borderWidth: 1, borderColor: 'orange'}}>
                    <Text style={styles.title}>Shipping to:</Text>
                    <View style={{ padding: 8 }}>
                        <Text>Address: {finalOrder.order.order.shippingAddress1}</Text>
                        <Text>Address2: {finalOrder.order.order.shippingAddress2}</Text>
                        <Text>City: {finalOrder.order.order.city}</Text>
                        <Text>Zip Code: {finalOrder.order.order.zip}</Text>
                        <Text>Country: {finalOrder.order.order.country}</Text>
                    </View>
                    <Text style={styles.title}>Items:</Text>
                    {finalOrder.order.order.orderItems.map((x) => {
                        return (
                            <ListItem
                                style={styles.listItem}
                                key={x.product.name}
                                avatar
                            >
                                <Left>
                                    <Thumbnail source={{ uri: x.product.image}}/>
                                </Left>
                                <Body style={styles.body}>
                                    <Left>
                                        <Text>{x.product.name}</Text>
                                    </Left>
                                    <Right>
                                        <Text>$ {x.product.price}</Text>
                                    </Right>
                                </Body>
                            </ListItem>
                        )
                    })}
                </View>    
           : null }
           <View style={{ alignItems: 'center', margin: 20 }}>
                <Button title={'Place order'} onPress={confirmOrder}/>
           </View>
            </View>
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearCart: () => dispatch(actions.clearCart())
    }
}

const styles = StyleSheet.create({
    container: {
        height: height,
        padding: 8,
        alignContent: 'center',
        backgroundColor: 'white',
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        
    },
    title: {
        alignSelf: 'center', 
        margin: 8, 
        fontSize: 16,
        fontWeight: 'bold' 
    },
    listItem: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        width: width / 1.2
    },
    body: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default connect(null, mapDispatchToProps)(Confirm);
*/
