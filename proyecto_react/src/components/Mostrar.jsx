import React, { useState, useEffect } from "react";

const ProductosTable = ({ productos }) => (
  <table className="w3-table w3-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Talla</th>
        <th>Precio</th>
        <th>Disponibilidad</th>
      </tr>
    </thead>
    <tbody>
      {productos.map((producto) => (
        <tr key={producto.id}>
          <td>{producto.id}</td>
          <td>{producto.nombre}</td>
          <td>{producto.descripcion}</td>
          <td>{producto.talla}</td>
          <td>{producto.precio}</td>
          <td>{producto.disponibilidad ? "Sí" : "No"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ClientesTable = ({ clientes }) => (
  <table className="w3-table w3-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Dirección</th>
        <th>Teléfono</th>
        <th>Correo</th>
      </tr>
    </thead>
    <tbody>
      {clientes.map((cliente) => (
        <tr key={cliente.id}>
          <td>{cliente.id}</td>
          <td>{cliente.nombre}</td>
          <td>{cliente.direccion}</td>
          <td>{cliente.telefono}</td>
          <td>{cliente.correo}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const PedidosTable = ({ pedidos }) => (
  <table className="w3-table w3-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>ID Cliente</th>
        <th>ID Producto</th>
        <th>Cantidad</th>
      </tr>
    </thead>
    <tbody>
      {pedidos.map((pedido) => (
        <tr key={pedido.id}>
          <td>{pedido.id}</td>
          <td>{pedido.idCliente}</td>
          <td>{pedido.idProducto}</td>
          <td>{pedido.cantidad}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const PaqueteriasTable = ({ paqueterias }) => (
  <table className="w3-table w3-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>ID Pedido</th>
        <th>Dirección</th>
      </tr>
    </thead>
    <tbody>
      {paqueterias.map((paqueteria) => (
        <tr key={paqueteria.id}>
          <td>{paqueteria.id}</td>
          <td>{paqueteria.idPedido}</td>
          <td>{paqueteria.direccion}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export const Mostrar = () => {
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [paqueterias, setPaqueterias] = useState([]);

  useEffect(() => {
    // Cargar datos de clientes desde el almacenamiento local al cargar el componente
    const clientesData = localStorage.getItem("clientes");
    if (clientesData) {
      setClientes(JSON.parse(clientesData));
    }

    // Cargar datos de productos desde el almacenamiento local al cargar el componente
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      setProductos(JSON.parse(productosData));
    }

    // Cargar datos de pedidos desde el almacenamiento local al cargar el componente
    const pedidosData = localStorage.getItem("pedidos");
    if (pedidosData) {
      setPedidos(JSON.parse(pedidosData));
    }

    // Cargar datos de paqueterías desde el almacenamiento local al cargar el componente
    const paqueteriasData = localStorage.getItem("paqueterias");
    if (paqueteriasData) {
      setPaqueterias(JSON.parse(paqueteriasData));
    }
  }, []);

  return (
    <div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-black">Clientes</h2>
        <ClientesTable clientes={clientes} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-black">Productos</h2>
        <ProductosTable productos={productos} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-black">Pedidos</h2>
        <PedidosTable pedidos={pedidos} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-black">Paqueterías</h2>
        <PaqueteriasTable paqueterias={paqueterias} />
      </div>
    </div>
  );
};