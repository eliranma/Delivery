import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width:'80%'
    },
    itemImage:{
        width:200,
        height:200,
        resizeMode:'cover',
        alignSelf:'center',
        opacity: 1
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
        textAlign:'center',
        fontSize:10,
        backgroundColor: '#52FFEE'
    }

});
export default styles;