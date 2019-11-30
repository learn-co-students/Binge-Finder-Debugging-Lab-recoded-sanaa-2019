import React from "react";

const Episode = ({ eachEpisode }) => {
  // let { myEpisode } = props;

  return (
    <div>
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  );
};

export default Episode;
