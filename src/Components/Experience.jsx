import React from "react";
import experience from "./Data/experience.json";
function Experience() {
  return (
    <>
      <div className="container ex"id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex-items text-center">
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    {data.startDate} {data.endDate}
                    {data.location}
                  </h4>
                  <h5>{data.experiences}</h5>
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
