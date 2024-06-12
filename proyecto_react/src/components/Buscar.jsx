import React, { useState } from "react";
import ClientesTable from "./Clientes";
import ProductosTable from "./Productos";
import PedidosTable from "./Pedidos";
import PaqueteriasTable from "./Paqueteria";

export const Buscar = () => {
  const [clienteQuery, setClienteQuery] = useState("");
  const [productoQuery, setProductoQuery] = useState("");
  const [pedidoQuery, setPedidoQuery] = useState("");
  const [paqueteriaQuery, setPaqueteriaQuery] = useState("");
  const [result, setResult] = useState(null);
  const [queryType, setQueryType] = useState("");

  const handleClienteQueryChange = (event) => {
    setClienteQuery(event.target.value);
  };

  const handleProductoQueryChange = (event) => {
    setProductoQuery(event.target.value);
  };

  const handlePedidoQueryChange = (event) => {
    setPedidoQuery(event.target.value);
  };

  const handlePaqueteriaQueryChange = (event) => {
    setPaqueteriaQuery(event.target.value);
  };

  const handleClienteSubmit = (event) => {
    event.preventDefault();
    const cliente = buscarCliente(clienteQuery);
    setQueryType("cliente");
    setResult(cliente);
  };

  const handleProductoSubmit = (event) => {
    event.preventDefault();
    const producto = buscarProducto(productoQuery);
    setQueryType("producto");
    setResult(producto);
  };

  const handlePedidoSubmit = (event) => {
    event.preventDefault();
    const pedido = buscarPedido(pedidoQuery);
    setQueryType("pedido");
    setResult(pedido);
  };

  const handlePaqueteriaSubmit = (event) => {
    event.preventDefault();
    const paqueteria = buscarPaqueteria(paqueteriaQuery);
    setQueryType("paqueteria");
    setResult(paqueteria);
  };

  const buscarCliente = (id) => {
    const clientesData = localStorage.getItem("clientes");
    if (clientesData) {
      const clientes = JSON.parse(clientesData);
      const clienteEncontrado = clientes.find((cliente) => cliente.id === id);
      return clienteEncontrado || null;
    } else {
      return null;
    }
  };

  const buscarProducto = (id) => {
    const productosData = localStorage.getItem("productos");
    if (productosData) {
      const productos = JSON.parse(productosData);
      const productoEncontrado = productos.find((producto) => producto.id === id);
      return productoEncontrado || null;
    } else {
      return null;
    }
  };

  const buscarPedido = (id) => {
    const pedidosData = localStorage.getItem("pedidos");
    if (pedidosData) {
      const pedidos = JSON.parse(pedidosData);
      const pedidoEncontrado = pedidos.find((pedido) => pedido.id === id);
      return pedidoEncontrado || null;
    } else {
      return null;
    }
  };

  const buscarPaqueteria = (id) => {
    const paqueteriasData = localStorage.getItem("paqueterias");
    if (paqueteriasData) {
      const paqueterias = JSON.parse(paqueteriasData);
      const paqueteriaEncontrada = paqueterias.find((paqueteria) => paqueteria.id === id);
      return paqueteriaEncontrada || null;
    } else {
      return null;
    }
  };

  return (
    <div className="w3-container">
      <h2>Buscar</h2>

      <form onSubmit={handleClienteSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
      <h3 className="w3-text-teal">Buscar Cliente</h3>
        <label htmlFor="clienteQuery" className="w3-label">ID del cliente:</label>
        <input
          id="clienteQuery"
          type="text"
          value={clienteQuery}
          onChange={handleClienteQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-black w3-margin-top">Buscar</button>
      </form>

      <form onSubmit={handleProductoSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
      <h3 className="w3-text-teal">Buscar Producto</h3>
        <label htmlFor="productoQuery" className="w3-label">ID del producto:</label>
        <input
          id="productoQuery"
          type="text"
          value={productoQuery}
          onChange={handleProductoQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-black w3-margin-top">Buscar</button>
      </form>

      <form onSubmit={handlePedidoSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
      <h3 className="w3-text-teal">Buscar Pedido</h3>
        <label htmlFor="pedidoQuery" className="w3-label">ID del pedido:</label>
        <input
          id="pedidoQuery"
          type="text"
          value={pedidoQuery}
          onChange={handlePedidoQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-black w3-margin-top">Buscar</button>
      </form>

      <form onSubmit={handlePaqueteriaSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-black w3-margin">
      <h3 className="w3-text-teal">Buscar Paquetería</h3>
        <label htmlFor="paqueteriaQuery" className="w3-label">ID de la paquetería:</label>
        <input
          id="paqueteriaQuery"
          type="text"
          value={paqueteriaQuery}
          onChange={handlePaqueteriaQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-black w3-margin-top">Buscar</button>
      </form>

      {result && (
        <div>
          {queryType === "cliente" && (
            <ClientesTable clientes={[result]} />
          )}
          {queryType === "producto" && (
            <ProductosTable productos={[result]} />
          )}
          {queryType === "pedido" && (
            <PedidosTable pedidos={[result]} />
          )}
          {queryType === "paqueteria" && (
            <PaqueteriasTable paqueterias={[result]} />
          )}
        </div>
      )}

      {!result && (
        <div>
          {queryType === "cliente" && <p>No se encontró el cliente.</p>}
          {queryType === "producto" && <p>No se encontró el producto.</p>}
          {queryType === "pedido" && <p>No se encontró el pedido.</p>}
          {queryType === "paqueteria"&& <p>No se encontró la paquetería.</p>}
        </div>
      )}
    </div>
  );
};