import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, createEffect, ErrorBoundary, onMount } from "solid-js";
import Toggle from './components/Toggle.jsx';
import Loop from './components/Loop.jsx';
import Port from './components/Port.jsx'
import Err from './components/Err.jsx'

function App() {
  const [count, setCount] = createSignal(0);
  const [open, setOpen] = createSignal(true);

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

  setTimeout(() => {
    setOpen(o => !o)
  }, 5000)

  onMount(() => console.log('onMount'))

  return (
    <>
      <div>Count: {count()}</div>
      <button onClick={() => setCount(c => c + 1)}>ADD</button>
      <button onClick={add}>ADD</button>
      <div>{x()}</div>
      <div>{y()}</div>
      {/* <Toggle />
      <Loop />
      <Port /> */}
      {/* <ErrorBoundary fallback={<span>error</span>}>
        <Err />
      </ErrorBoundary> */}
      <Show
        when={open()}
        fallback={<span>not open</span>}>
        <Port />
      </Show>
    </>
  );
}

export default App;
