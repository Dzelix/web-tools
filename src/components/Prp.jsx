import { mergeProps, onMount } from "solid-js";

function Prp(props){
  const def = mergeProps({ name: 'one' }, props);

  onMount(() => {
    console.log('onMount ' + props.name)
  })


  return(
    <>
      <p>direct {props.name}</p>
      <p>merged {def.name}</p>

    </>
  )
}

export default Prp;
