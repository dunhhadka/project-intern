import { Line } from "@ant-design/plots";

const ChartIncome12Month = ({ incomes = [] }) => {
  const config = {
    data: incomes,
    xField: "monthYear",
    yField: "expense",
    seriesField: "name",
    yAxis: {
      label: {
        formatter: (v) =>
          Number(v / 10e6)
            .toFixed(1)
            .toLocaleString() + "M ₫",
      },
    },
    legend: { position: "top" },
    smooth: true,
    animation: { appear: { animation: "path-in", duration: 1500 } },
  };

  return <Line {...config} />;
};

export default ChartIncome12Month;
