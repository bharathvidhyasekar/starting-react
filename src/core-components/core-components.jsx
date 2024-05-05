
import { CORE_CONCEPTS } from "../data.js"
import CoreComponent from "../components/core-concepts.jsx"
export default function Components(){
    return(
    <section id="core-concepts">
<h2>core concepts</h2>
<ul>
 {CORE_CONCEPTS.map((coreitems)=> <CoreComponent key={coreitems.title} {...coreitems}/>)}
  
</ul>
</section>
    )
}
