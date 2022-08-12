import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles/styles'
import { colorsPrimary, colorsTropical } from '../../utils/colors'
import CustomTextInput from '../../components/CustomTextInput'
import { useFormik } from 'formik'
import CustomButton from '../../components/CustomButton';
import { StackScreenProps } from '@react-navigation/stack'
import { AppStackParams } from '../../navigation/AppStackNavigation';
import { height, width } from '../../utils/layouts'

interface Props extends StackScreenProps<AppStackParams, 'LoginScreen'> { }

const RegisterScreen = ({ navigation }: Props) => {

    const { values, setFieldValue, errors, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            email: '',
            pass: '',
            repeatPass: '',
        },
        onSubmit: values => console.log('Values', values),
        // validationSchema: ,

    });

    return (
        <View style={{ ...styles.container, backgroundColor: colorsTropical.banana }} >
            <CustomButton
                colors={[ colorsPrimary.white, colorsPrimary.white  ]}
                onPress={ () => navigation.goBack() }
                styleView={{ position: 'absolute', top: height * 0.06, left: width * 0.05, width: 50, borderRadius: 100, ...styles.shadow }}
                iconName='caret-back-outline'
                iconColor={ colorsTropical.waterMelon }
            />

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

                <CustomTextInput
                    placeHolder='Repetir contraseña'
                    field='repeatPass'
                    saveValue={setFieldValue}
                    handleBlur={handleBlur}
                    touched={touched.pass}
                    error={errors.pass}
                    value={values.pass}
                />

                <CustomButton
                    name='Crear cuenta nueva'
                    colors={[colorsTropical.waterMelon, colorsTropical.waterMelon]}
                    onPress={handleSubmit}
                    styleText={styles.stylesTxtButon}
                    styleView={{ marginTop: 20, width: '70%' }}
                />


            </View>
        </View>
    )
}

export default RegisterScreen;

