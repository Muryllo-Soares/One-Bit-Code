export default function Inputs (props){
    return(
        <input type="number"
        id="passwordSize"
        min={1} 
        value={props.passwordSize}
        onChange={(ev) => props.setPassWordSize(ev.target.value)}
        />
    )
}
