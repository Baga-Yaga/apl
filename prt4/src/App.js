import React from "react";
import { Button, TextField, Checkbox, Switch, Card, CardContent } from "@mui/material";
import "./App.css"; // external CSS (optional)

function MUIDemo() {
  return (
    <div className="muiContainer">

      <h2 className="muiTitle">Material UI Components Demo</h2>

      {/* 1. MUI Button */}
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
      <br /><br />

      {/* 2. MUI TextField */}
      <TextField label="Enter Name" variant="outlined" fullWidth />
      <br /><br />

      {/* 3. MUI Checkbox */}
      <Checkbox /> Accept Terms
      <br /><br />

      {/* 4. MUI Switch */}
      <Switch /> Enable Notifications
      <br /><br />

      {/* 5. MUI Card */}
      <Card className="muiCard">
        <CardContent>
          This is a Material UI Card Component.
        </CardContent>
      </Card>

    </div>
  );
}

export default MUIDemo;
