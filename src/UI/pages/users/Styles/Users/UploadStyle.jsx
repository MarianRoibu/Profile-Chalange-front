import styled from "styled-components";
import { HiOutlinePencil } from "react-icons/hi"
import { colors, device  } from "./config";
import { ButtonFollowStyled } from "./components/FollowButtonStyle";

export const ContainerUpload = styled.div`
margin-bottom: 70px;
@media ${device.desktop}{
    width: 50%;
    margin: 0 auto;
}
`

export const ContainerUploaderImage = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`

export const SpanDragorClick = styled.span`
`

export const PlacerDivUpload = styled.div`
width:200px;
height:200px;
background: ${colors.grey};
border-radius:5px;
display: flex;
    align-items: center;
    justify-content: center;
`

export const PlacerImageUpload = styled.img`
width:100%;
height:100%;
border-radius:5px;
object-fit: cover;
`

export const IconNoUploadImage = styled(HiOutlinePencil)`
font-size:5rem;
background: ${colors.grey};
`

export const ContainerInputs = styled.div`
margin: 8% 0;
`

export const ContainerInputsText = styled.div`
margin: 8% 0;
`


export const LabelInputForm = styled.label`
`

export const InputForm = styled.input`
border: 0;
    border-bottom: 1px solid ${colors.white};
    width: 100%;
    font-size: 1.2rem;
    padding: 10px 0 5px;
    background-color: ${colors["dark-blue"]};
&:focus{
    outline:none;
    border-bottom: 1px solid ${colors.blue};
}
`

export const ContainerButtonsGenre = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

export const SpanGenreButton = styled(ButtonFollowStyled)`
padding: 5px 0px;
@media ${device.desktop}{
    margin: 5%;
}
`

export const PViewMore = styled.p`
text-align: center;
color:${colors.grey};
`

export const ButtonAddTrack = styled(ButtonFollowStyled)`
margin: 0;
`

export const ContainerDeleteSong = styled.div`
height: 1.5rem;
    display: block;
    `

export const SpanDeleteSong = styled.span`
float: right;
display: flex;
& > svg{
    font-size: 1.2rem;
}
`

export const ContainerUploadButton = styled.div`
display: flex;
    justify-content: center;
    margin-top: 10%;
`

export const ButtonUploadAlbum = styled.button`
font-size: 1.5rem;
    border: 0;
    border-radius: 5px;
    background: blue;
    padding: 10px 20%;
    cursor: pointer;
`

export const ErrorMessage = styled.span`
    background-color: red;
    padding: 5px;
    margin: 5px 0;
    display: block;
    text-align: center;
    border-radius: 5px;
    width: 100%;
`

export const MessageContainer = styled.div`
    background-color: ${colors.darkblue}; 
    color: ${colors.white};
    padding: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MessageText = styled.p`
    color:${colors.blue};
    margin: 0;
    text-align: center;
`