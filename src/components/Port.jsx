import { Portal } from "solid-js/web";
import { onCleanup } from "solid-js";

function Port() {

  onCleanup(() => console.log('cleanUp'));

  return (
    <Portal>
      <div class="popup">
        <h1>Popup</h1>
        <p>Some text you might need for something or other.</p>
      </div>
    </Portal>
  );
}

export default Port;
