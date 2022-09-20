async function loadChart() {
  /* eslint-disable object-shorthand */

  /* global Chart, CustomTooltips, getStyle, hexToRgba */

  /**
   * --------------------------------------------------------------------------
   * CoreUI Free Boostrap Admin Template (v2.1.12): main.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  // Disable the on-canvas tooltip
  Chart.defaults.global.pointHitDetectionRadius = 1;
  Chart.defaults.global.tooltips.enabled = false;
  Chart.defaults.global.tooltips.mode = 'index';
  Chart.defaults.global.tooltips.position = 'nearest';
  Chart.defaults.global.tooltips.custom = CustomTooltips; // eslint-disable-next-line no-unused-vars

  var cardChart1 = new Chart($('#card-chart1'), {
    type: 'line',
    data: {
      labels: dataNamaWilayah, //
      datasets: [{
        label: 'Jumlah Rumah Tangga', //
        backgroundColor: getStyle('--primary'),
        borderColor: 'rgba(255,255,255,.55)',
        data: dataJumlahRT //
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false/* ,
          ticks: {
            display: false,
            min: 0,
            max: 10
          } */
        }]
      },
      elements: {
        line: {
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    }
  }); // eslint-disable-next-line no-unused-vars

  var cardChart2 = new Chart($('#card-chart2'), {
    type: 'line',
    data: {
      labels: dataNamaWilayah, //
      datasets: [{
        label: 'Jumlah Kepala Keluarga', //
        backgroundColor: getStyle('--success'),
        borderColor: 'rgba(255,255,255,.55)',
        data: dataJumlahKK //
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent'
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent'
          }
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          tension: 0.00001,
          borderWidth: 1
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4
        }
      }
    }
  }); // eslint-disable-next-line no-unused-vars

  
  var cardChart3 = new Chart($('#card-chart3'), {
    type: 'bar',
    data: {
      labels: dataNamaWilayah,
      datasets: [{
        label: 'Jumlah Penduduk',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: dataJumlahPenduduk
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 0.6
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  }); // eslint-disable-next-line no-unused-vars

  var cardChart4 = new Chart($('#card-chart4'), {
    type: 'bar',
    data: {
      labels: dataNamaWilayah,
      datasets: [{
        label: 'Jumlah Penduduk Laki-Laki',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: dataJumlahLakiLaki
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 0.6
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  }); // eslint-disable-next-line no-unused-vars
  
  var cardChart5 = new Chart($('#card-chart5'), {
    type: 'bar',
    data: {
      labels: dataNamaWilayah,
      datasets: [{
        label: 'Jumlah Penduduk Perempuan',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: dataJumlahPerempuan
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 0.6
        }],
        yAxes: [{
          display: false
        }]
      }
    }
  }); // eslint-disable-next-line no-unused-vars

  var mainChart = new Chart($('#main-chart'), {
    type: 'line',
    data: {
      labels: dataNamaWilayah,
      datasets: [{
        label: 'Samasta-2 Clean',
        backgroundColor: 'transparent',
        borderColor: getStyle('--success'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataJumlahRTClean
      }, {
        label: 'Samasta-2 Error',
        backgroundColor: 'transparent',
        borderColor: getStyle('--danger'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        //borderDash: [8, 5],
        data: dataJumlahRTError
      },{
        label: 'Samasta-2 Total',
        backgroundColor: hexToRgba(getStyle('--info'), 10),
        borderColor: getStyle('--primary'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataJumlahRT
      }]
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5/* ,
            stepSize: Math.ceil(250 / 5),
            max: 250 */
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    }
  });
  /* var brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  var brandBoxChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    } // eslint-disable-next-line no-unused-vars

  };
  var brandBoxChart1 = new Chart($('#social-box-chart-1'), {
    type: 'line',
    data: {
      labels: brandBoxChartLabels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [65, 59, 84, 84, 51, 55, 40]
      }]
    },
    options: brandBoxChartOptions
  }); // eslint-disable-next-line no-unused-vars

  var brandBoxChart2 = new Chart($('#social-box-chart-2'), {
    type: 'line',
    data: {
      labels: brandBoxChartLabels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [1, 13, 9, 17, 34, 41, 38]
      }]
    },
    options: brandBoxChartOptions
  }); // eslint-disable-next-line no-unused-vars

  var brandBoxChart3 = new Chart($('#social-box-chart-3'), {
    type: 'line',
    data: {
      labels: brandBoxChartLabels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [78, 81, 80, 45, 34, 12, 40]
      }]
    },
    options: brandBoxChartOptions
  }); // eslint-disable-next-line no-unused-vars

  var brandBoxChart4 = new Chart($('#social-box-chart-4'), {
    type: 'line',
    data: {
      labels: brandBoxChartLabels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [35, 23, 56, 22, 97, 23, 64]
      }]
    },
    options: brandBoxChartOptions
  }); */
  //# sourceMappingURL=main.js.map
}