import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import "./page1.css"


/*   text-center p-3*/
export default function Footer() {
  return (
    
    <MDBFooter bgColor='light' className='text-center text-lg-left '>
      <div className='' style={{ backgroundColor: 'rgb(7, 218, 99)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
       
      </div>
    </MDBFooter>

  );
}