

function Quotetime() {
    function zeroFill( number, width )
    {
        width -= number.toString().length;
        if ( width > 0 )
        {
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number + "";
    }

    let selection = [];
    const d = new Date()
    const Hour = d.getHours()
    const from = (Hour <= 9 ? 9 : Hour )
    for(var i = from; i < 21; i++)
    {
        var j = zeroFill(i, 2);
        selection.push(`${j}:00`);
        selection.push(`${j}:15`);
        selection.push(`${j}:30`);
        selection.push(`${j}:45`);
    }


    return <select>
        {selection.map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        })}
    </select>;

}

export default Quotetime;