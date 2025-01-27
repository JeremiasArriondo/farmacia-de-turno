"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, RefreshCw } from "lucide-react"

// Datos de ejemplo de farmacias
const farmacias = [
  {
    nombre: "Farmacia Chiavarino",
    direccion: "Av. Principal 123",
    telefono: "123-456-7890",
    horario: "24 horas",
    coor: {
      lat: -34.19912780854803,
      long: -60.73456631637731
    }
  },
  {
    nombre: "Farmacia del Sol",
    direccion: "Calle del Sol 456",
    telefono: "098-765-4321",
    horario: "8:00 AM - 10:00 PM",
  },
  { nombre: "Farmacia La Salud", direccion: "Plaza Mayor 789", telefono: "555-123-4567", horario: "24 horas" },
  {
    nombre: "Farmacia Nueva Era",
    direccion: "Av. Progreso 321",
    telefono: "777-888-9999",
    horario: "7:00 AM - 11:00 PM",
  },
]

export default function Home() {
  const [farmacia, setFarmacia] = useState(farmacias[0])
  const [fecha, setFecha] = useState("")

  // useEffect(() => {
  //   actualizarFarmacia()
  // }, [])

  // const actualizarFarmacia = () => {
  //   const indiceAleatorio = Math.floor(Math.random() * farmacias.length)
  //   setFarmacia(farmacias[indiceAleatorio])
  //   setFecha(
  //     new Date().toLocaleDateString("es-ES", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
  //   )
  // }
 // -34.19912780854803, -60.73456631637731
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-green-800">Farmacia de Turno</h1>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-xl text-center">{farmacia.nombre}</CardTitle>
          <CardDescription className="text-center">{fecha}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <MapPin className="mr-2 text-green-500" />
            <span>{farmacia.direccion}</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 text-green-500" />
            <span>{farmacia.telefono}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 text-green-500" />
            <span>{farmacia.horario}</span>
          </div>
          <div className="flex items-center">
            <iframe
              width="600"
              height="350"
              style={{
                border: 0
              }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${farmacia.coor?.lat},${farmacia.coor?.long}&z=15&output=embed`}>
            </iframe>
          </div>
        </CardContent>
        {/*
        <CardFooter className="flex justify-center">
          <Button onClick={actualizarFarmacia} className="bg-blue-500 hover:bg-blue-600">
            <RefreshCw className="mr-2 h-4 w-4" /> Actualizar
          </Button>
        </CardFooter>
        */}
      </Card>
    </div>
  )
}

