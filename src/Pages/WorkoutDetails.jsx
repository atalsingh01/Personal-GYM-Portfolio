import React from 'react'
import { useParams } from 'react-router-dom'
import Gym from './Gym'
import Armwrestling from './Armwrestling'
import Yoga from './Yoga'
{/* this page is for dynamic route and display the relevent data only  */}
const WorkoutDetails = () => {
    const {type} =useParams();
    const renderDetailComponent=()=>
    {
        switch(type)
        {
            case "Gym":
                return <Gym/>;

                case "Yoga":
                    return <Yoga/>;
                    case "Armwrestling":
                    return <Armwrestling/>;
                    default:
                     return   <p>workout not foud ......</p>
        }
    }
  return (
    <div >
   
    {renderDetailComponent()}
  </div>
  )
}

export default WorkoutDetails
