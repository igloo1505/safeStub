import { Slider } from '#/components/ui/slider'
import React from 'react'



interface TicketQuantitySliderProps {
    sliderStep: number
    setSliderStep: (n: number) => void
}

const TicketQuantitySlider = ({ sliderStep, setSliderStep }: TicketQuantitySliderProps) => {
    const sliderChange = (e: [number]) => {
        setSliderStep(e[0])
    }
    return (
        <div className={"w-5/6 md:w-full h-fit flex flex-col justify-center items-center gap-2"}>
            <Slider
                min={1}
                max={5}
                defaultValue={[sliderStep]}
                step={1}
                onValueChange={sliderChange}
            />
            <div className={"w-full flex flex-row justify-between items-center translate-x-2"}>
                {["1", "2", "3", "4", "5+"].map((s) => {
                    return <div key={`slider-step-${s}`}>{s}</div>
                })}
            </div>
        </div>
    )
}


TicketQuantitySlider.displayName = "TicketQuantitySlider"


export default TicketQuantitySlider;
