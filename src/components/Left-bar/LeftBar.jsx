import "./left-bar.css";
import DataComponent from "../DataComponent/DataComponent";
function LeftBar() {
  const base = [
    {
      label: "Начальная сумма",
      type: "input",
      placeholder: "100000",
      state: 100000,
    },
    {
      label: "Годовая процентная ставка (%)",
      type: "input",
      placeholder: "5",
      state: 5,
    },
    { label: "Срок (лет)", type: "input", placeholder: "10", state: 10 },
    {
      label: "Частота начисления процентов",
      type: "select",
      options: [
        "Ежемесячно",
        "Раз в пол года",
        "Ежеквартально",
        "Ежемесячно",
        "Ежедневно",
      ],
      state: "Ежемесячно",
    },
    {
      label: "Дополнительные взносы",
      type: "input",
      placeholder: "0",
      state: 0,
    },
    {
      label: "Частота взносов",
      type: "select",
      options: [
        "Ежемесячно",
        "Раз в пол года",
        "Ежеквартально",
        "Ежемесячно",
        "Раз в две недели",
        "Ежедневно",
      ],
    },
    {
      label: "Вносить в начале периода",
      type: "checkbox",
    },
  ];
  return (
    <div className="left-bar">
      <div>
        <div className="left-bar-info">
          <h3>Параметры инвестиций</h3>
          <p>Введите детали вашей инвестиции для рассчета сложных процентов</p>
        </div>
        <div className="left-bar-input">
          {base.map((value, key) => (
            <DataComponent key={key} {...value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
