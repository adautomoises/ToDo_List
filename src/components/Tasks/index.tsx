import { styles } from './style';
import { View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  onRemove: () => void;
  onCheck: () => void;
};

export function Task({onRemove, onCheck}: Props){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={onCheck}>
        <FontAwesome5 name="circle" size={20} color="#4EA8DE" />
      </TouchableOpacity>
      <Text style={styles.taskText}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
        <FontAwesome5 name="trash-alt" size={16} color="gray" />
      </TouchableOpacity>
    </View>
  )
}