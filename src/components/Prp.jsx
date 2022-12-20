import { mergeProps, onMount } from "solid-js";

function Prp(props){
  const def = mergeProps({ name: 'one' }, props);

  const { name } = props;

  onMount(() => {
    console.log('onMount ' + props.name);
    console.log('onMount destr ' + name);
  })

  setTimeout(() => {
    console.log('interval ' + props.name)
    console.log('interval destr ' + name);
  }, 3000)


  return(
    <>
      <p>direct {props.name}</p>
      <p>merged {def.name}</p>
    </>
  )
}

export default Prp;
