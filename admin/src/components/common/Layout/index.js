import React, { useState } from 'react';
import { CssBaseline, Drawer, Box, Container } from '@mui/material';

import Navbar from '../Navbar';


const Layout = ({ children }) => {
  const [sidebar, showSidebar] = useState(false);

  const handleSidebar = (event) => {
    showSidebar(!sidebar);
  };

  return (
    <div>
      <React.Fragment>
        <Navbar handleSidebar={handleSidebar} /> <Drawer
          anchor="left"
          open={sidebar}
          onClose={handleSidebar}
        >
          <div style={{width: 280}}>
            <p>Nav items</p>
          </div>
        </Drawer>
      </React.Fragment>

      {/* Main Content */}
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        {children}
      </Container>
    </div>
  );
}

export default Layout;
