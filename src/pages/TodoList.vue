<template>
  <div>
    <!-- Add Todo Item -->
    <div class="flex px-4 py-4">
      <input
        type="text"
        class="border border-light-gray text-black text-sm focus:ring-blue focus:border-blue block w-full p-2.5"
        placeholder="New Task"
        required
        v-model="text"
      />
      <button
        class="shadow text-base text-white bg-blue-500 hover:bg-blue-600 hover:bg-opacity-70 w-28 py-2"
        @click="addTask"
      >
        <span class="font-bold text-xl text-white mr-1">+</span>
        Add
      </button>
    </div>

    <!-- Get Todo Lists -->
    <div class="px-4">
      <div
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @click="todoStore.MarkasDone(todo)"
        class="flex justify-between mb-4 items-center"
      >
        <span
          class="text-gray-900 cursor-pointer transition-all duration-500 w-full py-2 px-4 bg-green-200 border-green-500"
          :class="
            todo.complete
              ? 'line-through hover:bg-green-400'
              : 'bg-pink-50 hover:bg-pink-100'
          "
          >{{ todo.text }}</span
        >
        <a
          href="#"
          class="block bg-red-400 text-white font-bold text-xl px-4 py-1.5"
          @click="onClickDelete(todo)"
          >x
        </a>
      </div>
    </div>

    <!-- No Task's comment -->
    <div
      v-if="todos.length <= 0"
      class="text-center font-medium text-base md:text-lg text-black mt-10"
    >
      No Tasks Found Yet!
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import { useTodoStore } from '../store/todo'
const todoStore = useTodoStore()
const text = ref<string>('')
const todos = computed<any[]>(() => todoStore.getTodos)

todoStore.fetchTasks()

const computedRefs = reactive({ todos })

async function onClickDelete(todo: any) {
  const confirmed = await confirm(
    'Are you sure do you want to delete this todo?'
  )
  if (confirmed) {
    await todoStore.removeTodo(todo)
  }
}

function addTask() {
  if (text.value.length === 0) {
    alert('Need to enter something!')
    return
  }

  todoStore.addTodo({ text: text.value })
  text.value = ''
}
</script>

<style scoped lang="scss"></style>
