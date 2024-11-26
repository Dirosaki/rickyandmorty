import { ICharacterResponse } from '../@types/RickyAndMorty'
import { httpClient } from './httpClient'

export type Params = {
	page: string
}

export const getCharacters = async ({ page }: Params) => {
	const response = await httpClient.get<ICharacterResponse>('/character', {
		params: {
			page,
		},
	})

	return response.data
}
