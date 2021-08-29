







import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { dateFormat } from '../utils/utilsHelper';


const SingleUserItem = (props) => {

    const {name,email,location,registered,picture}=props.dataItem
   

    return (
        <Item
           userData={props.dataItem}
           name={name}
           email={email}
           location={location}
           registered={registered}
           picture={picture}

           currentIndex={props.index}
           onItemClicked={(index)=>props.onUserItemClick(index)}
        />
    )
}




const Item = (props) => (


    <TouchableOpacity onPress={()=>props.onItemClicked(props.currentIndex)}>
        <View style={styles.item}>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ height: 60, width: 60 }}
                        source={{ uri: `${props.picture.medium}` }}

                    />

                    <View style={{ flexDirection: "column", marginLeft: 5 }}>
                        <Text style={{ fontSize: 18 }}>{props.name.first} {props.name.last}</Text>
                        <Text style={{ fontSize: 12 }}>{props.email} </Text>
                        <Text style={{ fontSize: 14 }}>Country | {props.location.country}</Text>

                    </View>

                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", marginRight: 10 }}>

                    <Text style={{ color: "#727272", fontSize: 12 }}>{dateFormat(props.registered.date)}</Text>
                    <View style={{ width: 10 }}></View>
                    <FontAwesome5 name="chevron-right" size={14} color="#c2c2c2" />

                </View>


            </View>


        </View>
    </TouchableOpacity>
);




const styles = StyleSheet.create({
   

    item: {
        padding: 5,
    },
    title: {
        fontSize: 32,
    },
});



export default SingleUserItem
