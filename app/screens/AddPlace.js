import React ,{Component} from "react";
import {StyleSheet,View,Text} from "react-native";

export default class AddPlace extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    Add your new experience
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