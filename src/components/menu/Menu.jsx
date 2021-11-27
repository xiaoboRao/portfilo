import {menuData} from "../componentData/menuData"
import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
    return (
        <div className={"menu "+(menuOpen?"active":"")}>
            <ul>
               {menuData.data.map(e=>(
                <li onClick={()=>setMenuOpen(!menuOpen)}><a href={e.href} key={e.name}>{e.name}</a></li>
               )  
               )}
               
            </ul>
            
        </div>
    )
}
