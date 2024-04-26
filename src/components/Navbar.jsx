import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';


export default function Navbar(){

  const {isUserSignedIn} = useContext(AuthContext);

    return (
        <nav className="flex justify-between">
            <p className="mr-auto text-3xl italic font-bold">Run</p>
            <a href="#ok" className="no-underline text-xl mr-4"><Link to="/">Home</Link></a>
            <a href="#ni" className="no-underline text-xl mr-4"><Link to="/products">Shop</Link></a>
            <a href="#ii" className="mr-4"><Link to="/cart"><svg
  aria-hidden="true"
  focusable="false"
  data-prefix="fas"
  data-icon="bag-shopping"
  className="svg-inline--fa fa-bag-shopping h-6 w-6 mt-2"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512">
  <path
    fill="currentColor"
    d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 
    208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160
     160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 
     232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 
     208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"
  />
</svg></Link>
</a>
           <Link to='SignInPage'><a href="#gg" className="text-xl mr-4 "><button className="rounded bg-transparent 
           border-2
             border-black p-1 hover:bg-black hover:text-white">{isUserSignedIn ? ('Profile') : ('Register') }</button></a></Link>
        </nav>
    )
}