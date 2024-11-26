import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { getCharacters } from '../services/characters'

export const useCharacters = () => {
	const [searchParams] = useSearchParams()

	const page = searchParams.get('page') ?? '1'

	const query = useQuery({
		queryKey: ['characters', page],
		queryFn: () => getCharacters({ page }),
	})

	return {
		characters: query.data?.results ?? [],
		pagination: {
			totalPages: query.data?.info.pages ?? 0,
		},
		isLoading: query.isLoading,
		isSuccess: query.isSuccess,
	}
}
