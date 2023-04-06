import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'
import { fetchData, saveTodo } from '@/utils/helper'

interface State {
  todoList: any
}

export const useTodoStore = defineStore('todo', {
  state: (): State => ({
    todoList: [],
  }),
  actions: {
    async addTodo(params: any) {
      const id = nanoid()
      let complete = false
      if (params.complete) {
        complete = true
      }
      const todo = { ...params, complete, id }

      this.todoList.push(todo)
      saveTodo(this.todoList)
    },
    async removeTodo(todo: any) {
      const index = this.todoList.findIndex((x: any) => x.id === todo.id)

      if (index < 0) {
        alert(`Can't find todo item [${todo.id}]`)
      }

      this.todoList.splice(index, 1)
      saveTodo(this.todoList)
    },
    async fetchTasks() {
      this.todoList = fetchData('todo')
    },
    async MarkasDone(todo: any) {
      this.todoList = this.todoList.map((_v: any) => {
        if (_v.id == todo.id) {
          _v.complete = !_v.complete
        }
        return _v
      })
      saveTodo(this.todoList)
    },
  },

  getters: {
    getTodos: (state): any[] => state.todoList,
  },
})
