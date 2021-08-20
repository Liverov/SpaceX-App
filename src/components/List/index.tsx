import React, {useEffect, useState} from 'react'
import {favoritesStore} from '../../stores'

import {categories} from '../../mocks/categories'

import {ILaunchesData, IRocketsData} from '../../interfaces'

import S from './styles.module.css'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@material-ui/core'

export const List: React.FC<{
  data: Array<ILaunchesData | IRocketsData> | null
  selectedCategory: string
  onClickItem: (id: string | null) => void
}> = ({data, selectedCategory, onClickItem}) => {
  const [keyword, setKeyword] = useState<string>('')
  const [searchCategory, setSearchCategory] = useState<string>('')

  useEffect(() => {
    setKeyword('')
    setSearchCategory('')
  }, [selectedCategory])

  function filterList(item: {name: string}) {
    if (!keyword) return true
    const regexp = new RegExp(keyword, 'i')
    return item.name.match(regexp)
  }

  const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
    setSearchCategory(event.target.value as string)
  }

  return (
    <>
      {selectedCategory === 'Favorites' && (
        <div className={S.search}>
          <TextField
            id="standard-basic"
            autoComplete="off"
            label="Search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <FormControl className={S.formControl}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="select"
              id="demo-simple-select"
              value={searchCategory}
              onChange={handleChange}>
              <MenuItem key={'000'} value="">
                All
              </MenuItem>
              {categories.map((item) => {
                return (
                  item.name !== 'Favorites' && (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  )
                )
              })}
            </Select>
          </FormControl>
        </div>
      )}
      {data ? (
        data
          .filter((item: {dataType: string}) =>
            searchCategory ? item.dataType === searchCategory : true
          )
          .filter((item: {name: string}) => filterList(item))
          .map((item) => {
            return (
              <div
                key={item.id}
                className={S.item}
                onClick={() => onClickItem(item.id)}>
                <img
                  className={S.img}
                  src={
                    item.dataType === 'Launches'
                      ? item.links.patch.small
                      : item.flickr_images[0]
                  }
                  alt={item.name}
                />
                <div className={S.body}>
                  <h3 className={S.title}>{item.name}</h3>
                  <div className={S.description}>
                    {item.dataType === 'Launches' ? (
                      item.success ? (
                        <span className={S.success}>Success. </span>
                      ) : (
                        <span className={S.failure}>Failure. </span>
                      )
                    ) : undefined}
                    {item.dataType === 'Launches'
                      ? item.details
                      : item.description}
                  </div>
                </div>
                {favoritesStore.favoritesDataStore?.some(
                  (f: {id: string}) => f.id === item.id
                ) && <i className={`${S.like} fas fa-heart`} />}
              </div>
            )
          })
      ) : (
        <p>Not found items</p>
      )}
    </>
  )
}
