import { StudentType } from "../../@types/@types";
import React from "react";
import { View, Text, Alert } from "react-native";
import { IconButton } from "react-native-paper";
import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import { DeleteStudentById } from "../../service/api";
interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Mylist">;
  student: StudentType;
  setLoadingOn(): void;
  setLoadingOff(): void;
}
export const ListItem: React.FC<Props> = ({
  student,
  navigation,
  setLoadingOn,
  setLoadingOff,
}) => {
  const AlertCall = () =>
    Alert.alert(`Deletar ${student.name} `, "O item será removido.", [
      {
        text: "Não",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Sim", onPress: () => handleDeleteStudent(student.id) },
    ]);

  function handleDeleteStudent(id: string) {
    setLoadingOn();
    console.log("DeleteId:" ,id);
    
    DeleteStudentById(id)
      .then((response) => {
        console.log(response.data);
        Alert.alert("Item Deletado",'',[{text:'OK',onPress:()=>{
          setLoadingOff();
        }}]);
        
      })
      .catch((error) => {
        console.log("deleteError: ", error);
        setLoadingOff();
      });
  }

  return (
    <View style={[styles.horizontalView, styles.spaceBetween, styles.listItem]}>
      <View style={[styles.horizontalView]}>
        <View style={[styles.verticalView, { marginHorizontal: 8 }]}>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Nome: </Text>
            {student.name}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Cidade: </Text>
            {student.city}
          </Text>
        </View>

        <View>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Idade: </Text>
            {student.age}
          </Text>
        </View>
      </View>
      <View style={[styles.horizontalView]}>
        <IconButton
          icon="square-edit-outline"
          iconColor="#F0BC55"
          onPress={() => navigation.navigate("EditStudent", { student: student})}
        ></IconButton>
        <IconButton
          icon="delete"
          iconColor="red"
          onPress={() => AlertCall()}
        ></IconButton>
      </View>
    </View>
  );
};
