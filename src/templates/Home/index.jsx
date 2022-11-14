import { useState } from "react";
import "./styles.css";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [order, setOrder] = useState({
    totalNumberCans: 0,
    totalPriceCans: 0.0,
  });

  const saveData = (formData) => {
    formData.price = (formData.numberCans * (90 * Math.random() + 10)).toFixed(2);
    setOrder({
      totalNumberCans: order.totalNumberCans + parseInt(formData.numberCans),
      totalPriceCans: (parseFloat(order.totalPriceCans) + parseFloat(formData.price)).toFixed(2),
    });
    setCards([...cards, formData]);
  };

  // const deleteCard = (id) => {
  //   const newCards = [...cards];
  //   setOrder({
  //     totalNumberCans: order.totalNumberCans - parseInt(newCards[id].numberCans),
  //     totalPriceCans: (parseFloat(order.totalPriceCans) - parseFloat(newCards[id].price)).toFixed(2),
  //   });
  //   newCards.find((_, index) => {
  //     if (id === index) {
  //       newCards.splice(index, 1);
  //       return true;
  //     }
  //     return false;
  //   });
  //   setCards(newCards);
  // }

  // const deleteCard = (id) => {
  //   const newCards = [...cards];
  //   setOrder({
  //     totalNumberCans: order.totalNumberCans - parseInt(newCards[id].numberCans),
  //     totalPriceCans: (parseFloat(order.totalPriceCans) - parseFloat(newCards[id].price)).toFixed(2),
  //   });
  //   newCards.find((_, index) => id === index ? newCards.splice(index, 1) : false);
  //   setCards(newCards);
  // };

  const deleteCard = (id) => {
    setOrder({
      totalNumberCans: order.totalNumberCans - parseInt(cards[id].numberCans),
      totalPriceCans: (parseFloat(order.totalPriceCans) - parseFloat(cards[id].price)).toFixed(2),
    });
    setCards(cards.filter((_, index) => id !== index));
  };

  return (
    <div className="homeContainer">
      <Header />
      <Form saveData={saveData} />
      <div className="cardData">
        <div className="summary">
          <p>{`Quantidade: ${order.totalNumberCans} | Preço: R$ ${order.totalPriceCans}`}</p>
        </div>
        <div className="cardList">
          {cards.map((card, index) => (
            <Card
              key={`card-${index}`}
              id={index}
              description={card.description}
              numberCans={card.numberCans}
              color={card.color}
              price={card.price}
              deleteCard={deleteCard}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
