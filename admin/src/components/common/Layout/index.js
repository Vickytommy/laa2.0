import React, { useState } from 'react';
import { Drawer } from '@mui/material';

import Navbar from '../Navbar';


const Layout = ({ children }) => {
  const [sidebar, showSidebar] = useState(false);

  const handleSidebar = (event) => {
    showSidebar(!sidebar);
  };

  return (
    <div>
      <React.Fragment>
          <Navbar handleSidebar={handleSidebar} />
          {children}
          <Drawer
            anchor="left"
            open={sidebar}
            onClose={handleSidebar}
          >
            <div style={{width: 280}}>
              <p>Nav items</p>
            </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}

export default Layout;
