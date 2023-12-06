import { useMemo, useState } from 'react'

const count = 20

export const usePagination = <T,>(list: T) => {
  const [currentPage, setCurrentPage] = useState(1)

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const gridPage = currentPage - 1 // Grid is zero based
  const startIndex = gridPage * count
  const endIndex = startIndex + count

  const preparedList = useMemo(
    () => (list as T[]).slice(startIndex, endIndex),
    [list, startIndex, endIndex]
  )

  return {
    list: preparedList as T,
    currentPage,
    handleChangePage
  }
}
