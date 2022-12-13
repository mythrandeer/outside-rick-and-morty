import React, { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

import { HeroImage } from "@@assets";
import { useAppContext } from "@@context/AppContext";
import { GET_CHARACTERS } from "@@graphql/getCharacters.queries";
import { GET_EPISODES } from "@@graphql/getEpisodes.queries";
import CharacterList from "./CharacterList";
import EpisodeList from "./EpisodeList";
import NameInputForm from "./NameInputForm";

import * as S from "./styles";

const Body = () => {
  const { setResultCount, resultCount } = useAppContext();

  const [getCharacters, { data: charactersData, loading: loadingCharacters }] =
    useLazyQuery(GET_CHARACTERS, { variables: { page: 1 } });

  const [getEpisodes, { data: episodesData, loading: loadingEpisodes }] =
    useLazyQuery(GET_EPISODES, {
      variables: { page: 1 },
    });

  useEffect(() => {
    const updateResultCount = () => {
      const totalResultCount =
        charactersData?.characters?.results.length +
        episodesData?.episodes?.results.length;
      setResultCount(totalResultCount);
    };
    if (charactersData?.characters?.results && episodesData?.episodes?.results)
      updateResultCount();
  }, [charactersData, episodesData]);

  const fetchDataSet = () => {
    getCharacters();
    getEpisodes();
  };

  const hideInitialForm =
    !loadingCharacters && !loadingEpisodes && resultCount > 0;

  return (
    <S.BodyContainer>
      {!hideInitialForm ? (
        <S.InitialFormContainer>
          <S.HeroImage source={HeroImage} resizeMode="contain" />
          <S.FetchButton
            title="Get Details"
            onPress={fetchDataSet}
            disabled={loadingCharacters || loadingEpisodes}
          />
        </S.InitialFormContainer>
      ) : (
        <>
          <CharacterList characters={charactersData?.characters?.results} />
          <EpisodeList episodes={episodesData?.episodes?.results} />
          <NameInputForm />
        </>
      )}
    </S.BodyContainer>
  );
};

export default Body;
