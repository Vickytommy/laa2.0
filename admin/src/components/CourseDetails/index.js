import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = ({ match }) => {
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <p>Course Details id: {id}</p>
    </div>
  );
}

export default CourseDetails;
