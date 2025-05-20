import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import type { ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export default function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
