import React, {useState} from 'react';
import brush from './pictures/brush.png'
import bucket from './pictures/bucket.png'
import eraser from './pictures/eraser.png'

function Tools({handleUtensil}) {
    const [toolSelected, setToolSelected] = useState("brush")

    return (
        <div>
            <button
                className={toolSelected === "brush" ? 'selected-tool tool-button' : 'not-selected-tool tool-button'}
                name="brush"
                onClick={function(){handleUtensil("brush", "tool"); setToolSelected("brush")}}
                title="Brush"
            >
                <img
                    src={brush}
                    alt="brush"
                    width="35px"
                    height="35px"
                />
            </button>

            <button
                className={toolSelected === "bucket" ? 'selected-tool tool-button' : 'not-selected-tool tool-button'}
                onClick={function(){handleUtensil("bucket", "tool"); setToolSelected("bucket")}}
                title="Eraser"
            >
                <img
                    src={bucket}
                    alt="bucket"
                    width="35px"
                    height="35px"
                />
            </button>

            <button
                className={toolSelected === "eraser" ? 'selected-tool tool-button' : 'not-selected-tool tool-button'}
                onClick={function(){handleUtensil("eraser", "tool"); setToolSelected("eraser")}}
                title="Fill"
            >
                <img
                    src={eraser}
                    alt="eraser"
                    width="35px"
                    height="35px"
                />
            </button>
        </div>
    );
}

export default Tools;
