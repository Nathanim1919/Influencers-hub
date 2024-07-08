import React from "react";
import { IApplication } from "../../../interfaces/applicationInterface";

interface ApplicationProsp {
  applications: IApplication[];
}
export const ApplicationList: React.FC<ApplicationProsp> = () => {
  return (
    <div>
      <h1>ApplicationList</h1>
      <div className="applicationList">
        <div className="application">
            <div className="info">
                <h2>Application 1</h2>
                <p>Application 1</p>
            </div>
        </div>
      </div>
    </div>
  );
};
