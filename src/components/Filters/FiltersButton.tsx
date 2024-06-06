import classNames from 'classnames'

export const FiltersButton = ({
	name,
	selected,
	changeListVariant,
}: {
	name: string
	selected: boolean
	changeListVariant: () => void
}) => {
	const filtersButtonCN = classNames('filters-button', { selected: selected })
	return (
		<li>
			<button className={filtersButtonCN} onClick={changeListVariant}>
				{name}
			</button>
		</li>
	)
}
