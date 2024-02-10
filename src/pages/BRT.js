import ScrollSpy from "react-ui-scrollspy";
import React, { useEffect } from 'react';
import PieChart from '../components/PieChart';
import { ParallaxProvider} from 'react-scroll-parallax';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import CarDeathPieChart from '../components/CarDeathPieChart';

const Demo1 = (props) => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

const scrollToTop = () => {
    scroll.scrollToTop();
  };
 
  return (
    <>
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
    <div className='grid grid-rows-3 grid-flow-rows gap-1'>

            <div className="grid grid-rows-2 grid-flow-rows gap-1"> 
                <div id="problem" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><CarDeathPieChart/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Figure 1</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Problem</h1>
                      </p>
                    </div>
                  </div>
              </div>

              <div id="problem2" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", marginLeft: '200px', marginRight: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><CarDeathPieChart/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Figure 1</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Problem2</h1>
                      </p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-rows gap-1"> 
                <div id="solutions" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><CarDeathPieChart/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Figure 1</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Solutions</h1>
                      </p>
                    </div>
                  </div>
              </div>

              <div id="solutions2" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)",marginLeft: '200px', marginRight: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><CarDeathPieChart/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Figure 1</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Solutions2</h1>
                      </p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="grid grid-rows-2 grid-flow-rows gap-1"> 
                <div id="resources" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)", margin: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><CarDeathPieChart/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Figure 1</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Resources</h1>
                      </p>
                    </div>
                  </div>
              </div>

              <div id="resources2" style={{alignItems: 'center', justifyContent: 'center'}}>
                  <div className='rounded-2xl flex-auto'  style={{backgroundColor: "rgba(255, 255, 255, 0.4)",marginLeft: '200px', marginRight: '25px'}}>
                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                      
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <fig ><CarDeathPieChart/>
                          <figcaption style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Figure 1</figcaption>
                        </fig>
                      </div>                  
                        <p style={{textAlign: "center"}}>
                      <h1>Resources2</h1> 
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


