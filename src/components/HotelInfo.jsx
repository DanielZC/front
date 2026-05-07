import { use, useEffect, useState } from "react";
import { HotelContext } from "../context/HotelContext";

export const HotelInfo = () => {
  const [hotelInfo, setHotelInfo] = useState(null);
  const [habitacionesInfo, setHabitacionesInfo] = useState(null);
  const { id, handleGet } = use(HotelContext);

  const getInfo = async () => {
    const response = await handleGet(id);
    if (response.status) {
      setHotelInfo(response.data["data"]);
      setHabitacionesInfo(response.data["habitaciones"]);
      return;
    }
  };

  useEffect(() => {
    if (!hotelInfo) getInfo();
  }, [hotelInfo]);

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow overflow-x-auto">
      {/* Tarjeta de información del hotel */}
      <div className="border-b border-neutral-200 dark:border-neutral-700">
        <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Información del Hotel
          </h2>
        </div>

        {hotelInfo && (
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Nombre
                </span>
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                  {hotelInfo.nombre}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Ciudad
                </span>
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                  {hotelInfo.ciudad}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  NIT
                </span>
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                  {hotelInfo.nit}
                </span>
              </div>

              <div className="flex flex-col sm:col-span-2 lg:col-span-1">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Dirección
                </span>
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                  {hotelInfo.direccion}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                  Total Habitaciones
                </span>
                <span className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                  {hotelInfo.numero_habitaciones}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tabla de habitaciones */}
      <div className="border-t border-neutral-200 dark:border-neutral-700">
        <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Distribución de Habitaciones
          </h3>
        </div>

        <div className="overflow-x-auto">
          {habitacionesInfo && habitacionesInfo.length > 0 ? (
            <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
              <thead className="bg-neutral-50 dark:bg-neutral-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Tipo de Habitación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Acomodación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    Cantidad
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700">
                {habitacionesInfo.map((habitacion) => (
                  <tr
                    key={habitacion.habitacion_id}
                    className="hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100">
                      {habitacion.tipo_habitacion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100">
                      {habitacion.acomodacion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                        {habitacion.cantidad}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-neutral-50 dark:bg-neutral-800">
                <tr>
                  <td
                    colSpan={2}
                    className="px-6 py-3 text-right text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Total:
                  </td>
                  <td className="px-6 py-3 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {habitacionesInfo.reduce(
                      (total, hab) => total + hab.cantidad,
                      0,
                    )}
                  </td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                No hay información sobre las habitaciones
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
