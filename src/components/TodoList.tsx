import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }): JSX.Element => {
  return (
    <ul className="list-group">

      {todos.map(todo => {
        const classes = ['list-group-item']
        if (todo.complited) {
          classes.push('complited')
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label htmlFor="">
              <div>
                <input
                  type="checkbox"
                  checked={todo.complited}
                  onChange={() => onToggle(todo.id)}
                />
                <span>{todo.title}</span>
              </div>
              <i
                className='material-icons text-danger'
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
