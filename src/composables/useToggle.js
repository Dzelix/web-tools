export const useToggle = (proxy, options) => {

  const open = (key = null) => {
    let fn;

    if(key === null){
      if(proxy.value === true) return;
      if(proxy.value === undefined) throw Error('Need key as argument of open function')
      proxy.value = true;

      fn = options?.open;
    } else {
      if(proxy[key].value === true) return;
      proxy[key].value = true;

      fn = options[key]?.open;
    }

    if(fn === undefined) return;
    fn();
  }

  const close = (key = null) => {
    if(key === null){
      if(proxy.value === false) return;
      if(proxy.value === undefined) throw Error('Need key as argument of close function')
      proxy.value = false;
    } else {
      if(proxy[key].value === false) return;
      proxy[key].value = false;
    }
  }

  const toggle = (key = null) => {
    if(key === null){
      if(proxy.value === undefined) throw Error('Need key as argument of toggle function')
      proxy.value = !proxy.value;
    }
    else proxy[key].value = !proxy[key].value;
  }

  return {
    open,
    close,
    toggle
  }
}
