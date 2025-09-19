import DrawingCanvas from './components/Canvas/DrawingCanvas';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Lezeni</h1>
      <DrawingCanvas />
    </div>
  );
}

export default App;