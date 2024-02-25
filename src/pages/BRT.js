import ScrollSpy from "react-ui-scrollspy";
import React, {useEffect } from 'react';
import {scrollSpy} from 'react-scroll';
import CarDeathPieChart from '../components/CarDeathPieChart';
import RoadSpace from "../components/RoadSpace";

const Demo1 = (props) => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
    <div className='grid grid-rows-3 grid-flow-rows gap-1'>

            <div className="grid grid-rows-2 grid-flow-rows gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
                <div id="problem" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><CarDeathPieChart/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Source:&nbsp;<a href="https://cdan.dot.gov/tsftables/tsfar.htm">National Highway Traffic Safety Administration</a></figcaption>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}> Safety Facts Annual Report Tables</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1><b>Safety</b></h1>
                      Any avoidable death is one too many<br/> <br/>Cars are a major cause of harm and deaths that can be avoided, with 46,980 total deaths and 14.3 deaths per 100,000 people in 2021
                      according to the <a href="https://injuryfacts.nsc.org/motor-vehicle/historical-fatality-trends/deaths-and-rates/"> National Safety Council</a>
                      .&nbsp;This is no surprise, a human being is no match for a multi-thousand pound metal box moving at anything above low speeds not to mention the collisions between them.
                      <br/><br/>
                      These pie charts highlight how a disproportionate ratio of pedestrians die from accidents compared to car occupants.
                      The top left chart shows the ratio of injured to killed pedistrians and the top right chart shows the ratio of injured to killed car occupants.
                      Additionally, you are not safe even in your own vehicles, the bottom chart showcases how the majority of deaths are those in cars or on motorcylces.

                      <br/><br/>
                      Utimately the dangers cars' pose are unacceptable. This is espcially true for pedestrians, who chose to not to use them and are more likely to die if involved in an accident
                      </p>
                    </div>
                  </div>
              </div>

              <div id="problem2" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><RoadSpace/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Road Usage by Vehicle Type</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Road Usage</h1>
Hate being stuck in traffic every morning and afternoon? Have you ever thought about the amount of space being wasted when so many cars are just transporting one person? This graph illustrates just how space inefficient cars are and how efficient buses are. On a bus, the amount of space per person is just 1.4x that of walking while in cars the amount of space per person is 5x higher!
                      </p>
                    </div>
                  </div>
              </div>
              <div id="problem2" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin:'25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><img alt ="" src ='https://media.discordapp.net/attachments/1205673502149972089/1205970137342017697/emissions.png?ex=65ecc336&is=65da4e36&hm=434c01412932dcb65fbebbdfa408125fcee1f5be3e945c2d49b7ea9a110b49c2&=&format=webp&quality=lossless&width=504&height=400'/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}> Emission's Data </figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Emission</h1>

    As we all know, climate change is a grave danger we’ve collectively done too little to stop. A key contributor to unnecessary greenhouse gas emissions is personal vehicles. While we all need to get around, there are other viable methods of transportation. This figure illustrates just how inefficient cars are, they’re second only to domestic flights when it comes to emissions per passenger kilometer!
                      </p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-rows gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
                <div id="solution" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><img alt ="" src = 'https://media.discordapp.net/attachments/1205673502149972089/1205987146855620708/image.png?ex=65da5e0d&is=65c7e90d&hm=d6740d6dcef0e1edb5d08cb805dd2d6cf1e1b89bc94c478a47a82ca503b3b32d&=&format=webp&quality=lossless&width=1057&height=463'/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Transportion Growth due to Bus Rapid Transit</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Solution: Public Transit</h1>
BRT Transportation Increase
One possible solution to the car dependance issue is improving the current state of out public transportation. A key component to this is Bus rapid transit, a system which prioritizes the improvement of public transportation, specifically busses. Based on a study done on major cities like Honolulu, Sydney, Madrid, and more; BRT can increase the use of public transportation up to 150% based on the degree of implementation of BRT. This is important because according to research done by the American Public Transportation Association, every dollar invested in public transport leads to five dollars in economic return. In Chicago, we have had consistent profits within our public transportation system and it is projected to grow in the coming years.

Public Transport Economy Increase
This will help the economy since every $1,000,000,000 invested in our public transportation system also generates approximately 50,000 jobs. This is key since home in neighborhoods near public transport are valued 24%. 

                      </p>
                    </div>
                  </div>
              </div>

              <div id="solutions2" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)",margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><img alt ="" src ='https://media.discordapp.net/attachments/1205673502149972089/1205984688855056494/Screenshot_2024-02-10_at_3.12.29_PM.png?ex=65da5bc3&is=65c7e6c3&hm=3f0b2fdd2cdf0359197f74d6a7f4123c4d4a05a01014c428223db58651130647&=&format=webp&quality=lossless&width=1057&height=630'/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}> Publc Transit Usage and Congestion Pricing</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Solution: Congestion Pricing</h1>
One possible solution to combat car dependency is implementing congestion pricing throughout countries where this issue arises. I’ve pulled real statistics from several periods in the 2000s to show two positive effects of implementing congestion charging in London: One is London’s reduction of Greenhouse Gas Emissions. The other is an increased share of buses during changing hours (HOT hours/high demand hours). As these hours approach, many people are not willing to pay high toll prices so they seek public transportation as an alternative to driving. Cars and taxis represent about three-quarters of London’s road traffic. The level of London’s road transport has remained fairly steady over the past twenty years. If London had not introduced the congestion charge, their traffic situation would likely have been much worse. 

As there are a very small number of countries that have implemented congestion charges, the issue would only get better if more countries opened up. In the U.S., it has yet to be implemented due to decades of policy proposals and political infighting. 
In London, cars account for 11% of CO2 emissions. In order to achieve the CO2 reduction targets in the Climate Change Action Plan—globally reducing carbon emission by 45% by 2030—the transport sector must deliver savings of 7 million tonnes of CO2 per annum by 2025. 

                      </p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-rows gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> 
                <div id="resources" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Resources</h1>

    <h6>
If you’re interested check out these resources to learn more!
    </h6>

  <p>
    <a href = 'https://parkingreform.org/'>
    Parking Reform
    </a>
    </p>
Whether your city needs abundant affordable housing, more bike lanes or transit improvements, parking policy and parking politics are always an obstacle.
The Parking Reform Network is here to support activists and professionals working in any discipline or policy area impacted by car parking.
<p>
    <p>
    <a href = 'https://www.youtube.com/@NotJustBikes'>
    Not Just Bikes
    </a>
    </p>
 
NotJustBikes is a youtube channel that highlights how human centric transportation policies can make living in cities that much more enjoyable
    </p>
    <p>
    <a
href = 'https://www.strongtowns.org/ '>
    Strong Towns
    </a>
    </p>
    <p>
    Strong Towns contains is an educative content hub and movement center for those who seek to take action and improve their own communities
    </p>

SLDC Climate Change Action Plan
The South Lakeland District Council (SLDC) Climate Change Action Plan outlines strategies and initiatives to address climate change impacts within the South Lakeland district. It’s focus areas include: Emission Reduction Targets, Renewable Energy Promotion, Energy Efficient Measures, Transportation Strategies

Research Evidence of Congestion Charging in European Countries
The evidence recorded here covers effects of congestion charging—a type of road user charge whereby vehicles are charged to enter a particular zone during a set period
                      </p>
                    </div>
                  </div>
              </div>
            </div>
          
    </div>
      </ScrollSpy>
    </>
  );
};
export default Demo1;


