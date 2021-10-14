import React from "react";
import { Link } from "react-router-dom";

function SplashPage() {
  return (
    <div>
      <div className="row">
        <div className="display-1 text-center py-4">All new Questionnaire!</div>
      </div>
      <div className="row py-2">
        <h1 className="display-4 text-center py-2">
            Can you Pass??
        </h1>
      </div>
      <div className="row justify-content-center py-4">
        <Link className="btn btn-primary my-4 w-25" to="/questions">
          Begin
        </Link>
      </div>
    </div>
  );
}

export default SplashPage;
