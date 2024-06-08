import { initialTodoList } from "../constants";
import { Todo } from "../types";

export const useGenerateInitialTodoList = (): Todo[] =>
	initialTodoList.map((todo, index) => ({
		id: index,
		text: todo,
		isCompleted: Math.random() > 0.5 ? true : false,
	}))