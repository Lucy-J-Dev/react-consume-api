import { useState } from "react";

const initialValue = {
  name: "",
  age: 0,
  email: "",
};

const URL_API = "http://localhost:3000/users";

// Funcion que permite consultar el API
const registerUser = async ({ name, age, email }) => {
  const response = await fetch(URL_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      age: age,
      email: email,
    }),
  });
  const result = await response.json();
  return result;
};

const FormExample = () => {
  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [successfulMessage, setSuccessfulMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Funcion que se encarga de manejar el cambio en los inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funcion que se encarga de manejar el boton submit del formulario
  const handleForm = (event) => {
    event.preventDefault();

    setSuccessfulMessage("");
    setErrorMessage("");

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
      setLoading(true);

      registerUser(formData)
        .then((result) => {
          setSuccessfulMessage(
            `El usuario con identificador ${result.id} fue creado`
          );
          setFormData(initialValue);
        })
        .catch(() => {
          setErrorMessage("Problemas con el servidor");
        })
        .finally(() => setLoading(false));
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
            onChange={handleInputChange}
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
        {loading && (
          <div>
            <p style={{ color: "violet" }}>Cargando...</p>
          </div>
        )}
        {successfulMessage && (
          <div>
            <p style={{ color: "green" }}>{successfulMessage}</p>
          </div>
        )}
        {errorMessage && (
          <div>
            <p style={{ color: "tomato" }}>{errorMessage}</p>
          </div>
        )}
      </form>
    </>
  );
};

export default FormExample;
