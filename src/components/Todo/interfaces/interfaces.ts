export interface Todo{
    id: string;
    title: string;
    desc: string;
    completed: boolean;
}

export interface TodoState{
    todosCount: number;
    todos: Todo[];
    completedTodos: number;
    pendingTodos: number;

}