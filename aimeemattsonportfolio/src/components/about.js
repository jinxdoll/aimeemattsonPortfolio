import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-about' data-section='about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div className='col-md-12'>
                <div
                  className='row row-bottom-padded-sm animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='col-md-12'>
                    <div className='about-desc'>
                      <span className='heading-meta'>About Aimee</span>
                      <h2 className='colorlib-heading'>Who Am I?</h2>
                      <p>
                        I am a student at the University of Oregon ((Go Ducks!))
                        with Computer Coding and Software Development as my
                        major.I love exploring new technologies, learning new
                        developer languages and finding ways to expand my
                        skills!
                        <p>
                          
                          When I'm not sitting at the computer, you can find me
                          enjoying the outdoors and takin
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
