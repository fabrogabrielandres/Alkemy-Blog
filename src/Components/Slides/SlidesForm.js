import React, { useState, useEffect } from "react";
import "../FormStyles.css";
import FormSlides from "./Form";
import axios from "axios";

const SlidesForm = ({ match }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [exito, setExito] = useState(false);
  const [carga, setCarga] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (match.params.id) {
      axios(`http://ongapi.alkemy.org/api/slides/${match.params.id}`)
        .then((res) => {
          setData({
            nombre: res.data.data.name,
            descripcion: res.data.data.description,
            imagen: res.data.data.image,
            order: res.data.data.order,
          });
          setLoading(false);
          setCarga(true);
        })
        .catch((error) => {
          setError("Error: El id de Slide recibido no existe");
          setLoading(false);
        });
    } else {
      setData({
        nombre: "",
        descripcion: "",
        imagen: "",
        order: "",
      });
      setLoading(false);
      setCarga(true);
    }
  }, [match]);

  const handleSubmit = async (values) => {
     const json = {
      image: Buffer.from(String(values.imagen.name)).toString("base64"),
      name: values.nombre,
      description: values.descripcion,
      order: values.order
      }
    const create = (slide) =>
      axios.post("http://ongapi.alkemy.org/api/slides#t53", slide);
    const update = (slide) =>
      axios.put(
        `http://ongapi.alkemy.org/api/slides/${match.params.id}#t53`,
        slide
      );
    try {
      const res = match.params.id ? await update(json) : await create(json);
      console.log(res);
      if (match.params.id) {
        setExito("El Slide fue actualizado exitosamente");
      } else {
        setExito("El Slide fue creado exitosamente");
      }
    } catch (error) {
      setError("Hubo un error al conectar con el servidor");
    }
  };

  return (
    <div>
      {exito && <h4 style={{ textAlign: "center" }}>{exito}</h4>}
      {error && <h4 style={{ textAlign: "center" }}>{error}</h4>}
      {loading && !carga && (
        <h4 style={{ textAlign: "center" }}>Cargando...</h4>
      )}
      {!loading && carga && (
        <div>
          <h4>{match.params.id ? "Editar Slide" : "Crear Slide"}</h4>
          <FormSlides
            nombre={data.nombre}
            descripcion={data.descripcion}
            imagen={data.imagen}
            order={data.order}
            handleOnSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default SlidesForm;
