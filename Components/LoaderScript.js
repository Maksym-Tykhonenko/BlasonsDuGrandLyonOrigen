import React, {useEffect, useRef} from 'react';
import {
  View,
  Animated,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';

const LoaderScript = ({onEnd}) => {
  const [louderIsEnded, setLouderIsEnded] = useState(false);
  const appearingAnim = useRef(new Animated.Value(0)).current;
  const appearingSecondAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(appearingAnim, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(appearingSecondAnim, {
        toValue: 1,
        duration: 7500,
        useNativeDriver: true,
      }).start();
      //setLouderIsEnded(true);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLouderIsEnded(true);
    }, 8000);
  }, []);

  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        //backgroundColor: 'rgba(0,0,0)',
      }}>
      <Animated.Image
        source={require('../assets/apgrDiz/Loader1.png')}
        style={{
          //...props.style,
          opacity: appearingAnim,
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      />
      <Animated.Image
        source={require('../assets/apgrDiz/Loader2.png')}
        style={{
          //...props.style,
          opacity: appearingSecondAnim,
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  loaderContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderText: {
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 60,
    color: '#F4E3C7',
    marginBottom: 10,
  },
  logoImage: {
    alignSelf: 'center',
    marginBottom: -60,
    borderRadius: 200,
  },
});

export default LoaderScript;
