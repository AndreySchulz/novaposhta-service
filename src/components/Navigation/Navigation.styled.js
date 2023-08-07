import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 20px;
`
export const NaigationLink = styled(NavLink)`
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
   &:hover{
        color: #FF392E;
    }
`