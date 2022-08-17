import { styles } from './style';
import { View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  name: string;
  onRemove: () => void;
  onCheck: () => void;
  status: boolean;
  remove: boolean;
};

export function Task({name, onRemove, onCheck, status, remove}: Props){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={onCheck}>
        <FontAwesome5 name="circle" size={20} color="#4EA8DE" />
      </TouchableOpacity>
      <Text style={styles.taskText}>{name}</Text>
      <TouchableOpacity style={styles.buttonRemove} 
      onPress={onRemove}
      >
        <FontAwesome5 name="trash-alt" size={16} color={remove == false ? 'gray' : 'red'} />
      </TouchableOpacity>
    </View>
  )
}