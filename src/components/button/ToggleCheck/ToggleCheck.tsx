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
		<button className={`todo-toggleCheck ${variant}`} onClick={onClick}>
			<span>
				<Check />
			</span>
		</button>
	)
}
