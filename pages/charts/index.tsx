import BarChart from "@/src/modules/Dashboard/components/BarChart";
import LineChart from "@/src/modules/Dashboard/components/LineChart";
import PieChart from "@/src/modules/Dashboard/components/PieChart";
import Sidebar from "@/src/modules/Dashboard/components/Sidebar/Sidebar";
import classNames from "classnames";
import { useState } from "react";
import s from "./charts.module.scss";

const Charts = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className={s.root}>
      <Sidebar
        onHide={() => {
          setShowSidebar((prev) => !prev);
        }}
        show={showSidebar}
      />
      <div className={classNames(s.main, { [s.hide]: !showSidebar })}>
        <div className={s.header}>
          <h2 className={s.title}>Analytics Dashboard</h2>
        </div>
        <div className={s.chartsContainer}>
          <LineChart />
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
