import Button from 'react-bootstrap/Button';


function Buttons(props) {
    return (
      <Button variant='primary' onClick={props.click} style={{margin: '10px'}}>
        {props.btnValue}
      </Button>
    );
  }
  
  export default Buttons;