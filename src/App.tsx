import { useMemo, useState } from 'react'
import { TodoItem } from './components/TodoItem/TodoItem'
import { Header } from './components/Header/Header'

export type Todo = {
	id: number
	text: string
	isCompleted: boolean
}

function App() {
	const [todoList, setTodoList] = useState<Todo[]>([
		{ id: 0, text: 'asdasfa', isCompleted: false },
		{ id: 1, text: 'asfa', isCompleted: true },
		{ id: 2, text: 'aasdsdasfa', isCompleted: false },
		{ id: 3, text: 'a', isCompleted: false },
	])

	const checkAll = useMemo(() => {
		let isCompletedAll = true
		for (let index = 0; index < todoList.length; index++) {
			if (!todoList[index].isCompleted) {
				isCompletedAll = false
				return false
			}
		}
		return isCompletedAll
	}, [todoList])
	const todoListVariants = useMemo(() => {
		return {
			all: todoList,
			active: todoList.filter(todo => todo.isCompleted === false),
			completed: todoList.filter(todo => todo.isCompleted === true)
		}
	}, [todoList])

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
				todo.isCompleted = !checkAll
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
	const AddNewTodo = (newTodoText: string) => {
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

	return (
		<section className='app'>
			<h1 className='title'>todos</h1>
			<section className='todoBox'>
				<Header
					isCompletedAll={checkAll}
					handleClickAddTodo={AddNewTodo}
					handleClickToggleCheckAll={toggleCheckAll}
				/>
				<main className='main'>
					<ul className='todo-list'>
						{todoList.map(todo => {
							return (
								<TodoItem
									key={todo.id}
									{...todo}
									handleClickToggleCheck={toggleCheck}
									changeNameTodo={changeNameTodo}
									deleteTodo={deleteTodo}
								/>
							)
						})}
					</ul>
				</main>
				<footer className='footer'>
					<span className='todo-count'>{activeTodo.length} left</span>
					<ul className='filters'>
						<li>
							<button className='filters-button selected'>
								All
							</button>
						</li>
						<li>
							<button className='filters-button'>Active</button>
						</li>
						<li>
							<button className='filters-button'>
								Completed
							</button>
						</li>
					</ul>
					<button
						className='clear'
						disabled={completedTodo.length === 0}
						onClick={clearCopletedTodo}
					>
						Clear completed
					</button>
				</footer>
			</section>
		</section>
	)
}

export default App
