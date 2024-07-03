import {
  AppBar,
  Button,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Form from "./components/Form";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Cards from "./components/Cards";

function App() {
  const [val, setVal] = useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <LogoDevIcon sx={{ fontSize: "50px" }} />
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={val}
            onChange={(e, val) => setVal(val)}
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop:"100px",marginLeft:"50px" }}>
        <Cards />
      </div>
      {/* <Form/> */}
    </div>
  );
}

export default App;
