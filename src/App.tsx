import { useState } from 'react'
import { Check } from './icons/Check'
import { Enter } from './icons/Enter'
import { TodoItem } from './components/TodoItem/TodoItem'

export type Todo = {
	id: number
	text: string
	isCompleted: boolean
}

function App() {
	const [todoList, setTodoList] = useState<Todo[]>([
		{ id: 1, text: 'asdasfa', isCompleted: false },
	])

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

	return (
		<section className='app'>
			<h1 className='title'>todos</h1>
			<section className='todoBox'>
				<header className='header'>
					<button className='toggle-all'>
						<Check />
					</button>
					<input
						className='new-todo'
						type='text'
						placeholder='What needs to be done?'
					/>
					<button className='enter'>
						<Enter />
					</button>
				</header>
				<main className='main'>
					<ul className='todo-list'>
						{todoList.map(todo => {
							return (
								<TodoItem
									key={todo.id}
									{...todo}
									handleClickCheck={toggleCheck}
									changeNameTodo={changeNameTodo}
								/>
							)
						})}
						{/*<li className='todo__item'>
							<ToggleCheck variant='empty' />
							<input className='todo__item-input' type='text' />
							<button className='todo__item-cross'>
								<Cross />
							</button>
						</li>
						<li className='todo__item'>
							<button className='todo__item-toggle'>
								<Check />
							</button>
							<input className='todo__item-input' type='text' />
							<button className='todo__item-cross'>
								<Cross />
							</button>
						</li>*/}
					</ul>
				</main>
				<footer className='footer'>
					<span className='todo-count'>1 left</span>
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
					<button className='clear'>Clear completed</button>
				</footer>
			</section>
		</section>
	)
}

export default App
