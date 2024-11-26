import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { usePagination } from '@/hooks/usePagination'
import { getInitials } from '@/utils/getInitials'
import { Pagination } from '../components/Pagination'
import { useCharacters } from '../hooks/useCharacters'

export const Home = () => {
	const { characters, pagination } = useCharacters()
	const { currentPage, handleChangePage, pages } = usePagination({ totalPages: pagination.totalPages })

	return (
		<div className='bg-white flex flex-col items-center py-6'>
			<h1 className='text-2xl mb-4'>Personagens de Ricky and Morty</h1>
			<>
				<div className='flex justify-center max-w-screen-xl mx-auto gap-4 p-4 flex-wrap flex-1 w-full'>
					{characters.map((character) => (
						<Card className='overflow-hidden max-w-48 border-none' key={character.id}>
							<CardHeader className='relative p-0 pb-2'>
								<Avatar className='size-48 rounded-none'>
									<AvatarFallback>{getInitials(character.name)}</AvatarFallback>
									<AvatarImage src={character.image} alt={character.name} />
								</Avatar>
								<CardTitle className='mx-3 truncate pb-1.5' title={character.name}>
									{character.name}
								</CardTitle>
								<CardDescription className='mx-3 !my-0'>
									{character.species} - {character.gender}
								</CardDescription>
							</CardHeader>
						</Card>
					))}
				</div>
				<Pagination current={currentPage} total={pagination.totalPages} pages={pages} onChange={handleChangePage} />
			</>
		</div>
	)
}
