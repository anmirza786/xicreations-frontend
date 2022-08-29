/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamSkillsProgress from "../../common/teamSkillsProgress";
import tooltipEffect from "../../common/tooltipEffect";
import teamsDate from "../../data/sections/team.json";
import { useDispatch, useSelector } from "react-redux";
import { loadstaff } from "../../reduxIntegration/actions";

const Team = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    teamSkillsProgress();
    setTimeout(() => {
      tooltipEffect();
    }, 1000);
    dispatch(loadstaff());
  }, []);
  const state = useSelector((s) => s);
  const Team = state.staff;
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp md-mb30" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>Our Staff</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit mb-15">
                We help to create visual strategies.
              </h3>
              <p>
                We are Xi. We create award-winning websites, remarkable brands
                and cutting-edge apps.Nullam imperdie.
              </p>
              <div className="skills-box mt-40">
                {teamsDate.skills.map((skill) => (
                  <div className="skill-item" key={skill.id}>
                    <h6 className="custom-font">{skill.text}</h6>
                    <div className="skill-progress">
                      <div className="progres" data-value={skill.value}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                {Team &&
                  Team.map((team, index) => (
                    <div className="col-sm-6 toleft valign" key={team.id}>
                      <div className="full-width text-left">
                        <div key={team.id}>
                          <div
                            className={`img sizxl ${
                              index + 1 != teamsDate.teams.length
                                ? "mb-30"
                                : null
                            }`}
                            data-tooltip-tit={team.designation}
                            data-tooltip-sub={team.name}
                          >
                            <img
                              src={team.image}
                              alt=""
                              className="imago wow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
