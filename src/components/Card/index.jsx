import "./styles.css";

const Card = ({ id, description, numberCans, color, price, deleteCard }) => (
  <div className="cardContainer" style={{ backgroundColor: color }}>
    <button
      className="deleteCard"
      style={{ backgroundColor: color }}
      onClick={() => deleteCard(id)}
    >
      &#x2716;
    </button>
    <h2>{color}</h2>
    <p>{description}</p>
    <ul>
      <li>Quantidade: {numberCans}</li>
      <li>Preço: {"R$" + price}</li>
    </ul>
  </div>
);

export default Card;
