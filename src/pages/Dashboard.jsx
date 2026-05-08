import { use, useEffect, useState } from "react";
import { list } from "../api/services/hotel.services";
import { HotelContext } from "../context/HotelContext";
import { Modal } from "../components/modals/Modal";
import { HotelForm } from "../components/forms/hotel/HotelForm";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { HotelInfo } from "../components/HotelInfo";
import { NavLink } from "react-router";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [hoteles, setHoteles] = useState([]);
  const { handleList, handleSelectId, handleDelete, handleSelect, action } =
    use(HotelContext);

  const getList = async () => {
    const response = await handleList();

    if (response.data["data"]) {
      setHoteles(response.data["data"]);
    }
  };

  const destroy = (id) => {
    toast.warning("¿Desea eliminar el registro del hotel?", {
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
    getList();
  }, [action]);

  return (
    <div className="min-h-screen w-full">
      <div className="p-4 md:p-6 lg:p-8">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="mb-6 px-4 py-2 cursor-pointer bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors font-medium"
        >
          Agregar hotel
        </button>
        <div className="bg-white dark:bg-neutral-900 rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
            <thead className="bg-neutral-50 dark:bg-neutral-800">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Nombre
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Ciudad
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Dirección
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Número de habitaciones
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Nit
                </th>
                <th className="px-6 py-3 text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-center">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
              {hoteles.length > 0 ? (
                hoteles.map((hotel) => (
                  <tr key={hotel.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center underline decoration-1">
                      <NavLink
                        to={{
                          pathname: `/hotel/${hotel.id}`,
                        }}
                      >
                        {hotel.nombre}
                      </NavLink>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      {hotel.ciudad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      {hotel.direccion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      {hotel.numero_habitaciones}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      {hotel.nit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100 text-center">
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={() => {
                            setIsOpen(true);
                            setShowInfo(true);
                            handleSelectId(hotel.id);
                          }}
                          className="p-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          title="Ver"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            handleSelect(hotel);
                            setIsOpen(true);
                          }}
                          className="p-2 text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
                          title="Editar"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => destroy(hotel.id)}
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
          setShowInfo(false);
          handleSelect(null);
        }}
        title="Hotel"
      >
        {!showInfo ? <HotelForm /> : <HotelInfo />}
      </Modal>
    </div>
  );
};
