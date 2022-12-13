import React from "react";
import { FlatList } from "react-native";

import { Character } from "@@generated/graphql";

import * as S from "./styles";

const CharacterList = ({
  characters,
}: {
  characters: Partial<Character>[];
}) => {
  if (!characters) return null;

  return (
    <FlatList
      data={characters}
      renderItem={({ item: character }) => (
        <CharacterListItem character={character} />
      )}
      ItemSeparatorComponent={S.Separator}
      ListHeaderComponent={<S.ListHeader>List of Characters</S.ListHeader>}
    />
  );
};

const CharacterListItem = ({
  character,
}: {
  character: Partial<Character>;
}) => {
  return (
    <S.CharacterItem>
      <S.CharacterImage
        source={{ uri: character.image }}
        resizeMode="contain"
      />
      <S.CharacterDetails>
        <S.CharacterName>{character.name}</S.CharacterName>
        <S.CharacterStatus>{character.status}</S.CharacterStatus>
      </S.CharacterDetails>
    </S.CharacterItem>
  );
};

export default CharacterList;
