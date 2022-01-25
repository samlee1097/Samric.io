import React from 'react';
import "../../Stylings/AvatarSelect.css";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";
import * as style from '@dicebear/avatars-avataaars-sprites';

// Redux Elements
import {useDispatch} from "react-redux";
import {leftArrow, rightArrow} from "../../Features/avatarSprite";

function AvatarSelect({avatar, name, number, sectionName}) {
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
        const property = style.schema.properties;
        const newURL = `https://avatars.dicebear.com/api/avataaars/:seed.svg?top[]=${property.top.items.enum[avatar.top]}&hairColor[]=${property.hairColor.items.enum[avatar.hairColor]}&clothes[]=${property.clothes.items.enum[avatar.clothes]}&clothesColor[]=${property.clothesColor.items.enum[avatar.clothesColor]}&eyes[]=${property.eyes.items.enum[avatar.eyes]}&eyebrow[]=${property.eyebrow.items.enum[avatar.eyebrow]}&mouth[]=${property.mouth.items.enum[avatar.mouth]}&skin[]=${property.skin.items.enum[avatar.skin]}`;
        console.log(number)
        if(name === 'top' && number - 1 < 6){
            number = modNum;
        }
        else if (number - 1 < 0) {
            number = modNum;
        }

        dispatch(leftArrow({
            ...avatar,
            [name]: number - 1,
            imageURL: `${newURL}`
        }))
    } 

    const clickRight = () => {
        const property = style.schema.properties;
        const newURL = `https://avatars.dicebear.com/api/avataaars/:seed.svg?top[]=${property.top.items.enum[avatar.top]}&hairColor[]=${property.hairColor.items.enum[avatar.hairColor]}&clothes[]=${property.clothes.items.enum[avatar.clothes]}&clothesColor[]=${property.clothesColor.items.enum[avatar.clothesColor]}&eyes[]=${property.eyes.items.enum[avatar.eyes]}&eyebrow[]=${property.eyebrow.items.enum[avatar.eyebrow]}&mouth[]=${property.mouth.items.enum[avatar.mouth]}&skin[]=${property.skin.items.enum[avatar.skin]}`;
        
        if(name === 'top' && number + 1 > 32){
            console.log(number)
            dispatch(rightArrow({
                ...avatar,
                [name]: 6,
                imageURL: `${newURL}`
            }))
        } else {
            dispatch(rightArrow({
                ...avatar,
                [name]: (number + 1) % modNum,
                imageURL: `${newURL}`
            }))
        }
        
    }
    
    return (
        <div title={name} className="avatar-select-div">
            <BsFillArrowLeftCircleFill onClick={clickLeft}/>
                <div className="avatar-image-container">
                    {sectionName}
                </div>
            <BsFillArrowRightCircleFill onClick={clickRight}/>
        </div>
    );
}

export default AvatarSelect;