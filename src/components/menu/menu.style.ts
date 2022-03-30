import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
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

export const Box = styled(Link)`
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
  }
`;

export const BoxTitle = styled.span`
  font-size: 1rem;
`;
