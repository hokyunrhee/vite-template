import { useState } from "react"

import { Button } from "@/components/ui/button"
import reactLogo from "@/assets/react.svg"

import viteLogo from "/vite.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-auto flex flex-col items-center gap-8">
      <div className="flex gap-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24" alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl">Vite + React</h1>

      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
