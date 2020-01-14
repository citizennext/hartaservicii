import React from 'react';
import CircularProgressBar from '../../../CircularProgressBar';
import ProgressBar from '../../../ProgressBar';
import GradientMap from '../../../GradientMap';

export default class Statistics extends React.Component {
  render() {
    return (
      <div id="statistics" className="section circularprogressbar">
        <div className="bg-snow py-8 mb-32 xl:mb-56">
          <div className="md:flex">
            <CircularProgressBar classCircularBar="md:w-1/2 xl:w-1/3" public={1396} private={1154} />
            <ProgressBar classProgressBar="hidden md:block md:w-1/2 xl:w-1/3 xl:m-auto" firstBar={21} secondBar={538} />
            <GradientMap classGradientMap="hidden xl:block xl:w-1/3 xl:m-auto" />
          </div>
          <button className="section-button my-1">Toate statisticile</button>
        </div>
      </div>
    );
  }
}
