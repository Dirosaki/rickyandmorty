export const getInitials = (value: string) => {
	const name = value.split(' ')
	const firstLetter = name[0].charAt(0)
	const lastLetter = name.length > 1 ? name.at(-1)?.charAt(0) : ''

	return (firstLetter + lastLetter).toUpperCase()
}
