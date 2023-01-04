import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const SimpleFormWithCustomHooks = () => {

  const { formState, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: ''
    });

  const { name, email, password } = formState;

  return (
    <div className="container">
        <h1 className='text-primary'>Simple Form With Custom Hooks</h1>
        <hr />

        <input
        type="text"
        className="form-control mb-2"
        placeholder="Username"
        id="name"
        value={name}
        onChange={onInputChange}
        />

        <input
        type="email"
        className="form-control mb-2"
        placeholder="correo@dominio.com"
        id="email"
        value={email}
        onChange={onInputChange}
        />

        <input
        type="password"
        className="form-control"
        placeholder="contraseña"
        id="password"
        value={password}
        onChange={onInputChange}
        />

      <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
    </div>

  )
};
