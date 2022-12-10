import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='w-100 text-center text-lg-left'>
      <div className='text-center p-1' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <NavLink className='text-dark' to='/'>
          sketz.com
        </NavLink>
      </div>
    </MDBFooter>
  );
}

export default Footer;