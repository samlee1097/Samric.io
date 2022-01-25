import React from 'react';
import "../../Stylings/AvatarSelect.css";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";

// Redux Elements
import {useDispatch} from "react-redux";
import {leftArrow, rightArrow} from "../../Features/avatarSprite";

function AvatarSelect({avatar, name, number, sectionName, avatarURL, setFunAlert, funAlert}) {
    const dispatch = useDispatch();
    let modNum = 0;
    switch(name){
        case 'top':
            modNum = 33;
            break;
        case 'clothesColor':
            modNum = 18;
            break;
        case 'hairColor':
        case 'clothes':
            modNum = 12;
            break;
        case 'eyes':
            modNum = 15;
            break;
        case 'eyebrow':
            modNum = 19;
            break;
        case 'mouth':
            modNum = 13;
            break;
        case 'skin':
            modNum =  7;
            break;
        default:
            break;
    }

    const clickLeft = () => {

        if(funAlert + 1 > 13){
            setFunAlert(()=>1)
        } else {
            setFunAlert(num => num+1)
        }

        if(name === 'top' && number - 1 < 6){
            number = modNum;
        }
        else if (number - 1 < 0) {
            number = modNum;
        }

        dispatch(leftArrow({
            ...avatar,
            [name]: number - 1,
            imageURL: `${avatarURL}`
        }))
    } 

    const clickRight = () => {    

        if(funAlert + 1 > 13){
            setFunAlert(()=>1)
        } else {
            setFunAlert(num => num+1)
        }

        if(name === 'top' && number + 1 > 32){
            dispatch(rightArrow({
                ...avatar,
                [name]: 6,
                imageURL: `${avatarURL}`
            }))
        } else {
            dispatch(rightArrow({
                ...avatar,
                [name]: (number + 1) % modNum,
                imageURL: `${avatarURL}`
            }))
        }
    }
    
    return (
        <div title={name} className="avatar-select-div">
            <BsFillArrowLeftCircleFill className="arrow-left" onClick={clickLeft}/>
                <div className="avatar-image-container">
                    {sectionName}
                </div>
            <BsFillArrowRightCircleFill className="arrow-right" onClick={clickRight}/>
        </div>
    );
}

export default AvatarSelect;