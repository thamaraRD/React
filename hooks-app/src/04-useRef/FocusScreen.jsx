import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickRef = () => {
        inputRef.current.select()
    }

  return (
    <>

    <h1>Focus Screen</h1>
    <hr />

    <input
    ref={ inputRef }
    type="text"
    className="form-control"
    placeholder="Ingrese nombre..."
    />

    <button 
    onClick={ onClickRef }
    className="btn btn-success mt-2">Focus Input</button>
    
    </>
  )
}
