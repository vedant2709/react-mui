import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import React, { useState } from "react";

function Cards() {
    const [open,setOpen]=useState(false)
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          height={"140"}
          image="https://images.unsplash.com/photo-1690743300330-d190ad8f97dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmVjdG9yJTIwYXJ0fGVufDB8fDB8fHww"
        />
        <CardContent>
            <Typography variant="h5">
                Web Design
            </Typography>
            <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quis.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary" onClick={()=>setOpen(true)}>Delete</Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Are you sure to delete this products?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>cancel</Button>
            <Button >Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cards;
