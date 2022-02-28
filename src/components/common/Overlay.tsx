import { motion } from "framer-motion";
import styled from "styled-components";
import UpdateBoard from "./UpdateBoard";

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
`;

function Overlay() {
  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <UpdateBoard />
    </Wrapper>
  );
}

export default Overlay;
