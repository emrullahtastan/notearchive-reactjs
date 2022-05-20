import {PromptContext} from './contexts/PromptContext'
import Prompt from "./tools/modal";
import {useState} from "react";
import PromptDefaultValues from "./contexts/PromptDefaultValue";

function PromptConfig(props) {
    let obj=JSON.parse(JSON.stringify(PromptDefaultValues))
    const [prompt, setPrompt] = useState(obj)

    const data = {
        prompt, setPrompt
    };

    return (
        <PromptContext.Provider value={data}>
            <Prompt/>
            <div style={{height: ''}}>{props.children}</div>
        </PromptContext.Provider>
    );

}

export default PromptConfig;