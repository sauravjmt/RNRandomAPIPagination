
import React, {useState,useEffect} from 'react'

import NetInfo from "@react-native-community/netinfo";




export function useNetInfo(){
    const [netInfo, setNetStatus] = useState(false)

    handleConnectivityChange = netInfoState => {
        if (netInfoState.type == 'none') {
          setNetStatus(false);
        } else {
          setNetStatus(true);
        }
      };



         useEffect(() => {

            NetInfo.fetch().then(handleConnectivityChange);
          const _unsubscribe=  NetInfo.addEventListener(handleConnectivityChange);
             
             return () => {
                 _unsubscribe()
             }
         }, [])



         return netInfo;

}