import { Page } from './page'
import '../css/app.css'
import { render } from 'preact'

export function App() {

  return (
    <Page/>
  )
}

render(<App />, document.getElementById('app')!)
