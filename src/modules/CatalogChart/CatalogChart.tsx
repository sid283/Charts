import cn from "classnames";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import NoDataToDisplay from "highcharts/modules/no-data-to-display";
import { useEffect, useState } from "react";
import s from "./CatalogChart.module.scss";

const apiKey = "OJ2HO2ZXOL7UK9LS";
const symbol = "AAPL";

const CatalogChart = () => {
  const [chartData, setChartData] = useState<any>({});
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeChart, setActiveChart] = useState<number>(0);
  const [summary, setSummary] = useState<any>(null);
  const [quote, setQuote] = useState<any>(null);

  const tabs = [
    { label: "Summary", value: "summary" },
    { label: "Chart", value: "chart" },
    { label: "Statistics", value: "statistics" },
    { label: "Analysis", value: "analysis" },
    { label: "Settings", value: "settings" },
  ];
  const chartTabs = [
    { label: "1d", value: "1day" },
    { label: "3d", value: "3day" },
    { label: "1w", value: "1week" },
    { label: "1m", value: "3month" },
    { label: "6m", value: "6month" },
    { label: "1y", value: "1year" },
    { label: "max", value: "full" },
  ];

  const getChartData = async (value: any) => {
    const url = `https://www.alphavantage.co/query?function=ANALYTICS_SLIDING_WINDOW&SYMBOLS=${symbol}&RANGE=${value}&INTERVAL=DAILY&OHLC=close&WINDOW_SIZE=20&CALCULATIONS=MEAN&apikey=${apiKey}`;
    const response = await fetch(url);
    if (response) {
      const res = await response.json();
      if (res?.payload?.RETURNS_CALCULATIONS?.MEAN?.RUNNING_MEAN?.[symbol]) {
        setChartData((prev: any) => ({
          ...prev,
          [activeChart]:
            res?.payload?.RETURNS_CALCULATIONS?.MEAN?.RUNNING_MEAN?.[symbol],
        }));
      } else {
        setChartData((prev: any) => ({ ...prev, [activeChart]: {} }));
      }
    } else {
      setChartData((prev: any) => ({ ...prev, [activeChart]: {} }));
    }
  };

  const getQuote = async () => {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;
    const response = await fetch(url);
    if (response) {
      const res = await response.json();
      setQuote(res?.["Global Quote"]);
    }
  };

  const getData = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
    );

    if (response) {
      const res = await response.json();
      setSummary(res);
    }
  };

  const handleNoData = () => {
    try {
      NoDataToDisplay(Highcharts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleNoData();
  }, []);

  useEffect(() => {
    if (!chartData?.[activeChart]) {
      getChartData(chartTabs?.[activeChart]?.value);
    }
  }, [activeChart]);

  useEffect(() => {
    getQuote();
    getData();
  }, []);

  return (
    <div className={s.root}>
      <p className={s.price}>{quote?.["05. price"] || "-"}</p>
      <p className={cn(s.subtitle, { [s.low]: quote?.["09. change"] < 0 })}>
        {quote?.["09. change"] || "-"} {quote?.["10. change percent"] || ""}
      </p>
      <div className={s.tabBar}>
        {tabs?.map((item, idx) => (
          <div
            className={cn(s.tab, { [s.activeTab]: activeTab === idx })}
            onClick={(e) => {
              //@ts-ignore
              e?.target?.scrollIntoView({ block: "nearest", inline: "center" });
              setActiveTab(idx);
            }}
          >
            {item?.label}
          </div>
        ))}
      </div>
      <div className={s.list}>
        {
          {
            [0]: (
              <div>
                {summary ? (
                  <div className={s.summary}>
                    {Object.keys(summary || {})?.map((item) => (
                      <div className={s.title}>
                        {item || "-"} : {summary?.[item] || "-"}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={s.loaderWrapper}>
                    <div className={s.loader}>loader</div>
                  </div>
                )}
              </div>
            ),
            [1]: (
              <div className={s.charts}>
                <div className={s.chartsTab}>
                  {chartTabs?.map((item, idx) => (
                    <div
                      className={cn(s.chartTab, {
                        [s.activeChart]: activeChart === idx,
                      })}
                      onClick={() => {
                        setActiveChart(idx);
                      }}
                    >
                      {item?.label}
                    </div>
                  ))}
                </div>
                <div>
                  {chartData?.[activeChart] ? (
                    <div>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                          chart: {
                            zooming: {
                              type: "x",
                            },
                          },
                          title: {
                            text: "Apple INC",
                          },
                          xAxis: {
                            type: "datetime",
                            categories: Object.keys(
                              chartData?.[activeChart] || {}
                            )?.map((item) => item),
                          },
                          yAxis: {
                            title: {
                              text: "Stock price",
                            },
                          },
                          legend: {
                            enabled: false,
                          },

                          series: [
                            {
                              data: Object.keys(
                                chartData?.[activeChart] || {}
                              )?.map(
                                (item) => chartData?.[activeChart]?.[item]
                              ),
                            },
                          ],
                        }}
                      />
                    </div>
                  ) : (
                    <div className={s.loaderWrapper}>
                      <div className={s.loader}>loader</div>
                    </div>
                  )}
                </div>
              </div>
            ),
            [2]: (
              <div>
                {summary ? (
                  <div className={s.summary}>
                    {Object.keys(summary || {})?.map((item) => (
                      <div className={s.title}>
                        {item || "-"} : {summary?.[item] || "-"}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={s.loaderWrapper}>
                    <div className={s.loader}>loader</div>
                  </div>
                )}
              </div>
            ),
            [3]: (
              <div>
                {summary ? (
                  <div className={s.summary}>
                    {Object.keys(summary || {})?.map((item) => (
                      <div className={s.title}>
                        {item || "-"} : {summary?.[item] || "-"}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={s.loaderWrapper}>
                    <div className={s.loader}>loader</div>
                  </div>
                )}
              </div>
            ),
            [4]: (
              <div>
                {summary ? (
                  <div className={s.summary}>
                    {Object.keys(summary || {})?.map((item) => (
                      <div className={s.title}>
                        {item || "-"} : {summary?.[item] || "-"}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={s.loaderWrapper}>
                    <div className={s.loader}>loader</div>
                  </div>
                )}
              </div>
            ),
          }[activeTab]
        }
      </div>
    </div>
  );
};

export default CatalogChart;
