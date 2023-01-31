
export function setupInput(element, output) {
  const setCounter = () => {
    element.innerHTML = `count is ${counter}`
  }
  console.log(element.innerHTML,'inner html')
  element.addEventListener('keyup', (e) => DoSomething(e.target.value, output))
}

function DoSomething(value, output){
  console.log(marked.parse(value))
  output.innerHTML=marked.parse(value)
}