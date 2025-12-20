import Seaction__main from "./seaction__main";
import Seaction__greeting from "./seaction__greeting";
import Seaction__activities from "./seaction__activities";
import Seaction__programs from "./seaction__programs";
import Seaction__jumlah from "./seaction__jumlah";
import Seaction__cardPerformance from "./seaction__cardPerformance";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Seaction__main />
      <Seaction__greeting />
      <Seaction__activities />
      <Seaction__programs />
      <Seaction__jumlah />
      <Seaction__cardPerformance />
    </div>
  );
};

export default Home;
