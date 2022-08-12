import { Image, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../../styles/styles';
import { colorsTropical } from '../../utils/colors';
// import useTimeout from '../../hooks/useTimeout';
import { AppStackParams } from '../../navigation/AppStackNavigation';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<AppStackParams, 'SplashScreen'>{}

const time = 3000;

const SplashScreen = ({ navigation }: Props) => {
    
    const handleFunc = () => {
        navigation.replace('LoginScreen')
    }
    
    // const { enable } = useTimeout({ time, handleFunc })
    
    // useEffect(() => {
    //     enable()
    // }, [])
    


    return (
        <View style={{...styles.container, backgroundColor: colorsTropical.electricBlue}} >
            <View style={{  ...styles.shadow, ...styles.containerTarget }} >
                <Image
                    source={require('../../assets/splashScreen/chatMiyuLogo1.jpg')}
                    style={styles.imageStyle}
                />
                <Text style={styles.texTitle}>Chat Miyu</Text>
            </View>
        </View>
    )
}

export default SplashScreen;

