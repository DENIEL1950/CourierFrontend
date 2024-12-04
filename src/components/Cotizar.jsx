import React, { useState } from "react";
import "./Cotizar.css";

const Cotizar = () => {
  const tarifas = [
    { libras: 1.00, costo: 11.00 },
    { libras: 2.00, costo: 16.48 },
    { libras: 3.00, costo: 20.99 },
    { libras: 4.00, costo: 24.71 },
    { libras: 5.00, costo: 30.08 },
    { libras: 6.00, costo: 33.85 },
    { libras: 7.00, costo: 38.66 },
    { libras: 8.00, costo: 42.43 },
    { libras: 9.00, costo: 47.24 },
    { libras: 10.00, costo: 51.01 },
    { libras: 11.00, costo: 54.77 },
    { libras: 12.00, costo: 60.24 },
    { libras: 13.00, costo: 64.57 },
    { libras: 14.00, costo: 68.2 },
    { libras: 15.00, costo: 72.47 },
    { libras: 16.00, costo: 76.75 },
    { libras: 17.00, costo: 81.03 },
    { libras: 18.00, costo: 85.31 },
    { libras: 19.00, costo: 89.58 },
    { libras: 20.00, costo: 93.86 }
  ];

  const [unitValue, setUnitValue] = useState("");
  const [weight, setWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [metodoImportacion, setMetodoImportacion] = useState("");
  const [producto, setProducto] = useState("");
  const [total, setTotal] = useState(null);
  const [costoLibras, setCostoLibras] = useState(null);
  const [iva, setIva] = useState(null);
  const [precioIVA, setPrecioIVA] = useState(null);
  const [precioTotal, setPrecioTotal] = useState(null);
  const [warning, setWarning] = useState("");

  const handleCalcular = () => {
    if (!unitValue || !weight || !quantity || !metodoImportacion || !producto) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (metodoImportacion === "categoria_4x4") {
      if (unitValue > 400) {
        setWarning("El valor unitario no puede ser mayor a $400 para la categoría 4x4.");
        return;
      }
      if (weight > 8) {
        setWarning("El peso no puede ser mayor a 8 libras para la categoría 4x4.");
        return;
      }
      if (quantity > 3) {
        setWarning("La cantidad no puede ser mayor a 3 productos para la categoría 4x4.");
        return;
      }
    } else {
      setWarning(""); 
    }

    const weightNum = parseFloat(weight);
    const quantityNum = parseInt(quantity, 10);

    const tarifa = tarifas.find(tarifa => tarifa.libras === weightNum);

    if (!tarifa) {
      alert("No encontramos tarifa para ese peso.");
      return;
    }

    const costoPorLibra = tarifa.costo * quantityNum;
    setCostoLibras(costoPorLibra);

    const totalSinIVA = parseFloat(unitValue) + costoPorLibra;

    if (metodoImportacion === "impuesto_especifico") {
      const ivaCalculado = totalSinIVA * 0.15;
      setIva(ivaCalculado);

      const precioConIVA = totalSinIVA + ivaCalculado;
      setPrecioIVA(precioConIVA);

      setPrecioTotal(costoPorLibra + ivaCalculado);
    } else {
      setIva(null); 
      setPrecioIVA(totalSinIVA); 
      setPrecioTotal(totalSinIVA);
    }

    setTotal(totalSinIVA);
  };

  return (
    <div className="cotizar-container">
      <div className="background-image"></div>
      <div className="form-container">
        <h2>Cotizador</h2>
        
        <label htmlFor="import-method">Selecciona el método de importación *</label>
        <select
          id="import-method"
          value={metodoImportacion}
          onChange={(e) => setMetodoImportacion(e.target.value)}
        >
          <option value="">Seleccionar...</option>
          <option value="impuesto_especifico">Impuesto Específico</option>
          <option value="categoria_4x4">Categoría 4x4</option>
        </select>

        <label htmlFor="product">Selecciona el producto a importar *</label>
        <select
          id="product"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        >
          <option value="">Seleccionar...</option>
          <option value="equipos_computacion">Equipos de computación</option>
          <option value="salud_belleza">Salud y belleza</option>
          <option value="accesorios_bebe">Accesorios de bebé</option>
          <option value="libros">Libros</option>
          <option value="cedular">Cedular</option>
          <option value="drone">Drone</option>
          <option value="accesorios_auto">Accesorios de auto y partes de automotores</option>
          <option value="productos_cocina">Productos de cocina</option>
          <option value="calzado">Calzado</option>
          <option value="equipos_electricos">Equipos eléctricos</option>
        </select>

        <label htmlFor="unit-value">Valor unitario:</label>
        <input
          type="number"
          id="unit-value"
          value={unitValue}
          onChange={(e) => setUnitValue(e.target.value)}
        />

        <label htmlFor="weight">Peso en lb:</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button onClick={handleCalcular}>Calcular</button>

        {warning && <div className="warning">{warning}</div>}

        {costoLibras !== null && (
          <div className="resultado">
            <h3>{`Costo por las ${weight} libras:`}</h3>
            <p>${costoLibras.toFixed(2)}</p>

            {metodoImportacion === "impuesto_especifico" && iva !== null && (
              <>
                <h3>IVA (15%):</h3>
                <p>${iva.toFixed(2)}</p>

                <h3>Precio con IVA (15%):</h3>
                <p>${precioIVA.toFixed(2)}</p>

                <h3>Precio total a pagar:</h3>
                <p>${precioTotal.toFixed(2)}</p>
              </>
            )}

            {metodoImportacion === "categoria_4x4" && (
              <div>
                <h3>Total a pagar:</h3>
                <p>${costoLibras} (sin IVA)</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="tarifario-section">
        <h2>Tarifario</h2>
        <div className="tarifas">
          {tarifas.map((tarifa, index) => (
            <div key={index} className="tarifa-item">
              <p>{tarifa.libras} lb - ${tarifa.costo}</p>
            </div>
          ))}
        </div>
        <p>Tarifas expresadas en dólares estadounidenses por libra.</p>
      </div>
    </div>
  );
};

export default Cotizar;
