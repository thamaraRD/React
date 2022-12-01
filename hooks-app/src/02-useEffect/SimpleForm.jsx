import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: 'Thamara',
        email: 'thamara@dominio.com'
    });

    const { name, email } = formState;

    const onInputChange = ({ target }) => {
        const { id, value } = target;
        setFormState({...formState,
            [ id ]: value});
            console.log({ id, value });
    };

    useEffect(() => {

    });
    


  return (
    <div className="container">
        <h1 className='text-primary'>Simple Form</h1>
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
        className="form-control"
        placeholder="correo@dominio.com"
        id="email"
        value={email}
        onChange={onInputChange}
        />
    </div>
  )
};
