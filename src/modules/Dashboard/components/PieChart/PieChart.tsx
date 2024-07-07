import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { PIE_CHART } from "../../constants";
import s from "./PieChart.module.scss";

const PieChart = () => {
  return (
    <div className={s.root}>
      <HighchartsReact highcharts={Highcharts} options={PIE_CHART} />
    </div>
  );
};

export default PieChart;
