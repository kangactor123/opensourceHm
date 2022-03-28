import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
  position: absolute;
  width: 20vw;
  top: 70px;
  background-color: white;
  z-index: 99;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  border-radius: 3px;
  background-color: #b8fff9;
`;

const MenuBox = styled.div`
  display: flex;
  height: 50px;
  border: 1px solid #85f4ff;
  border-radius: 5px;
  align-items: center;
  padding-left: 20px;
  gap: 25px;
  background-color: #85f4ff;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    font-size: 14px;
  }
`;

const MenuName = styled.span`
  display: flex;
`;

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
      <MenuBox>
        <AddIcon />
        <Link to="/add">Add</Link>
      </MenuBox>
      <MenuBox>
        <DeleteIcon />
        <Link to="/trash">Trash</Link>
      </MenuBox>
      <MenuBox>
        <CheckIcon />
        <MenuName>Did</MenuName>
      </MenuBox>
      <MenuBox>
        <AccessibilityNewIcon />
        <MenuName>Do</MenuName>
      </MenuBox>
    </Wrapper>
  );
}

export default React.memo(Menu);
