import { useState } from "react";

const initialValue = {
  name: "",
  age: 0,
  email: "",
};

const initialErrors = {};

const FormExample = () => {
  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [successfulMessage, setSuccessfulMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = (event) => {
    event.preventDefault();

    setSuccessfulMessage("");

    // Validar el formulario
    const errors = {};

    if (formData.name.trim() === "") {
      errors.name = "No hay un nombre";
    }

    if (formData.age < 18) {
      errors.age = "La edad no corresponde";
    }

    if (formData.email.trim() === "") {
      errors.email = "No hay un correo electronico";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo no es valido";
    }

    setFormErrors(errors);

    console.log(
      `Nombre: ${formData.name} - Edad: ${formData.age} - Correo: ${formData.email}`
    );

    const existenErrores = Object.keys(errors).length > 0;

    if (!existenErrores) {
      setSuccessfulMessage("Su formulario fue completado correctamente");
      setFormData(initialValue);
    }
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
            onChange={(event) => {
              const valor = event.target.value;
              setFormData({ ...formData, name: valor });
              console.log(formData.name);
            }}
          />
          {formErrors.name && (
            <div>
              <small style={{ color: "red" }}>{formErrors.name}</small>
            </div>
          )}
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
          {formErrors.age && (
            <div>
              <small style={{ color: "red" }}>{formErrors.age}</small>
            </div>
          )}
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
          {formErrors.email && (
            <div>
              <small style={{ color: "red" }}>{formErrors.email}</small>
            </div>
          )}
        </div>
        <button type="submit">Registrar</button>
        {successfulMessage && (
          <div>
            <p style={{ color: "green" }}>{successfulMessage}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default FormExample;
