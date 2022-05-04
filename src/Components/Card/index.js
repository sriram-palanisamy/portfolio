import "./card.css";
const Card = ({ img, heading, detail }) => {
  return (
    <div className="cards_wrapper">
      <img src={img} alt={"img"} />
      <span className="card_heading">{heading}</span>
      <span className="card_detail">{detail}</span>
      <button className="btn learn_btn">Learn More</button>
    </div>
  );
};

export default Card;
