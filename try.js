const items = [
    { name: 'a', content: { value: 1 }},
    { name: 'b', content: { value: 2 }},
    { name: 'c', content: { value: 3 }}
  ]
  const count = items.reduce((result, { content: { value } }) => result + value, 0)
  console.log(count);