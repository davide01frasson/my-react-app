import CanvasJSReact from './lib/canvasjs.react';
var React = require('react');
var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;

export default class SyncTest extends Component {
  constructor(props) { 
    super(props);
    this.updateChart = this.updateChart.bind(this);
    this.charts = [];
  }
  showTooltip = e => {
    for( var i = 0; i < this.charts.length; i++){
      if(this.charts[i] != e.chart)
        this.charts[i].toolTip.showAtX(e.entries[0].xValue);
    }
  }
  hideTooltip = e => {
    for( var i = 0; i < this.charts.length; i++){
      if(this.charts[i] != e.chart)
        this.charts[i].toolTip.hide();
    }
  }
  componentDidMount(){
    setInterval(this.updateChart, updateInterval);
  }
  updateChart(){
    yVal = Math.round(5 + Math.random() * (-5, 5));
    dps.push({x : xVal, y: yVal});
    xVal++;
    if(dps.length > 10){
      dps.shift();
    }
    for(var i = 0; i < this.charts.length; i++){
      this.charts[i].render();
    }
  }
  render() {
    const optionsFL = {
      theme: "light2", // "light1", "dark1", "dark2"
      animationEnabled: true, //Change to false
      animationDuration: 1200, //Change it to 2000
      title : {
          text: "FL dynamic"
      },
      toolTip: {
          shared: true,
          updated: this.showTooltip
      },
      data: [{
          type: "line",
          dataPoints : dps
      }]
  }
  const optionsFR = {
      theme: "light2", // "light1", "dark1", "dark2"
      animationEnabled: true, //Change to false
      animationDuration: 1200, //Change it to 2000
      title : {
          text: "FR dynamic"
      },
      toolTip: {
          shared: true,
          updated: this.showTooltip
      },
      data: [{
          type: "line",
          dataPoints : dps
      }]
  }
  const optionsRL = {
      theme: "light2", // "light1", "dark1", "dark2"
      animationEnabled: true, //Change to false
      animationDuration: 1200, //Change it to 2000
      title : {
          text: "RL dynamic"
      },
      toolTip: {
          shared: true,
          updated: this.showTooltip
      },
      data: [{
          type: "line",
          dataPoints : dps
      }]
  }
  const optionsRR = {
      theme: "light2", // "light1", "dark1", "dark2"
      animationEnabled: true, //Change to false
      animationDuration: 1200, //Change it to 2000
      title : {
          text: "RR dynamic"
      },
      toolTip: {
          shared: true,
          updated: this.showTooltip
      },
      data: [{
          type: "line",
          dataPoints : dps
      }]
  }

    return (
      <div>
          <div className='row'>
            <div className = 'col'>
              <CanvasJSChart options={optionsFL} onRef = {ref => {this.chart = ref; this.charts.push(ref)}} />
            </div>
            <div className = 'col'>
              <CanvasJSChart options={optionsFR} onRef = {ref => {this.chart = ref; this.charts.push(ref)}} />
            </div>
          </div>
          <div className='row'>
            <div className = 'col'>
              <CanvasJSChart options={optionsRL} onRef = {ref => {this.chart = ref; this.charts.push(ref)}} />
            </div>
            <div className = 'col'>
              <CanvasJSChart options={optionsRR} onRef = {ref => {this.chart = ref; this.charts.push(ref)}} />
            </div>
          </div>
      </div>
    );
  }
}
