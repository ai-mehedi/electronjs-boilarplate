import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      {/* Logo Section */}
      <div className="flex space-x-6 mb-6">
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="h-24 w-24 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 w-24 transition-transform hover:scale-110" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600">Vite + React</h1>

      {/* Counter Button */}
      <div className="mt-6">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition"
        >
          Count is {count}
        </button>
      </div>

      {/* Info Text */}
      <p className="mt-4 text-gray-700">
        Edit <code className="bg-gray-200 p-1 rounded">src/App.tsx</code> and save to test HMR.
      </p>

      <p className="mt-4 text-red-500 font-semibold">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
