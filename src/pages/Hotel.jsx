import { use, useEffect, useState } from "react";
import { HabitacionForm } from "../components/forms/habitacion/HabitacionForm";
import { Modal } from "../components/modals/Modal";
import { HabitacionContext } from "../context/HabitacionContext";
import { useParams } from "react-router";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { HotelContext } from "../context/HotelContext";

export const Hotel = () => {
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [hotelInfo, setHotelInfo] = useState(null);
  const [habitaciones, setHabitaciones] = useState([]);
  const { handleList, handleSelectId, handleDelete, handleSelect, action } =
    use(HabitacionContext);
  const { handleGet } = use(HotelContext);

  const getInfo = async () => {
    const response = await handleGet(params.id);
    console.log();
    if (response.status) {
      setHotelInfo(response.data["data"]);
      return;
    }
  };

  const getList = async (id) => {
    const response = await handleList(id);

    if (response.data["data"]) {
      setHabitaciones(response.data["data"]);
    }
  };

  const destroy = (id) => {
    toast.warning("¿Desea eliminar el registro de la habitación?", {
      position: "bottom-center",
      dismissible: true,
      action: {
        label: "Aceptar",
        onClick: async () => {
          const response = await handleDelete(id);
          if (response.status == 200) {
            toast.success("Registro eliminado");
            toast.dismiss();
          }
        },
      },
      cancel: {
        label: "Cancelar",
        onClick: () => toast.dismiss(),
      },
    });
  };

  useEffect(() => {
    getList(params.id);
    if (!hotelInfo) getInfo();
  }, [action]);

  return (
    <div className="min-h-screen w-full">
      <div className="p-4 md:p-6 lg:p-8">
        {hotelInfo && (
          <div className="border-b border-neutral-200 dark:border-neutral-700 mb-6">
            <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-4">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                Información del Hotel
              </h2>
            </div>
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
          </div>
        )}
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="mb-6 px-4 py-2 cursor-pointer bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors font-medium"
        >
          Registrar habitación
        </button>
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
            <thead className="bg-neutral-50 dark:bg-neutral-800">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Tipo de habitacion
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Acomodación
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Cantidad
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
              {habitaciones.length > 0 ? (
                habitaciones.map((habitacion) => (
                  <tr key={habitacion.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      {habitacion.tipo_habitacion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      {habitacion.acomodacion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      {habitacion.cantidad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => {
                            handleSelect(habitacion);
                            setIsOpen(true);
                          }}
                          className="p-2 text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
                          title="Editar"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => destroy(habitacion.id)}
                          className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center"
                  >
                    No hay datos
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          handleSelect(null);
        }}
        title="Hotel"
      >
        <HabitacionForm />
      </Modal>
    </div>
  );
};
