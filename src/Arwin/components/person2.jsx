import Card from 'react-bootstrap/Card';
import im from './person2.svg'

import '../css/person.css'

function Person2() {
  return (
    <div className='t_card'>
    <Card className='p2_card'>
      <div style={{height:'200px',width:'200px'}}>
      <Card.Img  variant="top" src={im} />
      </div>
        <Card.Title style={{textAlign:'center',color:'white'}}><b>Sadagopan M S</b></Card.Title>
        {/* <Card.Title style={{textAlign:'center',color:'white'}}>Chartered Accountant</Card.Title> */}
        <div style={{textAlign:'center',margin:'12px',color:'white',fontSize:'13px'}}>
        <Card.Text>
        With expertise in GST and Income-tax, I excel in management consulting, optimizing strategies with my extensive acumen. Passionate about financial literacy, I provide clients with invaluable insights.
        </Card.Text>
        </div>
      <Card.Body>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
       <a href="mailto:Sadagopan.08@gmail.com"><button style={{padding:'14px',borderRadius:'25px',margin:'auto',background:'white',color:'#DA916D'}}>Sadagopan.08@gmail.com</button></a>
        </div>
      </Card.Body>
    </Card>
    </div>
 
  );
}

export default Person2;