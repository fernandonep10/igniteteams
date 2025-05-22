import * as S from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

export default function Input({ ...rest }: TextInputProps) {
  //exemplo de como acessar o tema fora de um contexto de um componente syled component
  const { COLORS } = useTheme();

  return <S.Container placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
