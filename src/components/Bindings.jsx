import { onMount, For } from 'solid-js';


function Bindings(){

  // function show(data, e){
  //   console.log(data);
  //   console.log(e);
  // }

  const show = (data, e) => {
    console.log(data);
    console.log(e);
  }

  const x = true;
  const y = (arg) => {
    if(arg === 1) return 'active';
    else return 'in';
  }

  let el;







  onMount(() => {
    console.log(el);
  })


  // return <button classList={{ 'active': x }} onClick={[show, 1]}>Event</button>
  return (
    <>
      <button classList={ y(0) } onClick={[show, 1]}>Event</button>
      <span ref={el}>abc</span>
      <For each={['a', 'b', 'c']}>{(item, i) =>
        <span ref={item}>{item.name}</span>
      }
      </For>
    </>
  )


}

export default Bindings;
