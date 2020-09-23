import { renderHook } from '@testing-library/react-hooks'
import { useDebounce } from './use-debounce'
import faker from 'faker'

test('Should use debounce', () => {
  const debouncedValue = faker.random.word()
  const { result, waitForNextUpdate } = renderHook(() => useDebounce(debouncedValue, 500))
  waitForNextUpdate()
  expect(result.current).toBe(debouncedValue)
})
