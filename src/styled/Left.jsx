import styled from "styled-components";
import classes from '../components/home/Link.module.scss'

const Left = styled.div.attrs({
    className: classes.left,
    })`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: red;
  transition: .5s;
  z-index: 1;
  border-right: 4px solid #1d1d1d;
`;

export default Left;
