import './navbar.css'
import { Link} from "react-router-dom";

export default function nav() {
  return (
   
    <div className='nav' >
        <div className='left' data-testid='navbar'>
          <i className="icon fa-solid fa-champagne-glasses"></i>
        </div>
        <div className='middle'>
          <ul className='list'>
            <li className='listItem'>
              <Link className='link' to="/" data-testid='link-1'>HOME</Link>          
            </li>
            <li className='listItem'>              
              <Link className='link' to="/random" data-testid='link-2'>RANDOM RECIPE</Link>            
            </li>
            <li className='listItem'>              
              <Link className="link" to="/write" data-testid='link-3'>WRITE POST</Link>             
            </li>
          </ul>
        </div>
        <div className='right'>
          <div className='login'>LOGIN</div>
        </div>
    </div>
  
  )
}
