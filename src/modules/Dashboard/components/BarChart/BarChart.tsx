import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BAR_CHART } from "../../constants";
import s from "./BarChart.module.scss";

const BarChart = () => {
  return (
    <div className={s.root}>
      <HighchartsReact highcharts={Highcharts} options={BAR_CHART} />
    </div>
  );
};

export default BarChart;
