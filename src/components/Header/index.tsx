import * as S from "./styles";
import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";
type Props = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("groups");
  }

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={logoImg} />
    </S.Container>
  );
}
