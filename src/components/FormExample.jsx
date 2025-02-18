import { useState } from "react";

const initialValue = {
  name: "",
  age: 0,
  email: "",
};

const FormExample = () => {
  const [formData, setFormData] = useState(initialValue);

  const handleInputChange = (event) => {
    const propName = event.target.name;
    setFormData({ ...formData, [propName]: event.target.value });
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(
      `Nombre: ${formData.name} - Edad: ${formData.age} - Correo: ${formData.email}`
    );
    setFormData(initialValue);
  };

  return (
    <>
      <h1>Registro de usuario</h1>

      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Edad</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </>
  );
};

export default FormExample;
