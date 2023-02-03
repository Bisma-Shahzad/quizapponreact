function Input(a) {
    return <input style={{width: "900px", border: 'none', borderBottom: '2px solid black', height: '40px'}} onChange={a.change} value = {a.value} placeholder={a.place}/>
    
}

export default Input;