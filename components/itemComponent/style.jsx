import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itemContainer:{
        display: 'flex',
        alignContent:'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width:250,
        height:300,
        backgroundColor:'#52FFEE' //צבע עבור הבחנה בגודל האובייקט
    },
    itemImage:{
        width:200,
        height:200,
        resizeMode:'cover',
        alignSelf:'center',
        opacity: 1,
        borderRadius:15
    },
    shortDescContainer:{
        opacity: 0
    },
    itemName: {
        textAlign:'center'
    },
    itemPrice: {
        textAlign:'center'
    },
    purchaseButton: {
        backgroundColor: '#457b9d',
        height:25,
        width:150,
        borderRadius:20,
        alignSelf:'center',
        zIndex:2,
        display:'flex',
        justifyContent:'center',
    },
    buttonText: {
        textAlign:'center',
        fontSize:12,
        justifyContent:'center',
        color: 'black',
        zIndex:1
    }


});
export default styles;