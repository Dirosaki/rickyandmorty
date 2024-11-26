import {
	Pagination as Container,
	PaginationButton,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from './ui/pagination'

interface IPagination {
	current: number
	total: number
	pages: (string | number)[]
	onChange: (page: number) => void
}

export const Pagination = ({ current, total, pages, onChange }: IPagination) => {
	const canGoToPreviousPage = current > 1
	const canGoToNextPage = current < total

	const handlePreviousPage = () => {
		onChange(current - 1)
	}

	const handleNextPage = () => {
		onChange(current + 1)
	}

	return (
		<Container>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious disabled={!canGoToPreviousPage} onClick={handlePreviousPage} />
				</PaginationItem>

				{pages.map((page) => {
					const isEllipsesPostion = typeof page === 'string'

					if (isEllipsesPostion) {
						return (
							<PaginationItem key={page}>
								<PaginationButton disabled>
									<PaginationEllipsis />
								</PaginationButton>
							</PaginationItem>
						)
					}

					return (
						<PaginationItem key={page}>
							<PaginationButton isActive={current === page} onClick={() => onChange(page)}>
								{page}
							</PaginationButton>
						</PaginationItem>
					)
				})}

				<PaginationItem>
					<PaginationNext disabled={!canGoToNextPage} onClick={handleNextPage} />
				</PaginationItem>
			</PaginationContent>
		</Container>
	)
}
