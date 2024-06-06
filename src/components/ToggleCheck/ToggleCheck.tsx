import './ToggleCheck.style.scss'
import { CheckVariant } from '../../types'
import { Check } from '../../icons/Check'


export const ToggleCheck = ({
	variant = 'empty',
	onClick,
}: {
	variant?: CheckVariant
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
