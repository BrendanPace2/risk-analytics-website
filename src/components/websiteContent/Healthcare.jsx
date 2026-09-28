import * as charts from '../../config/chartOptions';
import { EChart } from '../EChart';

export function Healthcare() {
  return (
    <section style={{ minHeight: '80vh' }}>
      <div className="heading">
        <p>Dashboard</p>
      </div>
      <div className="charts">
        <EChart option={charts.clothing} />
        <EChart option={charts.admissions} />
      </div>
      <br></br>
      <div className="charts2">
        <EChart option={charts.pie} />
      </div>
    </section>
  );
}
