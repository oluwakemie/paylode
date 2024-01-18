import React, { useContext } from 'react';
import { IoIosArrowUp,IoIosArrowDown  } from "react-icons/io";


import {AccordionContext} from './AccordionWrapper';

const AccordionItem = (props) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
     }

    return (
        <div className="border px-4 py-5 rounded-md shadow-md mb-2 bg-white">
            <h3 className="accordion-title">
                <button 
                
                    onClick={(e) => eventHandler(e, props.index)}
                    className={` ${active === props.index ? 'block' : 'inactive'} flex justify-between items-center w-full mb-4`}
                    aria-expanded={ active === props.index ? 'true' : 'false' }
                    aria-controls={ 'sect-' + indexCount(props.index) }
                    aria-disabled={ active === props.index ? 'true' : 'false' }
                >
                    <span className="font-bold">{props.title}
                    </span>  
                    <span className="icon-wrapper">
                        <span >{ active === props.index ? (<IoIosArrowUp  />) : (<IoIosArrowDown />)}</span>
                    </span>
                </button>
            </h3>
            <div className="accordion-panel">
                <div id={ 'sect-' + indexCount(props.index) } className={ active === props.index  ? 'block' : 'hidden' }>
                    {props.description}
                </div>
            </div>
        </div>
    )
}



export default AccordionItem; 