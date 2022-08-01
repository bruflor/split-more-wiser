import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = (props: any) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
