import Router from './components/Router'
import SmoothScrollProvider from './components/common/SmoothScrollProvider'

function App() {
  return (
    <SmoothScrollProvider>
      <Router />
    </SmoothScrollProvider>
  )
}

export default App