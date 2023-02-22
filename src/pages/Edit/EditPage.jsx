import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailedProduct from '../../components/DetailedProduct/DetailedProduct';
import Navbar from '../../shared/Navbar/Navbar';
import { API } from '../../shared/services/api';
import Sidebar from '../../shared/Sidebar/Sidebar';

const EditPage = () => {
  const [detailedProduct, setDetailedProduct] = useState({});
  const [colours, setColours] = useState([]);
  const [sizes, setSizes] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    API.get(`/products/${id}`).then((response) => {
      setDetailedProduct(response.data[0]);
    });
    API.get(`/colours`).then((response) => {
      setColours(response.data);
    });

    API.get(`/sizes`).then((response) => {
      setSizes(response.data);
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
              <h1 class='h1'>Productos</h1>
            </div>

            <h2>Editar</h2>
            {detailedProduct && (
              <DetailedProduct
                detailedProduct={detailedProduct}
                colours={colours}
                sizes={sizes}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default EditPage;
