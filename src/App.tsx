import { useState } from 'react'
import { TodoListVariants } from './types'
import { Header } from './components/Header/Header'
import { TodoList } from './components/TodoList/TodoList'
import { Footer } from './components/Footer/Footer'
import { useGenerateInitialTodoList } from './hooks/useGenerateInitialTodoList'
import { useCheckAll } from './hooks/useCheckAll'
import { useTodoListVariants } from './hooks/useTodoListVariants'

function App() {
	const initialTodoList = useGenerateInitialTodoList()

	const [todoList, setTodoList] = useState(initialTodoList)
	const [listVariant, setListVariant] = useState<TodoListVariants>('all')

	const isCheckAll = useCheckAll(todoList)
	const todoListVariants = useTodoListVariants(todoList)

	const toggleCheck = (id: number) => {
		setTodoList(prev =>
			prev.map(todo => {
				if (todo.id === id) {
					todo.isCompleted = !todo.isCompleted
				}
				return todo
			})
		)
	}
	const toggleCheckAll = () => {
		setTodoList(prev =>
			prev.map(todo => {
				todo.isCompleted = !isCheckAll
				return todo
			})
		)
	}
	const changeNameTodo = (id: number, value: string) => {
		setTodoList(prev =>
			prev.map(todo => {
				if (todo.id === id) {
					todo.text = value
				}
				return todo
			})
		)
	}
	const addNewTodo = (newTodoText: string) => {
		setTodoList(prev => [
			{
				id: prev.length,
				text: newTodoText,
				isCompleted: false,
			},
			...prev,
		])
	}
	const deleteTodo = (id: number) => {
		setTodoList(prev => prev.filter(todo => todo.id !== id))
	}
	const clearCopletedTodo = () => {
		setTodoList(todoListVariants.active)
	}
	const changeListVariant = (newListVariant: TodoListVariants) => {
		setListVariant(newListVariant)
	}

	return (
		<div className='app'>
			<h1 className='title'>todos</h1>
			<section className='todoBox'>
				<Header
					isCompletedAll={isCheckAll}
					handleClickAddTodo={addNewTodo}
					handleClickToggleCheckAll={toggleCheckAll}
				/>
				<main className='main'>
					<TodoList
						todoList={todoListVariants[listVariant]}
						toggleCheck={toggleCheck}
						changeNameTodo={changeNameTodo}
						deleteTodo={deleteTodo}
					/>
				</main>
				<Footer
					countActive={todoListVariants.active.length}
					countCompleted={todoListVariants.completed.length}
					clearCopletedTodo={clearCopletedTodo}
					listVariant={listVariant}
					changeListVariant={changeListVariant}
				/>
			</section>
		</div>
	)
}

export default App
