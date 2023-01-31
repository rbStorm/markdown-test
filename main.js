import './style.css'
import { setupInput } from './input.js'
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Woo Vite ladida</h1>
    <p class="read-the-docs">
      Markdown to HTML converter
    </p>
    <div class="card-container">
    <div class="card">
      <textarea placeholder="markdown goes here" id="input"></textarea>
    </div>
    <div class="card">
      <div id="output"></div>
    </div>
    </div>
  </div>
`

setupInput(document.querySelector('#input'),document.querySelector('#output'))
