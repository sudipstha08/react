export const fetchHomeData = () => {
  return 'data'
}

export const fetchUser = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
  const data = await response.json()
  return data
}
