'use client'

// --- react hooks ---
import { useEffect, useRef, useState } from "react"

interface UseInViewportOptions {
    threshold?: number
    triggerOnce?: boolean
}

export default function useInViewport<T extends HTMLElement = HTMLDivElement>(
    options: UseInViewportOptions = {}
) {
    // --- default options ---
    const { threshold = 0.2, triggerOnce = true } = options
    const [isVisible, setIsVisible] = useState (false)
    const ref = useRef<T> (null)

    // --- intersection observer ---
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting && !triggerOnce) {
                    setIsVisible(false)
                    return
                }
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (triggerOnce) observer.disconnect()
                }
            },
            { threshold }
        )

        if (ref.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [threshold, triggerOnce])

    return { ref, isVisible }
}
