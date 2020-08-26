import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Row = (props) => {
    return (
        <View style={{...props.style,...styles.row}}>
            {props.children}
        </View>
    )
}

export default Row

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: props.justifyContentCenter? 'center'
    }
})
