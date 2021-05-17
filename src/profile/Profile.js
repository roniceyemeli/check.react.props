import React from "react";
import PropTypes from 'prop-types';

export const Profile = (props) => {
  return (
    <div className="container" style={{"margin-top":40}}>
      {props.pops}
      <span>{props.children}</span>
    </div>
  );
};


Profile.propTypes={
  props:PropTypes.object
}

Profile.defaultProps = {
  fullName:"Ronice",
  bio:"fullstack bootcamp",
  profession: "student"
}


