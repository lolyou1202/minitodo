import { useMemo } from 'react'
import { Todo, TodoListVariants } from '../types'

export const useTodoListVariants = (todoList: Todo[]) => {
	return useMemo((): {
		[key in TodoListVariants]: Todo[]
	} => {
		return {
			all: todoList,
			active: todoList.filter(todo => todo.isCompleted === false),
			completed: todoList.filter(todo => todo.isCompleted === true),
		}
	}, [todoList])
}
