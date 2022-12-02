import { useIsFocused } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import { SafeAreaView, FlatList, View, Text } from "react-native";
import { Button } from "react-native-paper";
import { StudentType } from "../../@types/@types";
import { ListItem } from "../../components/ListItem";
import { RootStackParamList } from "../../Routes";
import { getStudentsList } from "../../service/api";
import { styles } from "./styles";
interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "Mylist">;
}
export const MyList: FunctionComponent<Props> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [loading, setLoading] = useState<boolean>(false)
  const [studentsList, setStudentsList] = useState<StudentType[]>([]);

  useEffect(() => {
    if(!loading && isFocused){
    getStudentsList().then((response) => {
      console.log("response", response.data);
      setStudentsList(response.data);
    });
  }
  }, [isFocused,loading]);
  
  function setLoadingOn() {
    setLoading(true)
  }
  function setLoadingOff() {
    setLoading(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={{ color: "#fff", fontSize: 16 }}>
            Lista de Estudantes
          </Text>
        </View>
        <FlatList
          style={styles.listContentWrapper}
          data={studentsList}
          renderItem={({ item }) => {
            return (
              <ListItem key={item.id} setLoadingOn={setLoadingOn} setLoadingOff={setLoadingOff} student={item} navigation={navigation} />
            );
          }}
        />
        <View style={styles.buttonWrapper}>
          <Button
            style={{borderRadius:8}}
            icon="account-plus"
            mode="contained"
            onPress={() => navigation.navigate("AddStudent")}
          >
            Adicionar Estudante
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
