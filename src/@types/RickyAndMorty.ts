export interface IInfo {
	count: number
	pages: number
	next: string | null
	prev: string | null
}

export type IResponse<R> = {
	info: IInfo
	results: R
}

export interface ICharacterLocation {
	name: string
	url: string
}

export interface ICharacter {
	id: number
	name: string
	url: string
	created: string
	status: 'Dead' | 'Alive' | 'unknown'
	species: string
	type: string
	gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
	origin: ICharacterLocation
	location: ICharacterLocation
	image: string
	episode: string[]
}

export type ICharacterResponse = IResponse<ICharacter[]>
