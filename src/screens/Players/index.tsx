import * as S from "./styles";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtoIcon";
import Input from "@components/Input";

export default function Players() {
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
    </S.Container>
  );
}
