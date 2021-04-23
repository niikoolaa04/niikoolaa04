import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';
import Todo from './components/Todo'

function App() {

  // useEffect(() => {
  //   var app = document.getElementById('test');

  //   var typewriter = new Typewriter(app, {
  //     loop: true,
  //     delay: 75,
  //   });
    
  //   typewriter
  //     .pauseFor(2500)
  //     .typeString('A simple yet powerful native javascript')
  //     .pauseFor(300)
  //     .deleteChars(10)
  //     .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  //     .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  //     .pauseFor(1000)
  //     .start();
  // }, [])

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
