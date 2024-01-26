import { Text, Title } from 'react-native-paper';


export const Heading=({name,size=18}:any)=>{
    return <Text style={{fontFamily:'Roboto-Thin',fontSize:size}}>{name}</Text>
}