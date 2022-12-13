import React from "react";
import { FlatList } from "react-native";

import { Episode } from "@@generated/graphql";

import * as S from "./styles";

const EpisodeList = ({ episodes }: { episodes: Partial<Episode>[] }) => {
  if (!episodes) return null;

  return (
    <FlatList
      data={episodes}
      renderItem={({ item: episode }) => <EpisodeListItem episode={episode} />}
      ItemSeparatorComponent={S.Separator}
      ListHeaderComponent={<S.ListHeader>List of Episodes</S.ListHeader>}
    />
  );
};

const EpisodeListItem = ({ episode }: { episode: Partial<Episode> }) => {
  return (
    <S.EpisodeItem>
      <S.EpisodeName>{episode.name}</S.EpisodeName>
      <S.EpisodeAirDate>{episode.air_date}</S.EpisodeAirDate>
    </S.EpisodeItem>
  );
};

export default EpisodeList;
