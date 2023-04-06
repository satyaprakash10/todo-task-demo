const ls = localStorage

export function fetchData(type: string) {
  let arr = []

  const items = ls.getItem(type)
  if (items) {
    arr = JSON.parse(items)
  }
  return arr
}

export async function saveTodo(todoList: any[]) {
  localStorage.setItem('todo', JSON.stringify(todoList))
}
