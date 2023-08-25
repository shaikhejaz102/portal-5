import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step6.css";
const Step6 = () => {
  return (
    <div className="step-6">
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="bingo-you-have-container">
        <span>BINGO! you have earned 20 synergy points.</span>
        <span className="span">{` `}</span>
      </div>
      <div className="youre-doing-great">
        You’re doing great! Look how far we’ve come. This bingo ends the Day 2
        of onboarding process, we hope you are having fun.
      </div>
      <Button className="button" variant="primary">
        YAY!
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step6;
