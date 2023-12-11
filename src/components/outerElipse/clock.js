import React from "react"
import ElipseStroke2 from '../../assets/elipse_stroke_2.png'
import ElipseStroke3 from '../../assets/small_dot.png'
import './clock.css'

const OuterElipse = () => {
    return (
        <div className="outer-circle">
            <div className="elipse-stoke">
                <img src={ElipseStroke2} alt="" className="elipse-img" />
                <img className="inner-dot" src={ElipseStroke3} alt="" />
            </div>
        </div>
    )
}
export default OuterElipse