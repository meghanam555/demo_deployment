import Video1 from "../assets/V1.mp4"
import Video2 from "../assets/V2.mp4"
export function Video(){
    return(
        <div>
        <video controls>
            <source src={Video1} style={{width:"80px"}} ></source>
        </video>
        <video controls>
            <source src={Video2} style={{width:"40px"}}></source>
        </video>
        </div>
    )
}