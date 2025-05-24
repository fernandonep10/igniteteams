import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtoIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { FlatList } from "react-native";
import { useState } from "react";

export default function Players() {
  const [teams, setTeams] = useState(["Time A", "Time B", "Time C"]);
  const [team, setTeam] = useState("Time B");
  const [players, setPlayers] = useState([
    "Fernando",
    "Diego",
    "Rodrigo",
    "Talles",
    "Thomas",
    "Agostinho",
    "Godofredo",
    "Douglas",
    "Marcos",
    "Pedro",
    "Mateus",
  ]);

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subTitle="Adicione a galera e separe os times"
      />
      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={teams}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <S.NumberOfPlayers> {players.length} </S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 20 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover turma" type="SECONDARY" />
    </S.Container>
  );
}
