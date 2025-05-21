import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

export default function NewGroup() {
  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />
        <Highlight
          subTitle="Cria a turma para adicionar as pessoas"
          title="Nova Turma"
        />
        <Input placeholder="Nome da Turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
}
