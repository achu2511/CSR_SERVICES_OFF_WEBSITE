
import Carousal from '../components/Carousal'
import Foot from '../components/foot'
import "../css/review.css"

const Review = () => {
  return (
    <div className='review-cont'>
      <div style={{margin:'7vh'}}>
        <span className='hear-header'>HEAR ABOUT </span><label style={{fontSize:'50px'}} className="us-label">US</label>
        </div>
         <Carousal />
         <div style={{padding:'20px'}}>
         <span className='text'>
         Partner with CSR Consultancy Services and leverage Our expertise in tax audit, internal operations streamlining, tax advisory, and more for a holistic approach to financial success.
         </span>
         </div>
        <Foot />
    </div>
  )
}

export default Review