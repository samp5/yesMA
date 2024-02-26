import ScrollSpy from "react-ui-scrollspy";
import React, { useEffect } from 'react';
import { scrollSpy } from 'react-scroll';
import CarDeathPieChart from '../components/CarDeathPieChart';
import RoadSpace from "../components/RoadSpace";

const Demo1 = (props) => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <div className="grid grid-rows-2 grid-flow-rows gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div id="problem" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>
              <div className="grid grid-rows-1 grid-flow-col gap-1">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <fig ><CarDeathPieChart />
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Source:&nbsp;<a href="https://cdan.dot.gov/tsftables/tsfar.htm">National Highway Traffic Safety Administration</a></figcaption>
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> Safety Facts Annual Report Tables</figcaption>
                  </fig>
                </div>
                <p style={{ textAlign: "center" }}>
                  <h1><b>Safety</b></h1>
                  Any avoidable death is one too many<br /> <br />Cars are a major cause of harm and deaths that can be avoided, with 46,980 total deaths and 14.3 deaths per 100,000 people as a
                  result of traffic accidents in 2021
                  according to the <a href="https://injuryfacts.nsc.org/motor-vehicle/historical-fatality-trends/deaths-and-rates/"> National Safety Council</a>
                  .&nbsp;While cars are inherently dangerous, the United States' traffic policies, car dependent design, and car culture have exacerbated the danger.
                  This is especially evident when you compare our car accident death rates
                  to other developed countries such as Norway, Japan, France, and the United Kingdom, whose respective traffic accident deaths per 100,000 population were 2.1, 3.6, 5.1, and 3.2 in 2019 according to the
                  <a href='https://apps.who.int/gho/data/node.main.A997'> World Health Organization</a>.
                  <br /><br />
                  Furthermore, the ones at risk most when involved in car accidents are pedestrians.
                  These pie charts highlight how a disproportionate ratio of pedestrians die from accidents compared to car occupants.
                  The top left chart shows the ratio of injured to killed pedistrians and the top right chart shows the ratio of injured to killed car occupants.
                  Additionally, you are not safe even in your own vehicles, the bottom chart showcases how the majority of deaths are those in cars or on motorcylces.
                  <br /><br />
                  Utimately the dangers cars' pose are unacceptable. This is espcially true for pedestrians, who chose to not to use them and are more likely to die if involved in an accident.
                  <br />
                  <b>We deserve better.</b>
                </p>
              </div>
            </div>
          </div>

          <div id="problem2" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>
              <div className="grid grid-rows-1 grid-flow-col gap-1">
                <p style={{ textAlign: "center" }}>
                  <h1><b>Space Usage</b></h1>
                  Hate the congestion of the city? You can thank cars<br /><br />
                  Have you ever stopped to think about just how much space we devote to cars? Whether it be in highways, streets, and on-street parking
                  or in parking lots, our nation has become a shrine to cars. According to <a href="https://www.researchgate.net/publication/235358939_People_Parking_and_Cities"> "People, Parking, and Cities" </a>
                  (2005) by Michael Manville and Donald Shoup many cities use between 30 to 60% of their total surface on roads and parking spaces
                  and cities such as Houston and Dallas use over 1500 square feet per capita on street area!
                  <br /><br />
                  While we undoubtedly need to get around, there are much more efficient ways.
                  Have you ever thought about the amount of space being wasted when so many cars are just transporting one person?
                  This graph illustrates just how space inefficient cars are and how efficient buses and bikes are.
                  On a bus, the amount of space used per person is just 1.4x that of walking while in cars the amount of space per person is 5x higher!
                  <br /><br />
                  Next time your stuck in traffic, think about what could be.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <fig ><RoadSpace />
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Source:&nbsp;<a href="https://www.itf-oecd.org/sites/default/files/docs/cars-space-consumption-regulation-urban-mobility.pdf">
                      Cars and Space Consumption: Rethinking the Regulation of Urban Mobility</a></figcaption>
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>by Yves Crozet (University of Lyon)</figcaption>
                  </fig>
                </div>
              </div>
            </div>
          </div>
          <div id="problem3" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>
              <div className="grid grid-rows-1 grid-flow-col gap-1">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <fig ><img alt="" src='https://media.discordapp.net/attachments/1205673502149972089/1205970137342017697/emissions.png?ex=65ecc336&is=65da4e36&hm=434c01412932dcb65fbebbdfa408125fcee1f5be3e945c2d49b7ea9a110b49c2&=&format=webp&quality=lossless&width=504&height=400' />
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      Source:&nbsp;<a href="https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2022">UK Department for Energy Security and Net Zero</a>
                    </figcaption>
                  </fig>
                </div>
                <p style={{ textAlign: "center" }}>
                  <h1><b>Emissions</b></h1>
                  Not just killing people, killing the planet.
                  <br /><br />
                  As we all know, climate change is a grave danger our geriatric politicans have been effectively ignoring for decades.
                  While they may be safe from the danger with their old age and bloated wallets, the majority of us are not. Everyone should
                  push for anything that can lower our greenhouse gas emissions and transportation is a key area of possible improvement.
                  According to <a href="https://ourworldindata.org/grapher/co-emissions-per-capita?tab=table">Our World in Data</a>, the average
                  American emits 14.9 tons of CO<sub>2</sub> in 2022. Furthermore, according to <a href="https://www.statista.com/statistics/1291769/per-capita-transportation-co2-emissions-worldwide-by-country/">Statista</a>,
                  America boasts the highest per capita CO<sub>2</sub> emissions used on transportation in the entire world at 5.13 metric tons or 5.65 US tons.
                  Thats the average American contributing over a third of their emissions on transport.
                  <br /><br />
                  Not all transportation methods were made equal.
                  This figure illustrates just how inefficient cars are,
                  they’re second only to domestic flights when it comes to emissions per passenger kilometer!
                  Using trains and buses are easy ways to lower our greenhouse gas emissions and take care of our home.
                  If you live somewhere like Chicago, take advantage of the CTA, metra, or just walk.
                  If you live somewhere lacking public transport infrastructure, push for change and make your voice heard.
                </p>
              </div>
            </div>
          </div>

          <div id="problem4" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>
              <div className="grid grid-rows-1 grid-flow-col gap-1">
                <p style={{ textAlign: "center" }}>
                  <h1><b>Expenses</b></h1>
                  Wasting all that money, in this economy?
                  <br /><br />
                  With more and more Americans living paycheck-to-paycheck each year, we should be looking at how our car dependent cities are further draining drained wallets.
                  When you live in an area with lacking or non-existent public transportation options, you are forced to either own a car or use expensive ride-sharing services.
                  These costs are nothing to overlook. The line plot on the right displays how variable, fixed, and total costs of owning a car have consistently gone up over time, even
                  adjusted for inflation.
                  <br /><br />
                  In fact the&nbsp;<a href="https://www.apta.com/wp-content/uploads/APTA-POLICY-BRIEF-Transit-Savings-09.27.2023.pdf">
                    American Public Transportation Association</a>
                  , using AAA statistics, downtown parking costs, and their fare database, calculated that depending on the city, you can save between 12,000 and 17,000 USD each year by switching
                  to public transit. The average savings were 13,218 USD annually and 1,102 USD monthly! In Chicago, the savings were 14,631 USD annually and 1219 USD monthly. These numbers can make
                  a big difference. If you work a 40 hour work week for 50 weeks of the year thats like making an extra 6.61 USD an hour.
                  <br /><br />
                  Ultimately, we need to have readily-available public transit and end our reliance on cars.
                  No one should be forced to burn their money due to a lack of infrastructure.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <fig ><img alt="" src='https://media.discordapp.net/attachments/1205673502149972089/1211523980561748008/Untitled.png?ex=65ee82a1&is=65dc0da1&hm=d7591fbadb9ff71014f698f2d3258fb96cccef7b44a5c327fbc8193fe77b42bd&=&format=webp&quality=lossless&width=555&height=400' />
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      Source:&nbsp;<a href="https://newsroom.aaa.com/">American Automobile Association (AAA)</a>
                    </figcaption>
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      "Your Driving Costs Fact Sheet"
                    </figcaption>
                  </fig>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-flow-rows gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div id="solution" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>
              <div className="grid grid-rows-1 grid-flow-col gap-1">

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <fig ><img alt="" src='https://media.discordapp.net/attachments/1205673502149972089/1205987146855620708/image.png?ex=65ecd30d&is=65da5e0d&hm=7b2a104f82e5efdb4711569e81ddde242f696543f6e5bed2afa7ce60a436ecae&=&format=webp&quality=lossless&width=913&height=400' />
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Source:&nbsp;
                      <a href='https://www.sciencedirect.com/science/article/pii/S0967070X23003268'>Impact of “light” bus rapid transit (BRT-light) on traffic <br />and emissions in a travel corridor</a>
                    </figcaption>
                    <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      by Junsik Kim (University of Utah) and Reid Ewing (Univerity of Utah)</figcaption>
                  </fig>
                </div>
                <p style={{ textAlign: "center" }}>
                  <h1><b>Public Transportation</b></h1>
                  One necessary component to ending the car dependance issue is improving the current state and breadth of our public transportation. This must take many avenues from
                  biking infrastructure, subway investments, and bus improvements as detailed below.
                  <br /><br />
                  A key way to do this is implementing Bus Rapid Transit (BRT), a multi-faceted system of transit including large corridors, dedicated bus lanes, station fare payment, bus lane intersection protection, and platform level boarding
                  in order to provide rail like efficiency at a much lower cost. As shown on the right, a study done on major cities like Honolulu, Sydney, and Madrid has shown that BRT can increase the use of public transportation up to 150% based on the degree of implementation of BRT.
                  <br /><br />
                  This is important because according to research done by the <a href="https://www.apta.com/news-publications/public-transportation-facts/">American Public Transportation Association</a>
                  , every dollar invested in public transport leads to five dollars in economic return.
                  Furthermore, every $1,000,000,000 invested in our public transportation system also generates approximately 50,000 jobs.
                  Another benefit is that homes in neighborhoods near public transport are valued 24% higher.
                </p>
              </div>
            </div>
          </div>

          <div id="solutions2" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>
              <div className="grid grid-rows-1 grid-flow-col gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ textAlign: "center" }}>
                  <h1><b>Congestion Pricing</b></h1>
                  One possible way to combat car dependency is implementing congestion pricing. Congestion pricing is charging tolls to enter certain areas, usually city centers, during certain times.
                  It incentivizes drivers to switch to public transit, reduces vehicle miles traveled, and reduces congestion on the roads.
                  <br /><br />
                  This can be evaulated using a case study of <a href="https://d2e1qxpsswcpgz.cloudfront.net/uploads/2020/03/transport-report-evidence-table-congestion-charging.pdf">real statistics</a>&nbsp;from several periods in the 2000s to show two positive effects of implementing congestion charging in London.
                  First, London experienced an impressive 19.5% reduction of Greenhouse Gas Emissions as a result of decreasing total vehicle kilometers
                  and decreasing slow stop-and-go traffic. The other is an increased share of buses during changing hours (HOT/high demand hours).
                  As these hours approach, many people are not willing to pay the high toll prices so they seek public transportation as an alternative to driving.
                  Cars and taxis represent about three-quarters of London’s road traffic. The level of London’s road transport has remained fairly steady over the past twenty years.
                  If London had not introduced the congestion charge, their traffic situation would likely have been much worse.
                  <br /><br />
                  As there are a very small number of countries that have implemented congestion charges,
                  the issue would only get better if more countries opened up. In the U.S., it has yet to be implemented due to decades of policy proposals and political infighting.
                  In London, cars account for 11% of CO2 emissions.
                  In order to achieve the CO2 reduction targets in the Climate Change Action Plan—globally reducing carbon emission by 45% by 2030—the transport sector must deliver savings of 7 million tonnes of CO2 per annum by 2025.

                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  <fig ><img alt="" src='https://media.discordapp.net/attachments/1205673502149972089/1205984688855056494/Screenshot_2024-02-10_at_3.12.29_PM.png?ex=65ecd0c3&is=65da5bc3&hm=f2441118b16bed421a97875abfaeba84bd5e118e3c5ae290c67470b6a177174c&=&format=webp&quality=lossless&width=671&height=400' />
                  </fig>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 grid-flow-rows gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div id="resources" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <div id="solutions2" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>
                  <div className="grid grid-rows-1 grid-flow-col gap-1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ textAlign: "center" }}>
                      <h1><b>Do Your Part!</b></h1>
                      In order for change to happen, <b>YOU</b> have to fight for it!
                      We encourage you to make your voice heard!
                      <br />
                      This can come in many shapes and forms. You can push for state-wide legislative changes, call for zoning reform to remove mandatory parking minimums,
                      get involved with your local government, and spread awareness amongst your friends and family!
                    </p>
                    <br /><br />
                    Here is the Driving Change Map, an interactive map of cities and towns with bills up for debate, needing signatures, or up for vote.
                    <iframe src="https://www.google.co.uk/maps/d/u/0/embed?mid=1p-EdRDGmLeP_Ca6ZUOhSEaqQ1CPIClo&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>

                  </div>
                </div>
              </div>
              <div className='rounded-2xl flex-auto' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px' }}>

                <div className="grid grid-rows-1 grid-flow-col gap-1">
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                  </div>
                  <p style={{ textAlign: "center" }}>
                    <h1><b>Resources</b></h1>

                    <h6>
                      If you’re interested check out these resources to learn more!
                    </h6>

                    <p>
                      <a href='https://parkingreform.org/'>
                        Parking Reform
                      </a>
                    </p>
                    Whether your city needs abundant affordable housing, more bike lanes or transit improvements, parking policy and parking politics are always an obstacle.
                    The Parking Reform Network is here to support activists and professionals working in any discipline or policy area impacted by car parking.
                    <p>
                      <p>
                        <a href='https://www.youtube.com/@NotJustBikes'>
                          Not Just Bikes
                        </a>
                      </p>

                      NotJustBikes is a youtube channel that highlights how human centric transportation policies can make living in cities that much more enjoyable
                    </p>
                    <p>
                      <a
                        href='https://www.strongtowns.org/ '>
                        Strong Towns
                      </a>
                    </p>
                    <p>
                      Strong Towns contains is an educative content hub and movement center for those who seek to take action and improve their own communities
                    </p>

                    <a href="https://www.southlakeland.gov.uk/media/7208/climate-change-action-plan-accessible.pdf">SLDC Climate Action Plan</a><p>
                      The South Lakeland District Council (SLDC) Climate Change Action Plan outlines strategies and initiatives to address climate change impacts within the South Lakeland district.
                      It’s focus areas include: emission reductiont targets, renewable energy promotion, energy efficient measures, and transportation strategies. It can be used as an example for
                      your own communtities
                    </p>
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


