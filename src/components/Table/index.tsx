import React from 'react'
import {observer} from 'mobx-react'

import {mainStore} from '../../stores'

import {List} from '../List'
import {Categories} from '../Category'
import {Description} from '../Description'

import InfiniteScroll from 'react-infinite-scroll-component'
import S from './styles.module.css'

import {api} from '../../api'

const Table: React.FC = observer(() => {
  return (
    <main className={S.main}>
      <Categories />
      <div
        id="scrollableList"
        className={`${S.list} ${
          mainStore.sidebarIsOpen
            ? S.sidebar_open
            : S.sidebar_close
        }`}>
        {mainStore.currentCategory === 'Launches' ? (
          <InfiniteScroll
            dataLength={mainStore.launchesItems.length}
            next={mainStore.loadMoreLaunches}
            hasMore={
              api.totalLaunches >
              mainStore.launchesItems.length
            }
            scrollableTarget="scrollableList"
            loader={<h4>Loading launches...</h4>}
            endMessage={
              <p style={{textAlign: 'center'}}>
                <b>Yay! You have seen it all</b>
              </p>
            }>
            <List />
          </InfiniteScroll>
        ) : (
          <List />
        )}
      </div>
      <Description />
    </main>
  )
})
export default Table
