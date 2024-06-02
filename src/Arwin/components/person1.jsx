import Card from 'react-bootstrap/Card';
import im from './person1.svg'
import '../css/person.css'


function Person1() {
  return (
    <div className='t_card'>
    <Card className='p_card'>
      <div style={{height:'200px',width:'200px'}}>
      <Card.Img  variant="top" src={im} />
      </div>
        <Card.Title style={{textAlign:'center'}}><b>Chaitanya Raj R</b></Card.Title>
        {/* <Card.Title style={{textAlign:'center',color:'gray'}}>Chartered Accountant</Card.Title> */}
        <div style={{textAlign:'center',margin:'10px',fontSize:'13px'}}>
        <Card.Text>
        I am your catalyst for financial success, leveraging expertise in accounting software, finance tech, and investment strategies to drive sustainable growth and craft dynamic solutions.
        </Card.Text>
        </div>
      <Card.Body>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>

        <a href="mailto:Csrconsultancy.01@gmail.com"><button style={{padding:'14px',borderRadius:'25px',margin:'auto',background:'#DA916D',color:'white'}}>Csrconsultancy.01@gmail.com</button></a>
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Person1;