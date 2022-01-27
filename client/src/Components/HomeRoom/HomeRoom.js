import React, {useEffect, useState} from 'react';
import AvatarSelect from './AvatarSelect';
import {FaPaintBrush} from "react-icons/fa";
import {BsFillSuitHeartFill, BsGithub} from "react-icons/bs";
import "../../Stylings/HomeRoom.css";
import chat from "./chat.png"
import * as style from '@dicebear/avatars-avataaars-sprites';
import { v4 as uuidv4 } from 'uuid';

// Redux Elements
import {useSelector, useDispatch} from "react-redux";
import {updateUsername} from "../../Features/userReducer";

function HomeRoom({setRoom, setGameId, setId}) {
    // Redux Elements
    const dispatch = useDispatch();
    const avatar = useSelector(state => state.avatar.value);
    const [username, setUsername] = useState('');
    const [image, setImage] = useState(avatar.imageURL);
    const [funAlert, setFunAlert]=useState(0);

    const funMessages = ["Customizes your avatar!", "Look at me!", "I look so good",  "Look good, play good", "My dog will like this", "Let's kick some butt!", "A new look?", "Mirror mirror on the wall", "This is gonna work!", "I look amazing!", "Wow, what a look!", "Model award goes to...", "YES!! I like this!", "I'm the only ten I see!"];

    function handleChange(event){
        setUsername(()=> event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch(updateUsername({[username]: username}));

        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                avatar: image,
                points: 0,
                isDrawing: false
            })
        })
        .then(res => res.json())
        .then(data=>{
            setId(()=>data.id)
        })
        
        if(event.nativeEvent.submitter.name === "public"){
            setRoom(()=>"game")
        } else {
            fetch('/gamerooms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name: uuidv4()
                })
            })
            .then(res => res.json())
            .then(data=>{
                setGameId(()=>data.id)
                setRoom(()=>"private")
            })
        }
    }
    
    // Image URL
    const property = style.schema.properties;
    const avatarURL = `https://avatars.dicebear.com/api/avataaars/:seed.svg?top[]=${property.top.items.enum[avatar.top]}&hairColor[]=${property.hairColor.items.enum[avatar.hairColor]}&clothes[]=${property.clothes.items.enum[avatar.clothes]}&clothesColor[]=${property.clothesColor.items.enum[avatar.clothesColor]}&eyes[]=${property.eyes.items.enum[avatar.eyes]}&eyebrow[]=${property.eyebrow.items.enum[avatar.eyebrow]}&mouth[]=${property.mouth.items.enum[avatar.mouth]}&skin[]=${property.skin.items.enum[avatar.skin]}`;

    const avatarArray = [];
    for (const [key, value] of Object.entries(avatar)) {
        avatarArray.push(<AvatarSelect avatar ={avatar} name={key} number={value} sectionName={(key[0].toUpperCase() + key.slice(1,key.length).replace("C", " C"))} avatarURL={avatarURL} setFunAlert={setFunAlert} funAlert={funAlert}/>)
    }
    avatarArray.pop();

    // Live changes to the image
    useEffect(()=>{setImage(avatarURL)},[avatarURL])
    
    return (
        <div className="App">
            <header id="homepage-header">
                <h1 id="rainbow-title">
                    <span>S</span>
                    <span>a</span>
                    <span>m</span>
                    <span>r</span>
                    <span>i</span>
                    <span>c</span>
                    <span>.</span>
                    <span>i</span>
                    <span>o</span>
                    &nbsp;
                    <FaPaintBrush id="paintbrush"/>
                </h1>
            </header>

            <main id="homepage-main">
                <form id="character-creation" className="homepage-containers" onSubmit={event=> handleSubmit(event)}>
                    <label>
                        <input
                            type="text"
                            name="name-input"
                            placeholder="Enter your name :^)"
                            autoComplete="off"
                            minLength={1}
                            maxLength={32}
                            required
                            onChange={handleChange}
                        >
                        </input>
                    </label>
                    <div id="avatar-container">
                        <img id="avatar-image" src={image} alt="Avatar"/>
                    </div>
                    <div id="customize-avatar-message">
                        <img id="edit-alert" src={chat}/>
                        <p id="edit-alert-message">{funMessages[funAlert]}</p>
                    </div>
                    <div id="avatar-selection">
                        {avatarArray}
                    </div>

                    <div id="homepage-buttons-container">
                        <input
                            type="submit"
                            id="play-button"
                            className="homepage-button"
                            name="public"
                            value="Play!"
                        />
                        <input
                            type="submit"
                            id="private-button"
                            className="homepage-button"
                            name="private"
                            value="Create a private room"
                        />
                    </div>
                </form>

                <section id="details-section" className="homepage-containers">
                    <details open>
                        <summary>News</summary>
                            <div id="news-update">
                                Hello World!<br/><br/>
                                We just:<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟢<strong>Homepage:</strong> Implemented "Avataaars" customization options.<br/>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟢Implemented early phases of <strong>Redux</strong> into our application.<br/>
                                
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🟢Began looking into <strong>Socket.io</strong> to continue towards cooperative play!
                                <br/><br/>

                                Please continue to check in as we work together to flesh out the rest of the application! :)<br/>
                                <br/>
                                <i>Thanks so much</i> <BsFillSuitHeartFill style={{color: "red"}}/>
                            </div>
                    </details>

                    <details>
                        <summary>About</summary>
                            <div>
                                This is a website clone based on <a className="skribblio" href="https://skribbl.io/" target="blank"><b>Skribbl.io</b></a>; a website where you can play a Pictionary-style game.<br/>
                                One game consists of any number of rounds, where one person is the artist and the others are the guessers. The artist will draw out their chosen word while the others will have to guess what it is in order to gain points.<br/>
                                The person with the most points when all the rounds are up will then be crowned the winner. WOOOOOO!
                            </div>
                    </details>
                        
                    <details>
                        <summary>How to Play</summary>
                            <div>
                                <b>Artist:</b> When you're the artist, you will have to choose a word from three options and try to best draw that word out in the allotted time.<br/>
                                <b>Guesser:</b> When you're a guesser, you'll have to try to figure out what the artist is drawing. Type your guess into the chat and if you're right, you'll get points!<br/>
                                Be fast though; the earlier you guess the drawn word, the more points you get.<br/>
                            </div>
                    </details>
                </section>
                
            </main>

            <footer id="homepage-footer">
                <div>
                    <BsGithub style={{color: "white", fontSize: "18px"}}/> made by <a href="https://github.com/samlee1097" target="blank">@samlee1097</a> & <a href="https://github.com/Kanginyi" target="blank">@Kanginyi</a>
                </div>

                <div>
                    <a href="#">Contact</a>&nbsp;
                    <a href="#">Terms of Service</a>&nbsp;
                    <a href="#">Credits</a>
                </div>

                <div>
                    We are not responsible for any user generated content<br/>
                    (drawings, messages, usernames)
                </div>
            </footer>
            
        </div>
    )
}

export default HomeRoom;
