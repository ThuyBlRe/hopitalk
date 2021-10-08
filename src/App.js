import Header from "./Components/Header";
import { OuterLayout } from "./styles/Layouts";
import CardSection from "./Components/CardSection";
import CardSection2 from "./Components/CardSection2";
import CardSection3 from "./Components/CardSection3";
function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
      <CardSection />
      <CardSection2 />
      <CardSection3 />
 
      </OuterLayout>
      
    </div>
  );
}

export default App;
