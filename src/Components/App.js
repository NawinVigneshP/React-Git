import { Accessibility,AlarmCheck,AirVent,Activity} from "lucide-react";
import { Currency,Crown,Dices,Gamepad,Wind,Wand,Wine,View } from "lucide-react";
const App=()=>{
  return(
    <div id="back">
      <h1 style={{textAlign:'center'}}>ICONS FROM LUCIDE</h1>
      <table className='sty fy' border={7}>
      <tr>
        <td><Accessibility size={100} color='black' strokeWidth={2} ></Accessibility></td>
        <td><AlarmCheck size={100} color='black' strokeWidth={2}/></td>
        <td><AirVent size={100} color='black' strokeWidth={2}/></td>
        <td><Activity size={100} color='black' strokeWidth={2}/></td>
      </tr>
      <tr>
        <td><Currency size={100} colour='grey' strokeWidth={2}></Currency></td>
        <td><Crown size={100} colour='black' strokeWidth={2}/></td>
        <td><Dices size={100} colour='violet' strokeWidth={2}/></td>
        <td><Gamepad size={100} colour='grey' strokeWidth={2}/></td>
      </tr>
      <tr>  
        <td><Wind size={100} colour='green' strokeWidth={2}/></td>
        <td><Wand size={100} colour='yellow' strokeWidth={2}/></td>
        <td><Wine size={100} colour='blue' strokeWidth={2}/></td>
        <td><View size={100} colour='red' strokeWidth={2}/></td>
      </tr>
      </table>
    </div>
  )
}
export default App;