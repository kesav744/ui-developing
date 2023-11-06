import TopBar from "./TopBar/TopBar";
import Card from './card/Card';
import Header from "./TopBar/Header";
import BelowHead from "./middleContent/BelowHead";
import MiddleOne from "./middleContent/Middlene";
import MiddleTwo from "./middleContent/MiddleTwo";
import MiddleThree from "./middleContent/MiddleThree";
import Bottom from "./Bottom/Bottom";


function App() {
  
  
  return (
    <>
    <Card>
      <TopBar />
      <Header />
      <BelowHead />
      <MiddleOne />
    </Card>
    <MiddleTwo />
    <MiddleThree />
    <Bottom />
    </>   
    );
}

export default App;
