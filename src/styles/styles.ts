import { StyleSheet } from "react-native";
import { colorsBW, colorsTropical } from "../utils/colors";
import { height, width } from "../utils/layouts";


const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    containerTarget: {
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#eee',
        height: height * 0.3,
        width: width * 0.6,

    },

    containerTarget1: {
        height: height * 0.46,
        width: width * 0.8,
        backgroundColor: '#eee',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
    },

    imageStyle: {
        height: height * 0.20,
        width: width * 0.43,
        borderRadius: 20,
        marginRight: 10,
    },

    texTitle: {
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: '#eee',
        marginTop: 20,
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    
    stylesButon: {
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        height: 50,
    },

    stylesTxtButon: {
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold' 
      },
    
})

export default styles;