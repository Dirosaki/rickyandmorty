import { generateEllipsisPagination } from '@/utils/generateEllipsisPagination'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IUsePagination {
	initialPage?: number
	totalPages: number
}

export const usePagination = ({ initialPage = 1, totalPages }: IUsePagination) => {
	const [searchParams, setSearchParams] = useSearchParams({ page: String(initialPage) })
	const currentPage = parseInt(searchParams.get('page') ?? '1')
	const canGoToPreviousPage = currentPage > 1
	const canGoToNextPage = currentPage < totalPages

	const handleChangePage = (page: number) => {
		setSearchParams((prev) => {
			if (page === 1) {
				prev.delete('page')
				return prev
			}

			prev.set('page', page.toString())
			return prev
		})
	}

	const handlePreviousPage = () => {
		handleChangePage(currentPage - 1)
	}

	const handleNextPage = () => {
		handleChangePage(currentPage + 1)
	}

	const pages = useMemo(() => {
		return generateEllipsisPagination(currentPage, totalPages)
	}, [currentPage, totalPages])

	return {
		currentPage,
		handlePreviousPage,
		handleNextPage,
		handleChangePage,
		canGoToPreviousPage,
		canGoToNextPage,
		pages,
	}
}
