import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from 'react';


export default function Footer() {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const changeBackground = () => {
      const scrollPos = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = getDocHeight();

      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor(scrollPos / totalDocScrollLength * 100);

      setBackgroundColor(`rgba(21, ${Math.min(122 + scrollPosition, 255)}, 92)`);
    }

    const getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    }

    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    }
  }, []);
  return (
    <MDBFooter className='border border-sky-1000'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0' className='text-reset'>
                  Do We want links here?
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
          
              <h6 className='text-uppercase fw-bold mb-4'> Contributers</h6>
                <FaGithub/>
              <p>
                <a href='https://github.com/ykoval201' className='text-reset'>
                  Yurri Koval
                </a>
              </p>
              <p>
                <a href='https://github.com/Esgartaq04' className='text-reset'>
                  Esteban Garcia Taquez
                </a>
              </p>
              <p>
                <a href='https://github.com/samp5' className='text-reset'>
                  Sam Praneis
                </a>
              </p>
              <p>
                <a href='https://github.com/notcoose' className='text-reset'>
                  Markus Perez
                </a>
              </p>
              <p>
                <a href='https://github.com/httpantwon' className='text-reset'>
                    Antwon Walls
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>
          UICyesMA
        </a>
      </div>
    </MDBFooter>
  );
}
