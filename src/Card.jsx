import reaction from "./assets/images/icon-reaction.svg";
import memory from "./assets/images/icon-memory.svg";
import verbal from "./assets/images/icon-verbal.svg";
import visual from "./assets/images/icon-visual.svg";

function Card() {
  return (
    <div className="container-box">
      <div className="results-container">
        <h2>Your Result</h2>
        <div className="result-score">
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <div className="remarks">
          <h2 class="remark">Great</h2>
          <p class="remark">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
      <div className="summary-container">
        <h2 id="txt-sum">Summary</h2>
        <div className="scores-box">
          <div className="score-box reaction-box">
            <img src={reaction} />
            <p className="score-title">Reaction</p>
            <h3 className="score">80</h3>
          </div>
          <div className="score-box memory-box">
            <img src={memory} />
            <p className="score-title">Memory</p>
            <h3 className="score">92</h3>
          </div>
          <div className="score-box verbal-box">
            <img src={verbal} />
            <p className="score-title">Verbal</p>
            <h3 className="score">61</h3>
          </div>
          <div className="score-box visual-box">
            <img src={visual} />
            <p className="score-title">Visual</p>
            <h3 className="score">72</h3>
          </div>
        </div>
        <button className="continue-btn">Continue</button>
      </div>
    </div>
  );
}

export default Card;
