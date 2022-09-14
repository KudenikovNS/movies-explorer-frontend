import "./Popups.css";

function Popups({ popupText, showPopup, isLuck }) {
  return (
    <div
      className={`popups ${showPopup && "popups-show"} ${
        isLuck ? "popups__luck" : "popups__error"
      }`}
    >
      <p className='popups__text'>{popupText}</p>
    </div>
  );
}

export default Popups;
