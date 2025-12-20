import Footer from "./Page/Footer";
import Seaction__main from "./Page/HomePage/seaction__main";
import Seaction__jumlah from "./Page/HomePage/seaction__jumlah";
import Seaction__cardPerformance from "./Page/HomePage/seaction__cardPerformance";

const App = () => {
  return (
    <div>
      <Seaction__main />
      <Seaction__jumlah />
      <Seaction__cardPerformance />
      <Footer />
    </div>
  );
};

export default App;
