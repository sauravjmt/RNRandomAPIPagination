

import React,{useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { dateFormat, dateFormatFrom, timeSince } from '../utils/utilsHelper'







const DetailScreen = ({route,navigation}) => {


    const allUser= useSelector((state)=>state.user)

    const {userId}=route.params

    const userObject=allUser.user[userId]
    const {first,last}=userObject.name
    const {date,age}=userObject.dob
    useEffect(() => {
        navigation.setOptions({
          title:`${first} ${last}`,
        });
      }, [navigation]);
     
    

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image style={styles.image}
                    source={{ uri:userObject.picture.large}}

                />

                 <View style={styles.diamond}>
                     <Text  style={{fontWeight:"bold", transform:[{rotate:"-45deg"}]}}>{userObject.dob.age}</Text>
                 </View>

            </View>
            
            


            <View style={{ marginTop: 20, marginLeft: "10%" }}>

                <View
                    style={{
                        height: 2,
                        width: "90%",
                        backgroundColor: "#000",


                    }}
                />


                <Text> Email : {userObject.email}</Text>
                <Text> Date Joined : {dateFormat(userObject.registered.date)}</Text>
                <Text> DOB : {dateFormatFrom(date)}</Text>


                 <View style={{marginTop:20}}>
                     <Text style={{fontSize:16}} >LOCATION</Text>
                 </View>
                <View
                    style={{
                        height: 2,
                        width: "90%",
                        backgroundColor: "#000",


                    }}
                />

                <Text> city : {userObject.location.city}</Text>
                <Text> state : {userObject.location.state}</Text>
                <Text> country : {userObject.location.country}</Text>
                <Text> pincode : {userObject.location.postcode}</Text>

            </View>
        </View>
    )
}

export default DetailScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 20


    },
    image: { height: 200, width: 200 },
    diamond: {

        flex:1,
        position:"absolute",
        width: 50,
        height: 50,
        backgroundColor: "orange",
        transform: [{ rotate: "45deg" }],
        justifyContent:'center',
        alignItems:"center",
        bottom:0,
        right:"20%"    
      },





});