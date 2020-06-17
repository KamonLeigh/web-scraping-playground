import React, { PureComponent } from "react";
import { format } from "date-fns";
import TertTitle from "./styles/TertiaryTitle.js"

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Legend,
} from "recharts";

export default class Instagram extends PureComponent {
  render() {
      console.log(this.props.data)
     let results = this.props.data.map((item) => ({
       ...item,
        date: format(new Date(item.date), "MM/dd/yyyy HH:mm:ss"),
       }));
     console.log(results)
    
    // yyyy-MM-dd'T'HH:mm:ss.SSSxxx
    return (
     <section>
     <TertTitle>instagram</TertTitle>
      <LineChart width={600} height={300} data={results}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis hide={true} dataKey="date" />
        <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="following" stroke="red" activeDot={{ r: 8 }}/>
     </LineChart>
     <LineChart width={600} height={300} data={results}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis hide={true}  dataKey="date" />
        <YAxis hide={true} domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="followers" stroke="blue" activeDot={{ r: 8 }}/>
     </LineChart>
     <LineChart width={600} height={300} data={results}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis hide={true}  dataKey="date" />
        <YAxis hide={true}domain={['dataMin', 'dataMax']}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="posts" stroke="orangered" activeDot={{ r: 8 }}/>
     </LineChart>
    </section>
    );
  }
}
