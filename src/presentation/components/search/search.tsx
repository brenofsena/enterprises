import * as S from './styles'
import React, { useState, useEffect, useContext } from 'react'
import { useDebounce } from '@/presentation/hooks'
import { SearchContext } from '@/presentation/contexts'
import { Spinner } from '@/presentation/components'
import IconSearch from '@static/icon-search.png'

const Search: React.FC = () => {
  const { searchEnterprises, setEnterprises, handleError } = useContext(SearchContext)
  const [userInput, setUserInput] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(userInput, 500)

  const searchResults = (search: string): void => {
    setIsSearching(true)

    searchEnterprises
      .search(search)
      .then((response) => {
        const { enterprises }: any = response
        setEnterprises({ enterprises, error: '', reload: false })
      })
      .catch(handleError)
      .finally(() => setIsSearching(false))
  }

  useEffect(() => {
    searchResults(debouncedSearchTerm)
  }, [debouncedSearchTerm])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(event.target.value)
  }

  const onKeyDown = (event: any): void => {
    if (event.key === 13) {
      searchResults(event.target.value)
    }
  }

  return (
    <S.SearchWrapper>
      <S.Wrapper>
        <S.Icon src={IconSearch} />
        <S.Input
          type="text"
          data-testid="search"
          id="search-enterprises"
          name="search-enterprises"
          placeholder="Pesquisar"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
      </S.Wrapper>
      {isSearching && <Spinner />}
    </S.SearchWrapper>
  )
}

export default Search
