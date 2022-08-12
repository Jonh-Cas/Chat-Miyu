import React from 'react'
import { Pressable, StyleProp, Text, View, ViewProps, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    colors: string[];
    onPress: () => void;
    name?: string;
    iconName?: string;
    iconColor?: string; 
    styleText?: StyleProp<TextStyle>
    styleView?: StyleProp<ViewStyle>
}

const CustomButton = ({ name, colors, onPress, styleText, styleView, iconName, iconColor }: Props) => {
    return (
        <LinearGradient
            colors={colors}
            style={{ ...styles.stylesButon, ...styleView as any }}
        >
            <TouchableOpacity
                onPress={onPress}
                style={{ flexDirection: 'row', }}
            >
                {
                    iconName &&
                    <Icon
                        name={iconName}
                        color={ iconColor }
                        size={30}
                    />
                }

                {
                    name &&
                    <Text style={{ ...styleText as any }} >{name}</Text>
                }
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default CustomButton;

const styles = StyleSheet.create({

    stylesButon: {
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 50,
    },

})