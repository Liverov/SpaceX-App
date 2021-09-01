import React, {Suspense, useEffect} from 'react'
import {observer} from 'mobx-react'

import {mainStore} from '../../stores'

import {Header} from '../Header'

import S from './styles.module.css'

const Table = React.lazy(() => import('../Table'))

export const App: React.FC = observer(() => {
  useEffect(() => {
    mainStore.fetchData('Launches')
    mainStore.fetchData('Rockets')
  }, [])

  return (
    <div className={S.app}>
      <Header />
      <Suspense fallback={<h1>....Loading</h1>}>
        <Table />
      </Suspense>
    </div>
  )
})
