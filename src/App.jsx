import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, createEffect } from "solid-js";
import Toggle from './components/Toggle.jsx';

function App() {
  const [count, setCount] = createSignal(0);

  // setTimeout(() => {
  //   console.log('timer 1')
  //   setCount(c => c + 1);
  // }, 1000)

  // setTimeout(() => {
  //   setCount(count() + 1);
  // }, 2000)

  // setTimeout(() => {
  //   console.log('timer 2')
  //   setCount(console.log(123));
  //   setCount(v => v);
  // }, 2000)

  createEffect(() => {
    console.log('cur count ' + count());
  })

  const x = () => count() + 2;

  const y = () => x() + 2;

  const add = () => setCount(c => c + 1)

  return (
    <>
      <div>Count: {count()}</div>
      <button onClick={() => setCount(c => c + 1)}>ADD</button>
      <button onClick={add}>ADD</button>
      <div>{x()}</div>
      <div>{y()}</div>
      <Toggle />
    </>
  );
}

export default App;
