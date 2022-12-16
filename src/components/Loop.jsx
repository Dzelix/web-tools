import { createSignal, For } from "solid-js";

function Loop(){
  const [list, setList] = createSignal(null);

  const map = (
    [1,2,3].map(item => <span>{item}</span>)
  )

  return (
    <>
      <h1>Loop</h1>
      <For each={list()}>{(item, i) =>
        <span>{item.name}</span>
      }
      </For>
      {map}
    </>
  )
}

export default Loop;
