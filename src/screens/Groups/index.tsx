import * as S from "./styles";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import { useState } from "react";
import Header from "@components/Header";
import { FlatList } from "react-native";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" type={"SECONDARY"} />
    </S.Container>
  );
}
