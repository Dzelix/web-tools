import { createSignal, createEffect } from "solid-js";

function Toggle(){

  const [open, setOpen] = createSignal(false);
  const watchOpen = () => open() ? 'visible' : 'invisible';

  const shown = (<button onClick={ () => setOpen(v => !v) }>toggle</button>);
  const invisible = (<button onClick={ () => setOpen(v => !v) }>toggle</button>)

  return (
    <>
      <Show
        when={open()}
        fallback={invisible}>
        <h1>Show</h1>
        {shown}
      </Show>
      <span>{watchOpen()}</span>
    </>
  )
}

export default Toggle;
