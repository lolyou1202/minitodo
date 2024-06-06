import './TodoItem.style.scss'
import classNames from 'classnames'
import { Todo } from '../../App'
import { ToggleCheck } from '../button/ToggleCheck/ToggleCheck'
import { Cross } from '../../icons/Cross'

interface Props extends Todo {
	handleClickToggleCheck: (id: number) => void
	deleteTodo: (id: number) => void
	changeNameTodo: (id: number, value: string) => void
}

export const TodoItem = ({
	id,
	isCompleted = false,
	text,
	handleClickToggleCheck,
	deleteTodo,
	changeNameTodo,
}: Props) => {
	const handleBlur = (todoText: string) => {
		changeNameTodo(id, todoText)
	}

	const todoItemCN = classNames('todo__item', { completed: isCompleted })

	return (
		<li className={todoItemCN}>
			<ToggleCheck
				variant={isCompleted ? 'checked' : 'empty'}
				onClick={() => handleClickToggleCheck(id)}
			/>
			<div
				className='todo__item-input'
				contentEditable
				suppressContentEditableWarning={true}
				onBlur={e => handleBlur(e.target.textContent || '')}
			>
				{text}
			</div>
			<button className='todo__item-cross' onClick={() => deleteTodo(id)}>
				<Cross />
			</button>
		</li>
	)
}
