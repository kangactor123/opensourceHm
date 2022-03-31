import React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Box, BoxTitle, Wrapper } from "./menu.style";

const WrapperVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
  },
};

function Menu() {
  return (
    <Wrapper
      variants={WrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Box to="/add">
        <AddIcon />
        <BoxTitle>Add</BoxTitle>
      </Box>
      <Box to="/trash">
        <DeleteIcon />
        <BoxTitle>Trash</BoxTitle>
      </Box>
      <Box to="/divide?kind=done">
        <CheckIcon />
        <BoxTitle>Done</BoxTitle>
      </Box>
      <Box to="/divide?kind=do">
        <AccessibilityNewIcon />
        <BoxTitle>Do</BoxTitle>
      </Box>
    </Wrapper>
  );
}

export default React.memo(Menu);
