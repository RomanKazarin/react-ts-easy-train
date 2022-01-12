import React, { useState, useEffect } from 'react'
import Form from '../components/Form';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';


const Home: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      complited: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complited: !todo.complited
        }
      }
      return todo
    }))
  }

  const removeHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Form onAdd={addTodo} />
      {todos.length
        ? <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        : <h2 className='text-center'>Список дел пуст</h2>
      }
    </>
  )
}

export default Home
