import * as S from "./styles";
import ButtonIcon from "@components/ButtoIcon";

type Props = {
  name: string;
  onRemove: () => void;
};

export default function PlayerCard({ name, onRemove }: Props) {
  return (
    <S.Container>
      <S.Icon name="person" />
      <S.Name>{name}</S.Name>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </S.Container>
  );
}
