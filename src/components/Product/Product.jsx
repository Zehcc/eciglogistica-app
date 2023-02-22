import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../shared/services/api';

const Product = ({ product }) => {
  const [colour, setColour] = useState([]);
  const [size, setSize] = useState([]);
  useEffect(() => {
    API.get(`/colours/${product.colour_id}`).then((response) => {
      setColour(response.data[0].name);
    });
    API.get(`/sizes/${product.size_id}`).then((response) => {
      setSize(response.data[0].name);
    });
  }, []);
  const deleteProduct = () => {
    API.delete(`/products/${product.id}`).then(window.location.reload());
  };
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{size}</td>
      <td>{colour}</td>
      <td>
        <p>{product.observations}</p>
      </td>
      <td>
        <Link to={`/edit/${product.id}`}>
          <a href='editar.html' type='button' class='btn btn-secondary'>
            Editar
          </a>
        </Link>
      </td>
      <td>
        <button type='button' class='btn btn-danger' onClick={deleteProduct}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
