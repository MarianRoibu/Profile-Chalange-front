import styled from "styled-components";
import { colors, device } from "../config";

export const ButtonFollowStyled = styled.button`
    padding: 5px 40px;
    border-radius: 5px;
    border: 1px solid #FCFDFC;
    font-size: 1rem;
    margin: 5%;
    background-color: ${colors["dark-blue"]};

    &.followed{
        background: ${colors.blue};
    }

    @media ${device.desktop}{
        margin:5% 0;
    }
`