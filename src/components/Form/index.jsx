import { useState } from "react";
import "./styles.css";
import checkFormData from "../../utils/validations";

const Form = ({ saveData }) => {
  const initialState = {
    description: "",
    numberCans: 1,
    color: "#8c55aa",
    price: 0.0,
  };

  const [formData, setFormData] = useState(initialState);
  const [formDataError, setFormDataError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = () => {
    const dataStatus = checkFormData(formData);

    for (const key in dataStatus) {
      if (dataStatus[key] !== "") {
        setFormDataError(dataStatus);
        return;
      }
    }

    saveData(formData);
    initialState.color = formData.color;
    setFormData(initialState);
    setFormDataError({});
  };

  return (
    <div className="formContainer">
      <form noValidate>
        <h1 className="formTitle">Escolha suas cores</h1>

        <div className="description">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            placeholder="Ex. cor da sala"
            onChange={handleChange}
            // onChange={(event) => setFormData({...formData, description: event.target.value})}
          />
          <p className="error" aria-live="polite">
            {formDataError.descriptionError}
          </p>
        </div>

        <div className="numberCans">
          <label htmlFor="numberCans">Quantidade</label>
          <input
            type="number"
            id="numberCans"
            name="numberCans"
            value={formData.numberCans}
            min="1"
            max="100"
            step="1"
            onChange={handleChange}
            // onChange={(event) => setFormData({...formData, numberCans: event.target.value})}
          />
          <p className="error" aria-live="polite">
            {formDataError.numberCansError}
          </p>
        </div>

        <div className="color">
          <label htmlFor="color">Cor</label>
          <input
            type="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            // onChange={(event) => setFormData({...formData, color: event.target.value})}
          />
        </div>

        <button className="saveCard" type="button" onClick={handleClick}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Form;
