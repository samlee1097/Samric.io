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
            modNum = 37;
            break;
        case 'hatColor':
        case 'clothesColor':
        case 'accessoriesColor':
            modNum = 18;
            break;
        case 'hairColor':
        case 'facialHairColor':
        case 'clothes':
            modNum = 12;
            break;
        case 'accessories':
            modNum = 6;
            break;
        case 'facialHair':
        case 'clotheGraphics':
            modNum = 10;
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
        const newURL = `https://avatars.dicebear.com/api/avataaars/:seed.svg?top[]=${property.top.items.enum[avatar.top]}&hatColor[]=${property.hatColor.items.enum[avatar.hatColor]}&hairColor[]=${property.hairColor.items.enum[avatar.hairColor]}&accessories[]=${property.accessories.items.enum[avatar.accessories]}&accessoriesColor[]=${property.accessoriesColor.items.enum[avatar.accessoriesColor]}&facialHair[]=${property.facialHair.items.enum[avatar.facialHair]}&facialHairColor[]=${property.facialHairColor.items.enum[avatar.facialHairColor]}&clothes[]=${property.clothes.items.enum[avatar.clothes]}&clothesColor[]=${property.clothesColor.items.enum[avatar.clothesColor]}&eyes[]=${property.eyes.items.enum[avatar.eyes]}&eyebrow[]=${property.eyebrow.items.enum[avatar.eyebrow]}&mouth[]=${property.mouth.items.enum[avatar.mouth]}&skin[]=${property.skin.items.enum[avatar.skin]}&clotheGraphics[]=${property.clotheGraphics.items.enum[avatar.clotheGraphics]}`;

        if (number - 1 < 0) {
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
        const newURL = `https://avatars.dicebear.com/api/avataaars/:seed.svg?top[]=${property.top.items.enum[avatar.top]}&hatColor[]=${property.hatColor.items.enum[avatar.hatColor]}&hairColor[]=${property.hairColor.items.enum[avatar.hairColor]}&accessories[]=${property.accessories.items.enum[avatar.accessories]}&accessoriesColor[]=${property.accessoriesColor.items.enum[avatar.accessoriesColor]}&facialHair[]=${property.facialHair.items.enum[avatar.facialHair]}&facialHairColor[]=${property.facialHairColor.items.enum[avatar.facialHairColor]}&clothes[]=${property.clothes.items.enum[avatar.clothes]}&clothesColor[]=${property.clothesColor.items.enum[avatar.clothesColor]}&eyes[]=${property.eyes.items.enum[avatar.eyes]}&eyebrow[]=${property.eyebrow.items.enum[avatar.eyebrow]}&mouth[]=${property.mouth.items.enum[avatar.mouth]}&skin[]=${property.skin.items.enum[avatar.skin]}&clotheGraphics[]=${property.clotheGraphics.items.enum[avatar.clotheGraphics]}`;
        
        dispatch(rightArrow({
            ...avatar,
            [name]: (number + 1) % modNum,
            imageURL: `${newURL}`
        }))
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