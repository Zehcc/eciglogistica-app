import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import { API } from '../../shared/services/api';
import Sidebar from '../../shared/Sidebar/Sidebar';

const AddPage = () => {
  const [colours, setColours] = useState([]);
  const [sizes, setSizes] = useState([]);
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    API.get(`/colours`).then((response) => {
      setColours(response.data);
    });

    API.get(`/sizes`).then((response) => {
      setSizes(response.data);
      console.log(sizes);
    });
  }, []);
  const onSubmit = (data) => {
    if (data.size_id === '') {
      data.size_id = sizes[0].id;
    }
    if (data.colour_id === '') {
      data.colour_id = colours[0].id;
    }
    console.log(data);

    API.post(`/products`, data).then(navigate(`/inventary`));
  };

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

            <h2>Añadir</h2>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class='mb-3'>
                  <label for='name' class='form-label'>
                    Nombre
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='name'
                    placeholder='Nombre'
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Debes insertar un nombre',
                      },
                    })}
                  />
                </div>
                <div class='mb-3'>
                  <label for='size' class='form-label'>
                    Talla
                  </label>
                  <select
                    class='form-control'
                    id='size_id'
                    {...register('size_id')}
                  >
                    {sizes &&
                      sizes.map((size, index) => {
                        return (
                          <option key={index} value={size.id}>
                            {size.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div class='mb-3'>
                  <label for='colour' class='form-label'>
                    Color
                  </label>
                  <select
                    class='form-control'
                    id='colour_id'
                    {...register('colour_id')}
                  >
                    {colours &&
                      colours.map((colour, index) => {
                        return (
                          <option key={index} value={colour.id}>
                            {colour.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div class='mb-3'>
                  <label for='description' class='form-label'>
                    Observaciones
                  </label>
                  <textarea
                    class='form-control'
                    id='observations'
                    rows='3'
                    {...register('observations', {
                      required: {
                        value: true,
                        message: 'Debes insertar una observacion',
                      },
                    })}
                  ></textarea>
                </div>
                <div class='mb-3'>
                  <button class='btn btn-large btn-primary'>Guardar</button>
                  <Link to={`/inventary`}>
                    <a class='btn btn-large btn-warning'>Volver</a>
                  </Link>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddPage;
