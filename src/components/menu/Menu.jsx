import {menuData} from "../componentData/menuData.js"
import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen?"active":"")}>
            <ul>
               {menuData.data.map(e=>(
                <li key={e.name} onClick={()=>setMenuOpen(!menuOpen)}><a href={e.href} key={e.name}>{e.name}</a></li>
               )  
               )}
               
            </ul>
            
        </div>
    )
}
