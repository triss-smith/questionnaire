import React from "react";
import { Link } from "react-router-dom";

function SplashPage() {
  return (
    <div>
      <div className="row">
        <h1 className="display-1 text-center py-4">
          Welcome to the Trivia Challenge!
        </h1>

        <h2 className="display-4 text-center p-5">
          You will be presented will 10 True or False questions.
        </h2>

        <h2 className="display-4 text-center p-5">Can you score 100%?</h2>
        <div className="row justify-content-center py-4">
          <Link className="btn btn-primary my-4 w-50 p-1" to="/questions">
            <p className="display-6">Begin</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
