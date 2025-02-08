

function App() {


  return (
    
    <div className="flex items-center justify-center h-screen">
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg shadow-lg">
      <input 
        type="text" 
        placeholder="Message ..." 
        className="border p-2 rounded w-64 text-center"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </div>
  </div>
    
  )
}

export default App
