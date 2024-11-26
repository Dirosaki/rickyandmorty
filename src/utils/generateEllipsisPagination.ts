export const generateEllipsisPagination = (currentPage: number, totalPages: number, surroundingPages = 1) => {
	const pages: (number | string)[] = []

	for (let i = 1; i <= totalPages; i++) {
		const isFirstPage = i === 1
		const isLastPage = i === totalPages
		const isWithinLowerBound = i >= currentPage - surroundingPages
		const isWithinUpperBound = i <= currentPage + surroundingPages
		const isEllipsesPosition = i === currentPage - surroundingPages - 1 || i === currentPage + surroundingPages + 1

		if (isEllipsesPosition && !isFirstPage && !isLastPage) {
			pages.push('...')
			continue
		}

		if (isFirstPage || isLastPage || (isWithinLowerBound && isWithinUpperBound)) {
			pages.push(i)
		}
	}

	return pages
}
