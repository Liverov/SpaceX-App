import React from 'react'
import S from './styles.module.css'
import {categories} from './categories'
import {main} from '../../stores'

export const Categories: React.FC = () => {
  return (
    <nav className={S.category_wrapper}>
      {categories.map((item: {name: string; id: number}) => {
        return (
          <div
            key={item.id}
            className={S.item}
            onClick={() => main.changeCategory = item.name}>
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}
