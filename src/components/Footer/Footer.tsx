import './Footer.style.scss'
import { Filters, FiltersProps } from '../Filters/Filters'

interface FooterProps extends FiltersProps {
	countActive: number
	countCompleted: number
	clearCopletedTodo: () => void
}

export const Footer = ({
	countActive,
	countCompleted,
	clearCopletedTodo,
	...filterProps
}: FooterProps) => {
	return (
		<footer className='footer'>
			<span className='todo-count'>{countActive} left</span>
			<Filters {...filterProps} />
			<button
				className='clear'
				disabled={countCompleted === 0}
				onClick={clearCopletedTodo}
			>
				Clear completed
			</button>
		</footer>
	)
}
