import * as HelloWorld from './src/HelloWorld.elm'

addEventListener('DOMContentLoaded', (event) => {
  const node = document.getElementById('hello-world')

  if (node) {
    HelloWorld.Elm.HelloWorld.init({ node })
  }
})
