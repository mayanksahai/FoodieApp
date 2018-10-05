import React ,{Component} from "react";
import {StyleSheet,View,Text} from "react-native";

export default class Favourites extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    My Favourite joints
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});