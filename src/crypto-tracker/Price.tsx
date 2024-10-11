import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "./api";
import ApexChart from "react-apexcharts";
import { IHistorical } from "./Chart";

function Price() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistorical[]>({
    queryKey: ['history'],
    queryFn: () => fetchCoinHistory(coinId ?? '')
  });

  return <div>
    {
      isLoading ? "Loading Price..." :
        <ApexChart 
          type="candlestick"
          series={[
            {
              name:'sales',
              data: data?.map(price => {
                return {
                  x: new Date(price.time_open),
                  y: [price.open, price.high, price.low, price.close]
                }
              }) ?? []
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
          }}
        />
    }
  </div>
}

export default Price;

// 1. 상세페이지 뒤로가기 버튼 생성
// 2. candlestick chart로 price탭 완성하기