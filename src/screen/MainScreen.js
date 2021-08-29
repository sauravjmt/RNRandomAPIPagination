




import React, { useEffect } from 'react'
import {View, FlatList,StyleSheet, SafeAreaView, StatusBar,} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomUser, rowFilterData } from '../store/actions/RandomUserAction';
import Loader from '../utils/Loader';
import { useNetInfo } from '../utils/NetInfoHooks';
import PaginationLoader from '../utils/PaginationLoader';
import SingleUserItem from './SingleUserItem';



const MainScreen = ({ navigation }) => {
    const allUser = useSelector((state) => state.user)
    const netInfoState = useNetInfo();
    const dispatch = useDispatch()

    useEffect(() => {
        if (netInfoState) {
            dispatch(fetchRandomUser(false))
        }

    }, [dispatch, netInfoState])


    function handleOnRefresh() {
        const { total, pagination } = allUser
        const { page } = pagination
        if (total > page) {
            if (netInfoState) {
                let rowFilterUpdate = { page: page + 1 }
                dispatch(rowFilterData(rowFilterUpdate))
                dispatch(fetchRandomUser(true))
            }

        }
    }



    const renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#C2C2C2",


                }}
            />
        );
    };
   
  


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Loader loading={allUser.loading} />
            <FlatList
                data={allUser.user}
                renderItem={({ item, index }) => 
                    <SingleUserItem
                        dataItem={item}
                        index={index}
                        onUserItemClick={(clickedIndex) => navigation.navigate("Detail", { userId: clickedIndex })}

                    />
                }
                keyExtractor={item => item.login.username}
                ItemSeparatorComponent={renderSeparator}
                onEndReached={() => handleOnRefresh()}
                onEndReachedThreshold={0.03}
                ListFooterComponent={<PaginationLoader isPullDownRefresh={allUser.isLoadMore} />}
            />

        </SafeAreaView>

    )
}

export default MainScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },

   
});



