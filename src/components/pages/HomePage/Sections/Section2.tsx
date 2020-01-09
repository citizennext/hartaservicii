import section2 from '../../../../assets/images/hp_section2.png'
import Data from '../../../../data/global.json'
import React from 'react'

export default class Content extends React.Component {
  render() {
    return (
      <div id="section2" className="section my-32 md:flex">
        <div className="section-list bg-snow mb-32 md:mb-0 md:w-1/2 md:ml-6 md:mr-2">
          <div className="m-auto pt-2 rounded-full border-t-8 border-leaf">
            <img src={section2} className="bg-white border-4 rounded-full border-burg -mt-20  p-2 content-center m-auto" />
          </div>
          <h3 className="border-white border-b-4 text-center pt-4">{Data.page.homepage.content.section2.title}</h3>
          <div className="section-list interior my-8 pb-4 md:pb-0 relative">
            <ol className="list-none mb-10">
              <li>{Data.page.homepage.content.section2.list1}</li>
              <li>{Data.page.homepage.content.section2.list2}</li>
              <li>{Data.page.homepage.content.section2.list3}</li>
            </ol>
            <button className="-mt-2 absolute md:-mt-6 md:-ml-4">{Data.page.homepage.links.section2.label}</button>
          </div>
        </div>
        <div className="section-list bg-snow md:w-1/2 md:mr-6 md:ml-2">
          <div className="m-auto pt-2 rounded-full border-t-8 border-leaf">
            <img src={section2} className="bg-white border-4 rounded-full border-burg -mt-20  p-2 content-center m-auto" />
          </div>
          <h3 className="border-white border-b-4 text-center pt-4">{Data.page.homepage.content.section3.title}</h3>
          <div className="section-list interior my-8 pb-4 md:pb-0 relative">
            <ol className="list-none mb-10">
              <li>{Data.page.homepage.content.section3.list1}</li>
              <li>{Data.page.homepage.content.section3.list2}</li>
              <li>{Data.page.homepage.content.section3.list3}</li>
            </ol>
            <button className="-mt-2 absolute md:-mt-6 md:-ml-4">{Data.page.homepage.links.section2.label}</button>
          </div>
        </div>
      </div>
    )
  }
}
