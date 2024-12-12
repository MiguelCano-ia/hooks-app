import { useRef } from "react";

export const FocusScreen = () => {

  // useRef nos permite mantener alguna referencia y poder modificarla sin que el componente se renderice.
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    // document.querySelector('input').select();
    inputRef.current?.select(); // Selecciona el input
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control" 
      />

      <button
        onClick={ onClick }
        className="btn btn-primary mt-2"
      >
        Set focus
      </button>
    </>
  )
}
