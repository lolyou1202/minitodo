import { Check } from '../../../icons/Check'
import './ToggleCheck.style.scss'

export const ToggleCheck = ({
	variant = 'empty',
	onClick,
}: {
	variant?: 'empty' | 'checked'
	onClick?: () => void
}) => {
	return (
		<button className={`todo-check ${variant}`} onClick={onClick}>
			<span></span>
			<Check />
		</button>
	)
}
