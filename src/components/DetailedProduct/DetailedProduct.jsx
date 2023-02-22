import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../shared/services/api';

const DetailedProduct = ({ detailedProduct, colours, sizes }) => {
  detailedProduct.colour = colours.find((colour) => {
    if (colour.id === detailedProduct.colour_id) {
      return colour.name;
    }
  });
  detailedProduct.size = sizes.find((size) => {
    if (size.id === detailedProduct.size_id) {
      return size.name;
    }
  });

  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.name === '') {
      data.name = detailedProduct.name;
    }
    if (data.size === '') {
      data.size = detailedProduct.size_id;
    }
    if (data.colour === '') {
      data.colour = detailedProduct.colour_id;
    }
    if (data.observations === '') {
      data.observations = detailedProduct.observations;
    }
    console.log(data, 'post');
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
            {detailedProduct.size && (
              <option value={detailedProduct.size.id} selected>
                {detailedProduct.size.name}
              </option>
            )}
            {sizes.map((size, index) => {
              if (size.id !== detailedProduct.size.id) {
                return (
                  <option key={index} value={size.id}>
                    {size.name}
                  </option>
                );
              }
            })}
          </select>
        </div>
        <div class='mb-3'>
          <label for='colour' class='form-label'>
            Color
          </label>
          <select class='form-control' id='colour' {...register('colour')}>
            {detailedProduct.colour && (
              <option value={detailedProduct.colour.id} selected>
                {detailedProduct.colour.name}
              </option>
            )}
            {colours.map((colour, index) => {
              if (colour.id !== detailedProduct.colour.id) {
                return (
                  <option key={index} value={colour.id}>
                    {colour.name}
                  </option>
                );
              }
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
            defaultValue={detailedProduct.observations}
            {...register('observations')}
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
  );
};

export default DetailedProduct;
