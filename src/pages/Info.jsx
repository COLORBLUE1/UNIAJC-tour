
import styled from 'styled-components';

// Estilos usando styled-components

const Container = styled.div`
  padding: 20px;
  text-align: center;
  color: #fff;
`;

const Estudiantes = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const Estudiante = styled.div`
  flex: 1 1 30%;
  min-width: 200px;
  text-align: center;
`;

const ImagenEstudiante = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;


const Info = () => {
  const estudiantes = [
    {
      nombre: 'Juan Meza',
      profesion: 'Ingeniero en Sistemas',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPzYXgaH8iSYqY2hyomtR6O2BvVTsJEtL6yw&s',
    },
    {
      nombre: 'Juan Gonsales',
      profesion: 'Ingeniera en Sistemas',
      imagen: 'https://cdn.shopify.com/s/files/1/0046/2779/1960/files/ichigo_kurosaki_4.jpg?v=1630678324',
    },
    {
      nombre: 'Camilo Sol',
      profesion: 'Ingeniero en Sistemas',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkh3uep8GJ6Jwjeluk00g9w3eLm1MS39IgRw&s',
    },
  ];

  return (
    <Container>
      <h2>UNIAJC TOUR</h2>
      <p>Este proyecto fue creado por tres estudiantes de Ingeniería en Sistemas. La aplicación utiliza tecnología de realidad aumentada para...</p>
      <Estudiantes>
        {estudiantes.map((estudiante, index) => (
          <Estudiante key={index}>
            <ImagenEstudiante src={estudiante.imagen} alt={estudiante.nombre} />
            <h3>{estudiante.nombre}</h3>
            <p>{estudiante.profesion}</p>
          </Estudiante>
        ))}
      </Estudiantes>
    </Container>
  );
};

export default Info;