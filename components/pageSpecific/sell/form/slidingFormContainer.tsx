"use client"
import React, { useId, useReducer } from 'react'
import { SlidingFormContext, SlidingFormDispatchContext, defaultStepState, stepReducer } from './slidingFormContext';
import { Progress } from '#/components/ui/progress';



interface SlidingFormContainerProps {
    maxStep: number
    children: React.ReactNode
}





const SlidingFormContainer = ({ children, maxStep }: SlidingFormContainerProps) => {
    const [activeStep, dispatch] = useReducer(stepReducer, { ...defaultStepState, maxStep });
    return (
        <div className={`w-fit h-fit flex flex-col gap-6 justify-between items-center group/slidingFormStepContainer step-${activeStep.step}`} id={"sale-page-form-step-container"}>
            <Progress value={(activeStep.step / maxStep) * 100} className={"max-w-[300px]"} />
            <div className={"relative  w-full h-full"}>
                <SlidingFormContext.Provider value={activeStep}>
                    <SlidingFormDispatchContext.Provider value={dispatch}>
                        {children}
                    </SlidingFormDispatchContext.Provider>
                </SlidingFormContext.Provider>
            </div>
        </div>
    )
}


SlidingFormContainer.displayName = "SlidingFormContainer"


export default SlidingFormContainer;
