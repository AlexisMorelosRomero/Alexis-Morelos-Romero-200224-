import React, { useState } from "react";

export const Eliminar = () => {
  const [clienteId, setClienteId] = useState("");
  const [productoId, setProductoId] = useState("");
  const [pedidoId, setPedidoId] = useState("");
  const [paqueteriaId, setPaqueteriaId] = useState("");
  const [message, setMessage] = useState("");

  const handleClienteIdChange = (event) => {
    setClienteId(event.target.value);
  };

  const handleProductoIdChange = (event) => {
    setProductoId(event.target.value);
  };

  const handlePedidoIdChange = (event) => {
    setPedidoId(event.target.value);
  };

  const handlePaqueteriaIdChange = (event) => {
    setPaqueteriaId(event.target.value);
  };

  const eliminarCliente = (id) => {
    const clientesData = localStorage.getItem("clientes");
    if (clientesData) {
      let clientes = JSON.parse(clientesData);
      const initialLength = clientes.length;
      clientes = clientes.filter((cliente) => cliente.id !== id);
      if (clientes.length === initialLength) {
        setMessage(`Cliente con ID ${id} no encontrado.`);
      } else {
        localStorage.setItem("clientes", JSON.stringify(clientes));
        setMessage(`Cliente con ID ${id} eliminado.`);
      }
    } else {
      setMessage("No hay clientes para eliminar.");
    }
  };

  const eliminarProducto = (id) => {
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      let productos = JSON.parse(productosData);
      const initialLength = productos.length;
      productos = productos.filter((producto) => producto.id !== id);
      if (productos.length === initialLength) {
        setMessage(`Producto con ID ${id} no encontrado.`);
      } else {
        localStorage.setItem("productos", JSON.stringify(productos));
        setMessage(`Producto con ID ${id} eliminado.`);
      }
    } else {
      setMessage("No hay productos para eliminar.");
    }
  };

  const eliminarPedido = (id) => {
    const pedidosData = localStorage.getItem("pedidos");
    if (pedidosData) {
      let pedidos = JSON.parse(pedidosData);
      const initialLength = pedidos.length;
      pedidos = pedidos.filter((pedido) => pedido.id !== id);
      if (pedidos.length === initialLength) {
        setMessage(`Pedido con ID ${id} no encontrado.`);
      } else {
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
        setMessage(`Pedido con ID ${id} eliminado.`);
      }
    } else {
      setMessage("No hay pedidos para eliminar.");
    }
  };

  const eliminarPaqueteria = (id) => {
    const paqueteriasData = localStorage.getItem("paqueterias");
    if (paqueteriasData) {
      let paqueterias = JSON.parse(paqueteriasData);
      const initialLength = paqueterias.length;
      paqueterias = paqueterias.filter((paqueteria) => paqueteria.id !== id);
      if (paqueterias.length === initialLength) {
        setMessage(`Paquetería con ID ${id} no encontrada.`);
      } else {
        localStorage.setItem("paqueterias", JSON.stringify(paqueterias));
        setMessage(`Paquetería con ID ${id} eliminada.`);
      }
    } else {
      setMessage("No hay paqueterías para eliminar.");
    }
  };

  const handleClienteSubmit = (event) => {
    event.preventDefault();
    eliminarCliente(clienteId);
    setClienteId("");
  };

  const handleProductoSubmit = (event) => {
    event.preventDefault();
    eliminarProducto(productoId);
    setProductoId("");
  };

  const handlePedidoSubmit = (event) => {
    event.preventDefault();
    eliminarPedido(pedidoId);
    setPedidoId("");
  };

  const handlePaqueteriaSubmit = (event) => {
    event.preventDefault();
    eliminarPaqueteria(paqueteriaId);
    setPaqueteriaId("");
  };

  return (
    <div className="w3-container">
      <h2>Eliminación de Registros</h2>

      <form onSubmit={handleClienteSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
      <h3 className="w3-text-teal">Eliminar Cliente</h3>
        <label htmlFor="clienteId" className="w3-label">ID del cliente:</label>
        <input
          id="clienteId"
          type="text"
          value={clienteId}
          onChange={handleClienteIdChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-black w3-margin-top">Eliminar</button>
      </form>

      <form onSubmit={handleProductoSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
      <h3 className="w3-text-teal">Eliminar Producto</h3>
        <label htmlFor="productoId" className="w3-label">ID del producto:</label>
        <input
          id="productoId"
          type="text"
          value={productoId}
          onChange={handleProductoIdChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-black w3-margin-top">Eliminar</button>
      </form>

      <form onSubmit={handlePedidoSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
      <h3 className="w3-text-teal">Eliminar Pedido</h3>
<label htmlFor="pedidoId" className="w3-label">ID del pedido:</label>
<input
       id="pedidoId"
       type="text"
       value={pedidoId}
       onChange={handlePedidoIdChange}
       className="w3-input w3-border"
     />
<button type="submit" className="w3-btn w3-black w3-margin-top">Eliminar</button>
</form>
<form onSubmit={handlePaqueteriaSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
<h3 className="w3-text-teal">Eliminar Paquetería</h3>
    <label htmlFor="paqueteriaId" className="w3-label">ID de la paquetería:</label>
    <input
      id="paqueteriaId"
      type="text"
      value={paqueteriaId}
      onChange={handlePaqueteriaIdChange}
      className="w3-input w3-border"
    />
    <button type="submit" className="w3-btn w3-black w3-margin-top">Eliminar</button>
  </form>

  {message && <p className="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow w3-margin-top">{message}</p>}
</div>
);
};