import healthImg from '../assets/health.jpg';
import educationImg from '../assets/education.jpg';
import transportationImg from '../assets/transportation.jpg';

export function HomeCards() {
  return (
    <div className="home-cards">
      <div className="mycard card-one">
        <img src={healthImg} alt="Healthcare" className="card-img" />
        {/* <p className="card-tag">Focus Area</p>*/}
        <h2>Healthcare</h2>
        <p>Assessing the impact of policy and budget changes on healthcare programs.</p>
      </div>

      <div className="mycard card-two">
        <img src={educationImg} alt="Education" className="card-img" />
        {/* <p className="card-tag">Focus Area</p>*/}
        <h2>Education</h2>
        <p>Simulating budget adjustments and resource allocation for schools.</p>
      </div>

      <div className="mycard card-three">
        <img src={transportationImg} alt="Transportation" className="card-img" />
        {/* <p className="card-tag">Focus Area</p>*/}
        <h2>Transportation</h2>
        <p>Evaluating infrastructure costs and transit funding changes.</p>
      </div>
    </div>
  );
}
