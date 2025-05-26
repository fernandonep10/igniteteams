import React, { forwardRef } from "react";
import * as S from "./styles";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps;

const Input = forwardRef<TextInput, Props>((props, ref) => {
  const { COLORS } = useTheme();
  return (
    <S.Container placeholderTextColor={COLORS.GRAY_300} ref={ref} {...props} />
  );
});

export default Input;
