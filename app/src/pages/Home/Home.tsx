import { Flex, Text } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Flex flex={1} flexDir={'column'}>
      <Text variant="title2">Tous les comptes</Text>
      <Text variant={'title1'} color={'blue.500'}>
        10 273,90 €
      </Text>
    </Flex>
  );
};
