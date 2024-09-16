import React from "react";
import { Container } from "./styles";
import { SafeAreaView, Text } from "react-native";
import {
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter,
} from "./styles";

const Login: React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <Title>Bem vindo(a) {"\n"} a niceWallet!</Title>
          <Description>Faça login com redes sociais</Description>
          <ViewButton>

          </ViewButton>
        </ContentHeader>

        <ContentBody></ContentBody>

        <ContentFooter>
          <Text></Text>
          <Text></Text>
        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};
export { Login };
