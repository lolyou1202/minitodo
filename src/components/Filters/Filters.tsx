import './Filters.style.scss'
import { TodoListVariants } from '../../types'
import { filterVariants } from '../../constants'
import { FiltersButton } from './FiltersButton'

export type FiltersProps = {
	listVariant: TodoListVariants
	changeListVariant: (newListVariant: TodoListVariants) => void
}

export const Filters = ({ listVariant, changeListVariant }: FiltersProps) => {
	return (
		<ul className='filters'>
			{Object.entries(filterVariants).map(([name, value]) => (
				<FiltersButton
					key={name}
					name={value}
					selected={name === listVariant}
					changeListVariant={() =>
						changeListVariant(name as TodoListVariants)
					}
				/>
			))}
		</ul>
	)
}
