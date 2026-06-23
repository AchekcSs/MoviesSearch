export const getVisiblePages = (currentPage, totalPages) => {
  if (totalPages <= 3) {
    return Array.from({length: totalPages}, (_, i) => i + 1)
  }

  if (currentPage === 1) {
    return [1, 2, 3]
  }

  if (currentPage === totalPages) {
    return [totalPages - 2, totalPages - 1, totalPages]
  }

  return [currentPage - 1, currentPage, currentPage + 1]
}