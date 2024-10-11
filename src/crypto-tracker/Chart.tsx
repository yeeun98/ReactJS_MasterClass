import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";

export interface IHistorical {
  time_open: number;
  time_close: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ['history'],
    queryFn: () => fetchCoinHistory(coinId ?? '')
  });

  return <div>
    {
      isLoading ? "Loading Chart..." :
        <ApexChart 
        type="line"
        series={[
          {
            name:'sales',
            data: data?.map(price => price.close) ?? []
          },
        ]}
        options={{
          theme: {
            mode: 'dark'
          },
          chart: {
            height: 300,
            width: 500,
            toolbar: {
              show: false
            },
            background: 'transparent'
          },
          grid: {show: false},
          stroke: {
            curve: 'smooth',
            width: 4
          },
          yaxis: {show: false},
          xaxis: {
            axisTicks: {
              show: false
            },
            labels: {
              show: false
            }
          },
          fill: {
            type: 'gradient',
            gradient: { gradientToColors: ['skyblue'] }
          },
          colors: ['pink']
        }}/>
    }
  </div>
}

export default Chart;