"use client"
import { Button } from '#/components/ui/button'
import clsx from 'clsx'
import React, { useRef, useState, useContext } from 'react'
import { SlidingFormContext, SlidingFormDispatchContext } from './slidingFormContext'
import { stepMap } from './stepClassMap'



interface SlidingFormContainerProps {
    children: React.ReactNode
    step: number
    anchor?: boolean
    maxStep: number
    handleSubmit?: () => void
}


export const maxStepSale = 3

const SlidingFormContainer = ({ children, handleSubmit, step, maxStep, anchor }: SlidingFormContainerProps) => {
    const dispatch = useContext(SlidingFormDispatchContext)
    const { step: currentStep } = useContext(SlidingFormContext)

    const stepForward = () => {
        if (currentStep === maxStep && handleSubmit) {
            handleSubmit()
            return
        }
        dispatch({ type: "increment" })
    }

    const stepBack = () => {
        if (currentStep === 1) return
        dispatch({ type: "decrement" })
    }
    return (
        <div className={clsx("w-fit h-fit top-0 right-0 bottom-0 bg-card text-foreground transition-all duration-300 px-4 py-6 rounded-lg border border-border flex flex-col justify-center items-center gap-4 left-[50%]", stepMap[step], anchor ? "inline-block anchor" : "absolute")}
        >
            {children}
            <div className={"w-full h-fit flex flex-row gap-4 justify-end items-center"}>
                <Button onClick={stepBack} className={"group-[.step-1]/slidingFormStepContainer:hidden"}>
                    Back
                </Button>
                <Button onClick={stepForward}>{currentStep === maxStep ? "Submit" : "Continue"}</Button>
            </div>
        </div>
    )
}


SlidingFormContainer.displayName = "SlidingFormContainer"


export default SlidingFormContainer;
