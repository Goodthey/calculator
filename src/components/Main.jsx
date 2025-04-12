import LeftBar from "./Left-bar/LeftBar";
import RightBar from "./Right-bar/RightBar";
import "./Main.css";
function Main() {
  return (
    <div className="main-bar">
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default Main;
