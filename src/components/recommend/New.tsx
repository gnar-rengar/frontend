import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import useGetNewSummonerList from '../../hooks/useGetNewSummonerList';
import useGTagOnMount from '../../hooks/useGTagOnMount';
import { FilterTierType } from '../../types/api.type';
import { SmallCard } from '../common';
import Filter from './Filter';
import None from './None';
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
  useGTagOnMount('menu_new');

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
        {pages[0].data.newList.length > 0 ? (
          pages.map((page) =>
            page.data.newList.map((list) => (
              <Link href={`/profile/${list._id}`} key={list._id}>
                <a>
                  <SmallCard {...list} />
                </a>
              </Link>
            ))
          )
        ) : (
          <None />
        )}
      </NewContainer>
      <div ref={hasNextPage ? ref : undefined} />
    </>
  );
}

export default New;
