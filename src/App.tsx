import { useMemo, useState } from 'react'
import { Todo, TodoListVariants } from './types'
import { Header } from './components/Header/Header'
import { TodoList } from './components/TodoList/TodoList'
import { Footer } from './components/Footer/Footer'
import { initialTodoList } from './constants'

function App() {
	const generateInitialTodoList = (): Todo[] =>
		initialTodoList.map((todo, index) => ({
			id: index,
			text: todo,
			isCompleted: Math.random() > 0.5 ? true : false,
		}))

	const [todoList, setTodoList] = useState(generateInitialTodoList())

	const [listVariant, setListVariant] = useState<TodoListVariants>('all')

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
	const todoListVariants = useMemo((): {
		[key in TodoListVariants]: Todo[]
	} => {
		return {
			all: todoList,
			active: todoList.filter(todo => todo.isCompleted === false),
			completed: todoList.filter(todo => todo.isCompleted === true),
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
					isCompletedAll={checkAll}
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
