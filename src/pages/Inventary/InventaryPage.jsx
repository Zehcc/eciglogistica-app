import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../components/Product/Product';
import Navbar from '../../shared/Navbar/Navbar';
import { API } from '../../shared/services/api';
import Sidebar from '../../shared/Sidebar/Sidebar';

const InventaryPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div class='container-fluid'>
        <div class='row'>
          <Sidebar />
          <main class='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div class='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
              <h1 class='h1'>Home</h1>
            </div>
            <h2>Productos</h2>
            <Link to={'/add'}>
              <a
                href='editar.html'
                type='button'
                class='btn btn-secondary'
                style={{ background: 'green' }}
              >
                Añadir producto
              </a>
            </Link>
            <div class='table-responsive'>
              <table class='table table-striped table-sm'>
                <thead>
                  <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Nombre</th>
                    <th scope='col'>Talla</th>
                    <th scope='col'>Color</th>
                    <th scope='col'>Observaciones</th>
                    <th colspan='2'>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product, index) => {
                      return <Product key={index} product={product} />;
                    })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default InventaryPage;
