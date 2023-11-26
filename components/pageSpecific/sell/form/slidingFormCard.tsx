"use client"
import { Button } from '#/components/ui/button'
import clsx from 'clsx'
import React, { useRef, useState, useContext, ReactEventHandler, useEffect } from 'react'
import { SlidingFormContext, SlidingFormDispatchContext } from './slidingFormContext'
import { stepMap } from './stepClassMap'



interface SlidingFormContainerProps {
    children: React.ReactNode
    step: number
    anchor?: boolean
    handleSubmit?: () => void
    containerId: string
    noBtns?: boolean
}


export const maxStepSale = 3

const SlidingFormCard = ({ children, noBtns, handleSubmit, step, anchor, containerId }: SlidingFormContainerProps) => {
    const ref = useRef<HTMLDivElement>(null!)
    const dispatch = useContext(SlidingFormDispatchContext)
    const { step: currentStep, maxStep } = useContext(SlidingFormContext)

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

    const handleResize = () => {
        if (currentStep !== step) return
        let em = document.getElementById(containerId)
        if (!em) return
        em.style.minHeight = `${ref.current.getBoundingClientRect().height + 64}px`
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className={clsx("w-fit h-fit top-0 right-0 bottom-0 opacity-0 scale-0 bg-card text-foreground transition-all duration-300 px-4 pb-6 rounded-lg border border-border flex flex-col justify-center items-center gap-4 left-[50%] shadow-md hover:shadow-sm dark:shadow-none", stepMap[step], anchor ? "inline-block anchor" : "absolute")}
            ref={ref}
        >
            {children}
            {!noBtns && <div className={"w-full h-fit flex flex-row gap-4 justify-end items-center"}>
                <Button onClick={stepBack} className={"group-[.step-1]/slidingFormStepContainer:hidden"}>
                    Back
                </Button>
                <Button onClick={stepForward}>{currentStep === maxStep ? "Submit" : "Continue"}</Button>
            </div>}
        </div>
    )
}


SlidingFormCard.displayName = "SlidingFormContainer"


export default SlidingFormCard;
