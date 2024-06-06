import { TodoListVariants } from './types'

export const initialTodoList: string[] = [
	'Taste JavaScript',
	'Code furiously',
	'Promote Mavo',
	'Give talks',
	'Write tutorials',
	'Have a life!',
]

export const filterVariants: { [key in TodoListVariants]: string } = {
	all: 'All',
	active: 'Active',
	completed: 'Copleted',
}
