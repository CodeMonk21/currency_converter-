import { useState } from 'react'
import InputBox from './components/InputBox';

function App() {

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{backgroundImage: `url('${"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600"}')`}}>
      <div className="w-full">
        <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-6 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {e.preventDefault()}}>
            {/* From Input */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
              />
            </div>
            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white text-lg px-2 py-0.5">swap</button>
            </div>
            {/* To Input */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
              />
            </div>
            {/* Convert button */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
