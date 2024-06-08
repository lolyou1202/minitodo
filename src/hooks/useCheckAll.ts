import { useMemo } from 'react'
import { Todo } from '../types'

export const useCheckAll = (todoList: Todo[]) => {
	return useMemo(() => todoList.every(todo => todo.isCompleted), [todoList])
}
