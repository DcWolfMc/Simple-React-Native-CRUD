import React, { FunctionComponent, useState } from "react";
import { View, SafeAreaView, Text, Alert } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { CityList } from "../../utils/utils";
import { StudentType } from "../../@types/@types";
import { EditStudentById } from "../../service/api";
import uuid from 'react-native-uuid';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import { RouteProp } from "@react-navigation/native";

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "EditStudent">;
  route: RouteProp<RootStackParamList, "EditStudent">;
}

export const EditStudent: FunctionComponent<Props> = ({navigation,route}) => {
  const {student} = route.params
  const [name, setName] = useState<string>(student.name);
  const [age, setAge] = useState<string>(student.age.toString());
  const [city, setCity] = useState<string>(student.city);

  function handleEditStudent() {
    let studentToEdit: StudentType = {
      age: Number(age),
      name: name,
      city: city,
      id: student.id
    };
    console.log("editStudent", studentToEdit);
    EditStudentById(studentToEdit.id,studentToEdit)
      .then((response) => {
        console.log("CreateNewStudent:", response.data);
        Alert.alert("Estudante Editado com sucesso!","",[
          { text: "voltar para lista", onPress: () => navigation.goBack() },
        ]);
      })
      .catch((error) => {
        console.log("error: ", error);
        Alert.alert("Algo deu errado.","Verifique se você seguiu os passos corretos para montar a aplicação.");
      })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contenteWrapper}>
        <View style={styles.header}>
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Editar Estudante: {student.name}
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            label={"Nome do Estudante"}
            placeholder={"Nome do Estudante"}
            mode={"outlined"}
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
          />
          <TextInput
            style={styles.input}
            label={"Idade"}
            placeholder={"Idade"}
            mode={"outlined"}
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => {
              setAge(text);
            }}
          />
          <Picker
            placeholder="Cidade"
            style={[styles.picker]}
            selectedValue={city}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            {CityList.map((item) => {
              return (
                <Picker.Item
                  key={item.value}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          style={{ borderRadius: 8 }}
          icon="account-plus"
          mode="contained"
          onPress={() => handleEditStudent()}
        >
          Editar Estudante
        </Button>
      </View>
    </SafeAreaView>
  );
};
