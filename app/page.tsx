"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, RefreshCw } from "lucide-react"
import { Pharmacy } from "@/interfaces/pharmacy"

const pharmacies: Pharmacy[] = [
  {
    name: "Farmacia Chiavarino",
    address: "Alem 550 Rojas",
    phone: "2475463052",
    openingHours: "8am a 12am - 16:30pm a 20:30pm",
    coordinates: {
      latitude: -34.19912780854803,
      longitude: -60.73456631637731,
    },
    link: "https://www.instagram.com/farmaciachiavarino/",
    isOnDuty: true,
    services: ["Dermocosmética"],
  },
  {
    name: "Farmacia Rojas",
    address: "Av. 25 de Mayo 699",
    phone: "2475462240",
    openingHours: "8:00 AM - 10:00 PM",
    coordinates: {
      latitude: -34.19561145887043,
      longitude: -60.73696821798182,
    },
    isOnDuty: false,
    services: ["Home Delivery", "Consultations"],
  },
];


export default function Home() {
  const [pharmacy, setPharmacy] = useState(pharmacies[0])
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

  function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
  
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-l from-white via-green-100 to-stone-100 flex flex-col items-center justify-center p-4 pb-12">
      <h1 className="text-3xl font-bold mb-4">Farmacia de Turno</h1>
      <h2 className="text-2xl font-bold mb-4 text-green-600">Rojas - Hoy</h2>
      <div className="mb-4">
        <span>Fecha del día:</span>
        <div className="flex items-center gap-2">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-green-500" />
          </span>
          {getCurrentDate()}
        </div>
      </div>
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">{pharmacy.name}</CardTitle>
          <CardDescription className="text-center">{fecha}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center">
            <MapPin className="mr-2 text-green-500" />
            <span className="text-gray-700 text-base">{pharmacy.address}</span>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 text-green-500" />
            <a href={`tel:${pharmacy.phone}`}>{pharmacy.phone}</a>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 text-green-500" />
            <span className="text-gray-700 text-base">{pharmacy.openingHours}</span>
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
              src={`https://www.google.com/maps?q=${pharmacy.coordinates.latitude},${pharmacy.coordinates.longitude}&z=15&output=embed`}>
            </iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

