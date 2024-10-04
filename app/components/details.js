import { CalendarIcon, ClockIcon, MapIcon } from "@heroicons/react/24/outline";

export default function EventDetails() {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Detalles del Evento
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {/* Tarjeta 1 - Fecha */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 text-gray-800 flex justify-center">
              <CalendarIcon aria-hidden="true" className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Fecha</h3>
            <p className="text-gray-500">15 de Noviembre, 2024</p>
          </div>

          {/* Tarjeta 2 - Hora */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 text-gray-800 flex justify-center">
              <ClockIcon aria-hidden="true" className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Hora</h3>
            <p className="text-gray-500">10:00 AM - 6:00 PM</p>
          </div>

          {/* Tarjeta 3 - Lugar */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="mb-4 text-gray-800 flex justify-center">
              <MapIcon aria-hidden="true" className="h-8 w-8" />{" "}
              {/* Icono de ubicación */}
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Lugar</h3>
            <p className="text-gray-500">
              plaza principal de Ciudad Cuauhtémoc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
