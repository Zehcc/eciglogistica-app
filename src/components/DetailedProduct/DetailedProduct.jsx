import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../shared/services/api';

const DetailedProduct = () => {
  const [detailedProduct, setDetailedProduct] = useState({});
  const [colours, setColours] = useState([]);
  const [sizes, setSizes] = useState([]);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
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
  }, [id]);

  const onSubmit = (data) => {
    API.patch(`/products/${detailedProduct.id}`, data).then(
      navigate(`/inventary`)
    );
  };
  return (
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
            defaultValue={detailedProduct.name}
            {...register('name')}
          />
        </div>
        <div class='mb-3'>
          <label for='size' class='form-label'>
            Talla
          </label>
          <select class='form-control' id='size' {...register('size')}>
            {sizes.map((size, index) => {
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
          <select class='form-control' id='colour' {...register('colour')}>
            {colours.map((colour, index) => {
              return (
                <option key={index} value={colour.id}>
                  {colour.name}
                </option>
              );
            })}
          </select>
        </div>
        <div class='mb-3'>
          <label
            for='description'
            class='form-label'
            defaultValue={detailedProduct.observations}
          >
            Observaciones
          </label>
          <textarea
            class='form-control'
            id='observations'
            rows='3'
            {...register('observations')}
          ></textarea>
        </div>
        <div class='mb-3'>
          <button class='btn btn-large btn-primary'>Guardar</button>
          <a class='btn btn-large btn-warning'>Volver</a>
        </div>
      </form>
    </div>
  );
};

export default DetailedProduct;
