import React from 'react';
import {Link} from 'react-router-dom'

const Header = props => {
   return (
      <div className='header'>
         <h2>NiceToMeetMe</h2>
         <Link to='/'>{`< Back to Conference Room`}</Link>
      </div>
   )
}

export default Header;