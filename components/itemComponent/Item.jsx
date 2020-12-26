import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';


const Item = (props) => {


    return (
        <View style={styles.itemContainer}>
          <Image source={require('../../assets/1/2.png')}
          style={styles.itemImage}
          />
          <View style={styles.shortDescContainer}>
              <Text style={styles.shortDesc}>{props.shortDesc}</Text>
          </View>
          <Text style={styles.itemName}>{props.itemName}</Text>
          <Pressable style={styles.purchaseButton}>
          Buy Now
          </Pressable>
          <Text style={styles.itemPrice}>{props.itemPrice}</Text>
        </View>
      );
}
export default Item;