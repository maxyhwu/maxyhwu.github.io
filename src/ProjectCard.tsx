import React, { useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Modal, Button } from "@mui/material";
import { Project } from "./Projects";

const ProjectCard: React.FC<Project> = ({ name, image, description, details }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={handleOpen}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", borderRadius: "8px", maxWidth: "80vw" }}>
          <Button variant="contained" onClick={handleClose} style={{ position: "absolute", top: "5px", right: "5px" }}>Close</Button>
          <div style={{ marginBottom: "20px" }}>
            <img src={image} alt={name} style={{ width: "100%", height: "auto", maxHeight: "400px" }} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Typography variant="h5">{name}</Typography>
            <Typography>{description}</Typography>
          </div>
          <div>
            <Typography variant="h6">Details:</Typography>
            <Typography>{details}</Typography>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
