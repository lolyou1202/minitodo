import './TodoList.style.scss'
import { Todo } from '../../types'
import { TodoItem } from './TodoItem'

export type TodoListProps = {
	todoList: Todo[]
	toggleCheck: (id: number) => void
	deleteTodo: (id: number) => void
	changeNameTodo: (id: number, value: string) => void
}

export const TodoList = ({ todoList, ...props }: TodoListProps) => {
	return (
		<ul className='todo-list'>
			{todoList.map(todo => {
				return <TodoItem {...todo} {...props} key={todo.id} />
			})}
		</ul>
	)
}
