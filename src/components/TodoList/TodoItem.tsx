import classNames from 'classnames'
import { Todo } from '../../types'
import { TodoListProps } from './TodoList'
import { ToggleCheck } from '../ToggleCheck/ToggleCheck'
import { Cross } from '../../icons/Cross'

type Props = Todo & Omit<TodoListProps, 'todoList'>

export const TodoItem = ({
	id,
	isCompleted = false,
	text,
	toggleCheck,
	deleteTodo,
	changeNameTodo,
}: Props) => {
	const todoItemCN = classNames('todo__item', { completed: isCompleted })
	return (
		<li className={todoItemCN}>
			<ToggleCheck
				variant={isCompleted ? 'checked' : 'empty'}
				onClick={() => toggleCheck(id)}
			/>
			<div
				className='todo__item-input'
				contentEditable
				suppressContentEditableWarning={true}
				onBlur={e => changeNameTodo(id, e.target.textContent || '')}
			>
				{text}
			</div>
			<button className='todo__item-cross' onClick={() => deleteTodo(id)}>
				<Cross />
			</button>
		</li>
	)
}
