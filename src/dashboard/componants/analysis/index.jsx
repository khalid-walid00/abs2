import React from "react";
import ApexCharts from "apexcharts";

class ApexChartRender extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  renderChart() {
    const { data, categories } = this.props;
    const options = {
      series: [{
        name: 'XYZ MOTORS',
        data: data,
      }],
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 4, // حجم النقاط
        strokeWidth: 0, // سمك الحدود للنقاط
        colors: ['#008FFB'], // لون النقاط
        strokeColors: '#fff', // لون حدود النقاط
        hover: {
          size: 8 // حجم النقاط عند التحويم
        }
      },

      title: {
        text: 'actual views',
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        
        title: {
          text: 'Price'
        },
      },
      xaxis: {
        type: 'datetime',
        categories: categories,
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      },
      stroke: {
        curve: 'straight',
        width:1
      }
    };

    new ApexCharts(this.chartRef.current, options).render();
  }

  render() {
    return <div ref={this.chartRef} style={{ width: '100%', height: '350px' }} />;
  }
}

const Analysis = ({ loading, title, description, name }) => {
  // Static data for demonstration
  const staticData = {
    labels: [
        '2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05',
        '2024-07-06', '2024-07-07', '2024-07-08', '2024-07-09', '2024-07-10',
        '2024-07-11', '2024-07-12', '2024-07-13', '2024-07-14', '2024-07-15',
        '2024-07-16', '2024-07-17', '2024-07-18', '2024-07-19', '2024-07-20',
        '2024-07-21', '2024-07-22', '2024-07-23', '2024-07-24', '2024-07-25',
        '2024-07-26', '2024-07-27', '2024-07-28', '2024-07-29', '2024-07-30',
        '2024-07-31', '2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04',
        '2024-08-05', '2024-08-06', '2024-08-07', '2024-08-08', '2024-08-09',
        '2024-08-10', '2024-08-11', '2024-08-12', '2024-08-13', '2024-08-14',
        '2024-08-15', '2024-08-16', '2024-08-17', '2024-08-18', '2024-08-19'
      ],
      data: [
        90, 45, 590, 55, 42, 590, 75, 85, 120, 55,
        60, 70, 95, 590, 130, 145, 590, 170, 180, 190,
        210, 220, 55, 245, 260, 200, 290, 305, 315, 90,
        350, 365, 90, 395, 90, 425, 440, 460, 475, 490,
        510, 530, 550, 570, 305, 590, 630, 590, 590, 590
      ]
  };

  return (
    <div className="w-full">
      <ApexChartRender
        data={staticData.data}
        categories={staticData.labels}
      />
    </div>
  );
};

export default Analysis;
