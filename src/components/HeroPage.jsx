import AdiImg from './../assets/HeroShoebg.png'
import { Link } from 'react-router-dom'

export default function HeroPage(){
    return(
       <section className='flex flex-col flex-wrap content-center justify-center'>
        <div className='relative '><h1 className='font-bold' style={{fontSize:'300px', textShadow:'1px 1px 2px black'}}>ADIDAS</h1>
        <img src={AdiImg} style={{height:'700px', width:'700px', transform:'translate(-50%,-43%)'}}
         className='absolute top-1/2 left-1/2'></img></div>
         <div className='flex-col flex justify-center items-center'><p className='mt-10 text-center'>Explore the new collections 
         designed with<br/>
            comfort and style in mind</p>
            <Link to='/products'>
               <button className='bg-black text-white
            p-2 mt-5 rounded-md inline-block' >Shop Now →</button></Link></div>
       </section> 
    )
}