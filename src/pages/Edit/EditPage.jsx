import React from 'react';
import DetailedProduct from '../../components/DetailedProduct/DetailedProduct';
import Navbar from '../../shared/Navbar/Navbar';
import Sidebar from '../../shared/Sidebar/Sidebar';

const EditPage = () => {
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
            <DetailedProduct />
          </main>
        </div>
      </div>
    </>
  );
};

export default EditPage;
