import { useEffect, useState } from "react";

function Score({ cardClicked }) {
  return (
    <><div className="scoreContainer">
        <h2 className="liveText">Max Score is 20 !</h2>
        <div className="scoreBoard">
        <h2>GameScore</h2>

        <p>{cardClicked}</p>
      </div>
    </div>
      
    </>
  );
}

export { Score };
