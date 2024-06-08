import './Header.style.scss'
import classNames from 'classnames'
import { useRef, useState } from 'react'
import { ToggleCheck } from '../ToggleCheck/ToggleCheck'
import { Enter } from '../../icons/Enter'

export const Header = ({
	isCompletedAll = false,
	handleClickToggleCheckAll,
	handleClickAddTodo,
}: {
	isCompletedAll: boolean
	handleClickToggleCheckAll: () => void
	handleClickAddTodo: (newTodoText: string) => void
}) => {
	const [newTodoText, setNewTodoText] = useState('')

	const newTodoRef = useRef<HTMLDivElement | null>(null)

	const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
		const eventKey = event.key
		const todoText = event.currentTarget.innerText

		if (eventKey === 'Enter') {
			if (todoText !== '') {
				handleClickAddTodo(todoText)
				setNewTodoText('')
				event.preventDefault()
				event.currentTarget.innerHTML = ''
			}
		} else {
			setNewTodoText(todoText)
		}
	}

	const newTodoCN = classNames('new-todo', { empty: newTodoText === '' })

	return (
		<header className='header'>
			<ToggleCheck
				variant={isCompletedAll ? 'checked' : 'empty'}
				onClick={() => handleClickToggleCheckAll()}
			/>
			<div
				ref={newTodoRef}
				className={newTodoCN}
				data-placeholder='What needs to be done?'
				contentEditable
				suppressContentEditableWarning={true}
				onKeyDown={e => handleKeyPress(e)}
			></div>
			<button
				className='enter'
				onClick={() => {
					handleClickAddTodo(newTodoText)
					if (newTodoRef.current) {
						newTodoRef.current.innerHTML = ''
					}
				}}
			>
				<Enter />
			</button>
		</header>
	)
}
