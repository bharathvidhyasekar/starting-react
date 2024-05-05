import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "../components/TabButton.jsx";

export default function Examples(){

   
    const [selectedTopic,setSelectedTopic]=useState();

    function clickHandle(selectbutton){
      setSelectedTopic(selectbutton);
      console.log(selectedTopic)
    
    }
    return(
    <section id='examples'>
    <h2>Examples</h2>
    <menu>
    <TabButton isSelected={selectedTopic==="components"} select={()=>clickHandle("components")}>Components</TabButton>
    <TabButton isSelected={selectedTopic==="jsx"} select={()=>clickHandle("jsx")}>JSX</TabButton>
    <TabButton isSelected={selectedTopic==="props"} select={()=>clickHandle("props")}>Props</TabButton>
    <TabButton isSelected={selectedTopic==="state"} select={()=>clickHandle("state")}>State</TabButton>
    </menu>
    {!selectedTopic && <p>please select the topic</p>}
    {selectedTopic &&
    <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].descreption}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>


    </div>}
    
    </section>)
}