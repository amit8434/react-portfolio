import React from "react";
import experience from "./Data/education.json";
function Experience() {
  return (
    <>
      <div className="container ex1" id ="education">
        <h1>EDUCATION</h1>
        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex1-items text-center">
                <div className="left">
                </div>
                <div className="right">
                  <h1>{data.role1}</h1>
                  <h1>{data.role2}</h1>
                  <h1>{data.role3}</h1>
                  <h3>{data.BE}</h3>
                  <h4>
                    {data.startyear} {data.endyear}
                     <br />
                    {data.location}
                  </h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Experience;
