import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <MDBFooter color="elegant-color" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Orvelia</h5>
                  <p>
                    Thank you for using Orvelia! This project started as only a dream back in 2017. Since
                    then, it has turned into a reality. As you may already know, website hosting does cost money.
                    If you want to help support development and maintenance on Orvelia feel free to donate using 
                    the button below! A little goes a long way. Thanks again! If you have any suggestions or 
                    inquiries please direct them to Remyx#1327. 
                  </p>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" className="mb-3 paypal">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="jingkcheng@hotmail.com" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="http://1.bp.blogspot.com/-tAbW2KXF4OI/U5WxPVBGWdI/AAAAAAAAA0g/9OX7e_9-_q0/s1600/pp.jpg" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" style={{ maxWidth: '200px' }}/>
                 </form>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title">Other King's Raid related websites:</h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="https://www.reddit.com/r/Kings_Raid/">KR Reddit</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="http://www.kingsraid.wiki/index.php?title=Main_Page">KR Wiki</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://kingsraidforum.com/">KR Forums</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://maskofgoblin.com/hero/1">Mask of Goblin</a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="http://www.jingkcheng.com"> Jing Cheng </a>
              </MDBContainer>
            </div>
          </MDBFooter>
          
        );
    }
}

export default Footer;