import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mocks";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearch } from "./shared/components/CustomSearch";
import { gefGiftsByQuery } from "./gifs/actions/get.gifts-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.inteface";

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermCliked = (term: string) => {
    console.log({ term });
  };

  const clanQuery = (query: string) => {
    return previousTerms.includes(query.toLowerCase().trim())
      ? ""
      : query.toLowerCase().trim();
  };

  const handleSearch = async (query: string) => {
    if (clanQuery(query).trim().length === 0) return;

    console.log(clanQuery(query));

    setPreviousTerms([clanQuery(query), ...previousTerms].splice(0, 8));

    const gifs = await gefGiftsByQuery(query);

    console.log({ gifs });

    setGifs(gifs);
  };

  return (
    <>
      {/*  Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/*  Search */}
      <CustomSearch
        customPlaceHolder="Buscar gifs..."
        onQuery={(query: string) => handleSearch(query)}
      />

      {/*  previous Searches */}
      <PreviousSearches
        previousSearches={previousTerms}
        onLabelClick={handleTermCliked}
      />

      {/*  gifs */}
      <GifList gifs={gifs} />
    </>
  );
};
