import Person1 from '../components/person1'
import Person2 from '../components/person2'
import "../css/person.css"
const Person = () => {
  return (
    <div>
    <div style={{textAlign:'center',marginTop:'0px'}}>
    <h1>
  <span style={{color:'black',fontSize:'6vh'}}>Who are    </span>
  <span style={{ 
    background: `-webkit-linear-gradient(left, #DA916D, #FFE2D0)`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    color: 'transparent' ,fontSize:'6vh'
  }}>
      &nbsp;We?</span>
</h1>

    </div>
    <div className='person-container'>
       <Person1></Person1>
       <Person2></Person2>
    </div>
    </div>
  )
}

export default Person;