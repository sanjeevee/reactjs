import React from 'react';
import'./res.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import abt1 from './abt1.jpeg';
import abt2 from './abt2.jpeg';
import abt3 from './abt3.jpeg';
import abt4 from './abt4.jpeg';
function About(){
    return(
        <>
        <div className='container-fluid abg'>
            <div className='row justify-content-around '>
            <h1 className='text-white abh1'>About our fram</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                <div className='col-lg-3 card abcar '>
                    <h1 className='text-success'>Vegetables</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                    <img className='card-img-bottom' src={abt1}/>
                </div>
                <div className='col-lg-3 card abcar'>
                    <h1 className='text-success'>How it works</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                    <img className='card-img-bottom' src={abt2}/>
                </div>
                <div className='col-lg-3 card abcar'>
                    <h1 className='text-success'>Flexibility</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                    <img className='card-img-bottom' src={abt3}/>
                </div>
                <div className='col-lg-3 card abcar'>
                    <h1 className='text-success'>Fram Product</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                    <img className='card-img-bottom' src={abt4}/>
                </div>
                
            </div>
            
        </div>
        </>
    );
}
export default About;