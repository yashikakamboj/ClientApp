import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';

import Colors from '../../constants/colors';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import images from '../../images';
import loginStyles from './loginComponentsStyles';
import Button from '../../components/button';

const SplashScreen = ({navigation}) => {


    return (
      <View style={loginStyles.container}>
          <StatusBar backgroundColor='#000' barStyle="light-content"/>
        <View style={loginStyles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="2000"
                source={images.logo}
                style={loginStyles.logo}
                resizeMode="stretch"
            />
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <Text style={[loginStyles.text_header,{alignSelf:'center'}]}>Welcome to SmartBox</Text>
            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
             Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Text>
 
                <Button style={loginStyles.submit} onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={{color: '#fff', fontSize:17}}>Sign In</Text>     
                </Button>

            <TouchableOpacity style={[loginStyles.greyButton,{marginTop:-15}]}
                onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={{color: '#fff', fontSize:17}}>Sign Up</Text>
            </TouchableOpacity>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  footer: {
      flex: 1,
      backgroundColor: '#000',
      paddingHorizontal: 30,
      paddingVertical: 30,
      justifyContent: 'center',
      alignItems: 'center',
  },
  text: {
      color: 'white',
      textAlign: 'center', 
  },
  
});