import React from "react"

export const ShowIncrement = React.memo( ({ increment }) => {
  return (
    <div>
        <button
        className="btn btn-primary"
        onClick={ () => {increment() }}>Incrementar
        </button>
    </div>
  )
}
)