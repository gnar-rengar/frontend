import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetNewSummonerList from '../../hooks/useGetNewSummonerList';
import { FilterTierType } from '../../types/api.type';
import { SmallCard } from '../common';
import Filter from './Filter';
import { NewContainer } from './style';

function New() {
  const [filterState, setFilterState] = useState<FilterTierType[]>([]);
  const [ref, inView] = useInView();
  const {
    data: { pages },
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useGetNewSummonerList(filterState);

  console.log(pages);
  useEffect(() => {
    if (inView && !isLoading) {
      fetchNextPage();
    }
  }, [inView, isLoading]);

  return (
    <>
      <NewContainer>
        <Filter setFilterState={setFilterState} />
        {/* <SmallCard {...data} />
        <SmallCard {...data} />
        <SmallCard {...data} /> */}
      </NewContainer>
      <div ref={hasNextPage ? ref : undefined} />
    </>
  );
}

export default New;
