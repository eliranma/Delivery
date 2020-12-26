import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './style';


const Item = (props) => {


    return (
        <View style={styles.itemContainer}>
          <Pressable onPress={()=>{
            alert('clicked on Image - to open addons option')
          }}>
          <Image source={require('../../assets/1/2.png')}
          style={styles.itemImage}
          />
          </Pressable>
          <View style={styles.shortDescContainer}>
              <Text style={styles.shortDesc}>{props.shortDesc}</Text>
          </View>
          <Text style={styles.itemName}>{props.itemName}</Text>
          <Pressable style={styles.purchaseButton}
                onPress={()=>{alert('clicked on buy now - to add the product to cart')}}>
          <Text style={styles.buttonText}>Buy now</Text>
          </Pressable>
          <Text style={styles.itemPrice}>{props.itemPrice}</Text>
        </View>
      );
}
export default Item;