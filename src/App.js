import React, { useEffect, useState } from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import NavigationBar from './components/NavigationBar';
import data from './data/data';
import Products from './data/Products';

function Lesson({name, isWatched}) {
  return <li className='lesson'>{name} {isWatched && 'done'}</li>
}

function Button({onClick, children}) {
  return (
    <button onClick={onClick}> {children} </button>
  )
}

function Play({songname}) {
  function handlePlay() {
    alert(`Plays ${songname}`);
  }
  return (
    <Button onClick={handlePlay}>
        Turn on "{songname}"
    </Button>
  )
}

function Upload(){
  return (
    <Button onClick={() => alert('Loading')}>
      Loading a picture
    </Button>
  )
}

const App = () => {
  const {products} = data;
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })

  return (
    <div>
        <NavigationBar />
        <AboutMe />
        <Education />
        <Experience />
        <Products products={products}/> 

        <section>
          <h1>To-do list for today</h1>
          <ul>
            <Lesson isWatched={true} name="Learning React" />
            <Lesson isWatched={true} name="Vacuum the house" />
            <Lesson isWatched={false} name="Heat the oven" />
          </ul>
        </section>

        <Play songname="Try Everything"/>
        <Upload />

        <br/><br/><br/>

        <p>You clicked {count} times</p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App