import { KeyboardTypeOptions } from "react-native";
import { fieldProps } from '../interfaces/menuInputInterfaces';

interface textInputProps {
    keyboardType:  KeyboardTypeOptions | undefined,
    maxLeght:  number | undefined,
    icon: string;
}


 const menuInput = ( field: fieldProps  )  => {
     
    let textInputValue: textInputProps = {

        keyboardType: undefined,
        maxLeght: undefined,
        icon: '',
    }

    switch (field) {

        case 'email':
            textInputValue = {
                keyboardType: 'email-address',
                maxLeght: 50,
                icon: 'mail-outline'
            };
            break;

        case 'phone':
            textInputValue = {
                keyboardType: 'phone-pad',
                maxLeght: 10,
                icon: 'phone-portrait-outline'
            };
            break;
        
            case 'pass':
            case 'repeatPass':
            textInputValue = {
                icon: 'key-outline',
                keyboardType: 'default',
                maxLeght: 50,
            };
            break;

            case 'name':
            case 'secondName':
            textInputValue = {
                icon: 'person',
                keyboardType: 'default',
                maxLeght: 30,
            };
            break;

            case 'lastName1':
            case 'lastName2':
            textInputValue = {
                icon: 'person',
                keyboardType: 'default',
                maxLeght: 30,
            };
            break;
    
        default:
            break;
    }

    return textInputValue;

}

export default menuInput;
