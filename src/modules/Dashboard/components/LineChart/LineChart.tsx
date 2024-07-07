import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AREA_CHART, LINE_CHART, USERS } from "../../constants";
import s from "./LineChart.module.scss";

const LineChart = () => {
  return (
    <div className={s.root}>
      <HighchartsReact highcharts={Highcharts} options={LINE_CHART} />
      <div className={s.list}>
        <div className={s.list}>
          {USERS?.map((item) => (
            <div className={s.area}>
              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  ...AREA_CHART,
                  title: {
                    text: item?.title,
                    align: "left",
                  },
                  subtitle: {
                    text: item?.count,
                    align: "left",
                  },
                }}
                style={{ transform: "scale(0.5)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LineChart;
