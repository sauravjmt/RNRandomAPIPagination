

import React from 'react'
import { View,ActivityIndicator } from 'react-native'



const PaginationLoader = (props) => {

    return (
        <View style={{ height: 40 }}>
            {props.isPullDownRefresh && <ActivityIndicator
                animating={props.isPullDownRefresh}
                 color="red"
                size="large"
            />}
        </View>
    )

}

export default PaginationLoader