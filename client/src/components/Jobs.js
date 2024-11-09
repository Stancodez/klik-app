import React, { useState, useEffect } from 'react';
import { fetchData } from '../utils/api';

const Jobs = ({ userProfession }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData(`/api/jobs?profession=${userProfession}`).then(data => setJobs(data)); // Adjust based on API
  }, [userProfession]);

  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default Jobs;
