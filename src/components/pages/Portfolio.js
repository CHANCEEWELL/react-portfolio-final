import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import ReactGhCal from 'react-github-calendar';

export default function Portfolio() {
  return (
  <>
    <h1> <br></br> GitHub Commit History
      <ReactGhCal username='CHANCEEWELL' className="githubCommits"/>
    </h1>
    <Cards/>
    <Footer />
  </>
  );
}