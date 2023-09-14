import { Slider } from '#/components/ui/slider'
import React from 'react'



interface TicketQuantitySliderProps {

}

const TicketQuantitySlider = (props: TicketQuantitySliderProps) => {
    return (
        <div className={"w-full h-fit flex flex-col justify-center items-center gap-2"}>
            <Slider min={1} max={5} defaultValue={[1]} step={1} />
            <div className={"w-full flex flex-row justify-between items-center translate-x-2"}>
                {["1", "2", "3", "4", "4+"].map((s) => {
                    return <div key={`slider-step-${s}`}>{s}</div>
                })}
            </div>
        </div>
    )
}


TicketQuantitySlider.displayName = "TicketQuantitySlider"


export default TicketQuantitySlider;
