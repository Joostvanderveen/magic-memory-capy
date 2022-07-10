import "./SingleCard.css";

// Card tussen {} omdat dit een object is
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card-front" className="front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card-back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
