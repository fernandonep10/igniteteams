import * as S from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import Loading from "@components/Loading";
import { groupsGetAll } from "@storage/group/groupsGetAll";
import { useState, useCallback } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

export default function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Turmas", "Não foi possível carregar as turmas.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  //useFocusEffect: hook que executa esse bloco de intruções toda vez que
  // o componente for renderizado pela primeira vez e quando receber o "foco" da do usuário novamente
  useFocusEffect(
    //useCallback: hook que garente que essa execução do useFocusEffect vai executar apenas quando necessário
    useCallback(() => {
      //o que deve ser executado
      fetchGroups();

      //E quando deve ser executado de novo V (Uma vez no início E quando os estados abaixo forem atualizados)
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
