import * as S from "./styles";

type Props = {
  message: string;
};

export default function ListEmpty({ message }: Props) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
