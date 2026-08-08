import { team } from "../Data/team"

function ChildComponentOne(){
    const result = team.map(member =>{
        return member.id*2;
     })
    return (
        <div>
            {result}
        </div>
    )
}
export default ChildComponentOne