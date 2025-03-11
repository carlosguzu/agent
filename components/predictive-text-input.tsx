"use client"

import { useState, useEffect, useRef, type KeyboardEvent } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { getPredictions } from "@/lib/predictions"

interface PredictiveTextInputProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export function PredictiveTextInput({ value, onChange, className }: PredictiveTextInputProps) {
  const [prediction, setPrediction] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchPredictions = async () => {
      if (value.trim() === "") {
        setPrediction("")
        return
      }

      try {
        const suggestions = await getPredictions(value)
        if (suggestions.length > 0) {
          // Only show prediction if it starts with the current input
          const fullPrediction = suggestions[0]
          if (fullPrediction.startsWith(value)) {
            setPrediction(fullPrediction.slice(value.length))
          } else {
            setPrediction("")
          }
        } else {
          setPrediction("")
        }
      } catch (error) {
        console.error("Error fetching predictions:", error)
        setPrediction("")
      }
    }

    fetchPredictions()
  }, [value])

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" && prediction) {
      e.preventDefault()
      onChange(value + prediction)
      setPrediction("")
    }
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <Input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full pr-4"
        placeholder="Start typing..."
      />
      {isFocused && prediction && (
        <div className="absolute inset-0 pointer-events-none flex items-center">
          <div className="pl-3 text-transparent">{value}</div>
          <div className="text-gray-400">{prediction}</div>
        </div>
      )}
      {prediction && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
          Press Tab to accept
        </div>
      )}
    </div>
  )
}

