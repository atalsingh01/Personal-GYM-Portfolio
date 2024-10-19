import React from 'react'
import WorkoutCard from '../Components/WorkoutCard'

import armwrestling from "../../src/assets/armwrestling.jpg"

const Armwrestling = () => {
  return (
    <div>
      <WorkoutCard
      title="ARMWRESTLING SESSIONS  "
      description={["The content will uploaded later ...."]}
      image={armwrestling}
      />
      
    </div>
  )
}

export default Armwrestling
