import { ChartBar } from "./ChartBar";
import "./Chart.css";

interface ChartBatProps {
  dataPoints: dataPoint[];
}

interface dataPoint {
  label: string;
  value: number;
}
export const Chart = (props: ChartBatProps) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: dataPoint) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
