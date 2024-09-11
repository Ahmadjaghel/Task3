import "./Schedule.css";
import { AiFillSchedule } from "react-icons/ai";

function Schedule() {
  return (
    <div className="Schedule">
      Schedule a visit
      <div className="ScheduleIcon">
        <AiFillSchedule size={16} />
      </div>
    </div>
  );
}

export default Schedule;
