"use client"

import { useState } from "react"
import { PredictiveTextInput } from "@/components/predictive-text-input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [text, setText] = useState("")
  const [history, setHistory] = useState<string[]>([])

  const handleTextChange = (newText: string) => {
    setText(newText)
  }

  const handleAccept = () => {
    if (text.trim()) {
      setHistory([...history, text])
      setText("")
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Agente de Predicción de Texto para Correos Electrónicos</CardTitle>
          <CardDescription>Comience a escribir y vea las predicciones aparecer en tiempo real</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <PredictiveTextInput value={text} onChange={handleTextChange} className="w-full" />

          <div className="flex justify-end">
            <Button onClick={handleAccept}>Aceptar</Button>
          </div>

          {history.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">History:</h3>
              <div className="space-y-2">
                {history.map((item, index) => (
                  <div key={index} className="p-2 bg-gray-100 dark:bg-gray-800 rounded">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  )
}

