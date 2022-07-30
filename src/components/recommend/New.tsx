import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetNewSummonerList from '../../hooks/useGetNewSummonerList';
import { CardProps, FilterTierType } from '../../types/api.type';
import { SmallCard } from '../common';
import Filter from './Filter';
import { NewContainer } from './style';

function New() {
  const [filterState, setFilterState] = useState<FilterTierType[]>([]);
  const [ref, inView] = useInView();
  const { data, fetchNextPage, isLoading, hasNextPage, refetch } =
    useGetNewSummonerList(filterState);
  console.log(data);
  useEffect(() => {
    if (inView && !isLoading) {
      fetchNextPage();
    }
  }, [inView, isLoading]);

  useEffect(() => {
    refetch();
  }, [filterState]);

  return (
    <>
      <NewContainer>
        <Filter setFilterState={setFilterState} />
        {data && data.map((list) => <SmallCard {...list} />)}
        {/* <SmallCard {...data[0]} /> */}
      </NewContainer>
      <div ref={hasNextPage ? ref : undefined} />
    </>
  );
}

export default New;
