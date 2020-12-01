import React, { useRef, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableWithoutFeedback, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import commonStyles from '../commonStyles'

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2500,
          useNativeDriver: true,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 
        style={{
          ...props.style,
          opacity: fadeAnim,         
        }}
      >
        {props.children}
      </Animated.View>
    );
  }

export default ({navigation}) => {
    return (
        <SafeAreaView style={commonStyles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Space X App</Text>
                <Text style={styles.subtitle}>Imersão astronáutica!</Text>
            </View>
            <View style={styles.content}>
                <FadeInView style={styles.image}>
                <View>
                    <Image source={require('../../assets/imgs/rocket.png')} style={styles.imageSize}></Image>
                </View>
                </FadeInView>
                <View style={styles.footer}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('LaunchesListV2')}>
                        <View>
                            <Text style={[styles.subtitle, { textAlign: 'center' }]}>Clique aqui e embarque nessa emoção!</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 7,
    },
    title: {
        fontSize: 50,
        fontFamily: commonStyles.fontFamily,
        color: '#FFF'
    },
    image: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imageSize: {
        width: 390,
        height: 390
    },
    footer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
    }
})