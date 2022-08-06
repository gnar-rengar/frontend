import Link from 'next/link';
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
    refetch,
  } = useGetNewSummonerList(filterState, 1, 'filter');

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
        {pages.map((page) =>
          page.data.newList.map((list) => (
            <Link href={`/profile/${list._id}`} key={list._id}>
              <a>
                <SmallCard {...list} />
              </a>
            </Link>
          ))
        )}
      </NewContainer>
      <div ref={hasNextPage ? ref : undefined} />
    </>
  );
}

export default New;
