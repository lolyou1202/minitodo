import { useState } from 'react'
import { Cross } from '../../icons/Cross'
import { ToggleCheck } from '../button/ToggleCheck/ToggleCheck'
import { Todo } from '../../App'

interface Props extends Todo {
	handleClickCheck?: (id: number) => void
	changeNameTodo?: (id: number, value: string) => void
}

export const TodoItem = ({
	id,
	isChecked = false,
	text,
	handleClickCheck,
	changeNameTodo,
}: Props) => {
	const [todoText, setTodoText] = useState(text)

	const handleChangeInput = (value: string) => {
		setTodoText(value)
	}
	const handleBlur = () => {
		changeNameTodo && changeNameTodo(id, todoText)
	}

	return (
		<li className='todo__item'>
			<ToggleCheck
				variant={isChecked ? 'checked' : 'empty'}
				onClick={() => handleClickCheck && handleClickCheck(id)}
			/>
			<input
				className='todo__item-input'
				type='text'
				value={todoText}
				onChange={e => handleChangeInput(e.target.value)}
				onBlur={handleBlur}
			/>
			<button className='todo__item-cross' onClick={() => {}}>
				<Cross />
			</button>
		</li>
	)
}
