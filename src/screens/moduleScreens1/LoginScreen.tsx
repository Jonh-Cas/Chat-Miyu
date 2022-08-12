import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/styles'
import { colorsTropical } from '../../utils/colors'
import CustomTextInput from '../../components/CustomTextInput'
import { useFormik } from 'formik'
import CustomButton from '../../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack'
import { AppStackParams } from '../../navigation/AppStackNavigation';

interface Props extends StackScreenProps<AppStackParams, 'LoginScreen'>{}


const LoginScreen = ({ navigation }: Props) => {

    const { values, setFieldValue, errors, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            email: '',
            pass: '',
        },
        onSubmit: values => console.log('Values', values),
        // validationSchema: ,

    });

    return (
        <View style={{ ...styles.container, backgroundColor: colorsTropical.waterMelon }} >
            <View style={{ ...styles.shadow, ...styles.containerTarget1 }} >
                <Text style={styles.texTitle}>Chat Miyu</Text>
                
                <CustomTextInput
                    placeHolder='Usuario'
                    field='email'
                    saveValue={setFieldValue}
                    handleBlur={handleBlur}
                    touched={touched.email}
                    error={errors.email}
                    value={values.email}
                />

                <CustomTextInput
                    placeHolder='Contraseña'
                    field='pass'
                    saveValue={setFieldValue}
                    handleBlur={handleBlur}
                    touched={touched.pass}
                    error={errors.pass}
                    value={values.pass}
                />

                <CustomButton
                    name='Iniciar Sesión'
                    colors={[colorsTropical.waterMelon, colorsTropical.waterMelon]}
                    onPress={handleSubmit}
                    styleText={styles.stylesTxtButon}
                    styleView={{ marginTop: 20, width: '70%' }}
                />

                <CustomButton
                    name='Olvidaste tu contraseña'
                    colors={['transparent', 'transparent']}
                    onPress={() => console.log('Press..')}
                    styleText={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}
                />

                <CustomButton
                    name='Crear cuenta nueva'
                    colors={['transparent', 'transparent']}
                    onPress={() => navigation.navigate('SplashScreen')}
                    styleText={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}
                />

            </View>
        </View>
    )
}

export default LoginScreen;

