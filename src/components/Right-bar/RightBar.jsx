import "./right-bar.css";
function RightBar() {
  return (
    <div className="right-bar">
      <div className="right-bar-info">
        <div className="right-bar-info-upper">
          <h3>Итоговый результат</h3>
          <p>Финальные значения через 10 лет</p>
        </div>
      </div>
      <div className="right-bar-graf"></div>
    </div>
  );
}
export default RightBar;
