import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './app.css';

// ref https://stackoverflow.com/questions/46482433/reactjs-createclass-is-not-a-function
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
          Login name: Mario
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/app" component={Dashboard}/>
            <Route path="/inbox" component={Inbox}/>
            <Route path="/calendar" component={Calendar}/>
            <Route path="*" component={Dashboard}/>
          </Switch>
        </main>
      </div>
    );
  }
};

class Dashboard extends React.Component {
  constructor(){
    super();
    this.state = {
      data:[5, 20, 36, 10, 10, 20]
    }
  }
  drawChart(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: this.state.data
      }]
    };
    var optionPie = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 10,
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      series: [
        {
          name: 'test',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: '衬衫'},
            {value: 310, name: '羊毛衫'},
            {value: 234, name: '雪纺衫'},
            {value: 135, name: '裤子'},
            {value: 135, name: '袜子'},
            {value: 1548, name: '高跟鞋'}
          ]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  };
  componentDidMount () {
    this.drawChart()
  }

  render() {
    return (
      <div>
        <p>Dashboard</p>
        <div id="chart" style={{width:400 + 'px',height:300+'px',background:'skyblue'}}></div>
      </div>
    );
  }
};

class Inbox extends React.Component {

  constructor(){
    super();
    this.state = {
      data:[5, 20, 36, 10, 10, 20]
    }
  }

  drawChart(){
    console.log(this.state.searchName)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: this.state.data
      }]
    };
    var optionPie = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'test',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.state.data
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(optionPie);
  };
  componentDidMount () {
    this.drawChart()
  }
  render() {
    return (
      <div>
        <p>Inbox</p>
        <div id="chart" style={{width:400 + 'px',height:300+'px',background:'skyblue'}}></div>
      </div>
    );
  }
};

class Calendar extends React.Component {
  render() {
    return (
      <div>
        <p>Calendar</p>
      </div>
    );
  }
};

// ref https://segmentfault.com/q/1010000009616045/a-1020000009618728
render((
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
), document.querySelector('#app'));
