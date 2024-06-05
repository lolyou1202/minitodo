import './TodoItem.style.scss'
import { useState } from 'react'
import { Cross } from '../../icons/Cross'
import { ToggleCheck } from '../button/ToggleCheck/ToggleCheck'
import { Todo } from '../../App'
import classNames from 'classnames'

interface Props extends Todo {
	handleClickCheck?: (id: number) => void
	changeNameTodo?: (id: number, value: string) => void
}

export const TodoItem = ({
	id,
	isCompleted = false,
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

	const todoItemCN = classNames('todo__item', { completed: isCompleted })

	return (
		<li className={todoItemCN}>
			<ToggleCheck
				variant={isCompleted ? 'checked' : 'empty'}
				onClick={() => handleClickCheck && handleClickCheck(id)}
			/>
			<div className='todo__item-input' contentEditable></div>
			{/*<input
				className='todo__item-input'
				type='text'
				value={todoText}
				onChange={e => handleChangeInput(e.target.value)}
				onBlur={handleBlur}
			/>*/}
			<button className='todo__item-cross' onClick={() => {}}>
				<Cross />
			</button>
		</li>
	)
}
