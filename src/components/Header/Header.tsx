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

	const handleKeyPress = (eventKey: string, todoText: string) => {
		if (eventKey === 'Enter') {
			if (todoText !== '') {
				handleClickAddTodo(todoText)
				setNewTodoText('')
				if (newTodoRef.current) {
					//newTodoRef.current.replaceChildren()
					newTodoRef.current.innerHTML = ''
				}
			}
		} else {
			setNewTodoText(todoText)
		}
		if (eventKey === 'Enter' && newTodoRef.current) {
			//newTodoRef.current.replaceChildren()
			newTodoRef.current.innerHTML = ''
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
				//onKeyDown={e => {
				//	handleKeyPress(e.key, e.currentTarget.textContent || '')
				//	e.preventDefault()
				//}}
				onInput={(e) => console.log(e)}
			>{newTodoText}</div>
			<button
				className='enter'
				onClick={() => handleClickAddTodo(newTodoText)}
			>
				<Enter />
			</button>
		</header>
	)
}
