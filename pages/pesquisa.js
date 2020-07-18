import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 5,
  });

  const notas = [0, 1, 2, 3, 4, 5];

  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const save = async () => {
    try {
      const res = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setSucess(true);
      setRetorno(data);
    } catch (err) {}
  };

  const onChange = (evt) => {
    const { value } = evt.target;
    const key = evt.target.name;
    console.log(key);
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  return (
    <>
      <PageTitle title="Pesquisa" />
      <h1 className="text-center font-bold text-2xl">Criticas e sugestões</h1>

      <p className="text-center mx-auto my-6 w-2/3 md:w-auto">
        O restaurante X sempre busca atender melhor seus clientes.
        <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      { !sucess && (
      <div className="mx-auto w-3/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <label htmlFor="nome" className="font-bold">
          Seu nome:
          <input
            type="text"
            id="nome"
            name="Nome"
            className="w-full p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Nome"
            onChange={onChange}
            value={form.Nome}
          />
        </label>

        <label htmlFor="email" className="font-bold">
          Seu E-mail:
          <input
            type="text"
            id="email"
            name="Email"
            className="w-full p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Email"
            onChange={onChange}
            value={form.Email}
          />
        </label>

        <label htmlFor="whatsapp" className="font-bold">
          Seu Whatsapp:
          <input
            type="text"
            id="whatsapp"
            name="Whatsapp"
            className="w-full p-4 block shadow bg-blue-100 my-2 rounded"
            placeholder="Whatsapp"
            onChange={onChange}
            value={form.Whatsapp}
          />
        </label>

        <label htmlFor="nota" className="font-bold">
          Nota:
          <div className="flex py-6">
            { notas.map((nota) => (
              <label className="block w-1/6 text-center" htmlFor={`nota${nota}`}>
                {nota}
                <br />
                <input type="radio" name="Nota" id={`nota${nota}`} value={nota} onChange={onChange} />
              </label>
            ))}
          </div>
        </label>
        <p className="text-center">
          <button
            type="submit"
            className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-md hover:shadow"
            onClick={save}
          >
            Salvar
          </button>
        </p>
      </div>
      )}
      { sucess && (
      <div className="mx-auto w-3/5 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
          Obrigado por contribuir com sua sugestão ou crítica.
        </p>
        { retorno.showCupoun && (
          <div className="text-center border p-4 mb-4">
            Seu cupom:
            <br />
            <span className="font-bold text-2xl">{retorno.Cupom}</span>
          </div>
        )}
        { retorno.showCupoun && (
          <div className="text-center border p-4 mb-4">
            <span className="font-bold block mb-2">{retorno.Promo}</span>
            <br />
            <span className="italic">Tire um print ou foto dessa tela ea apresente ao atendente.</span>
          </div>
        )}
      </div>
      )}
    </>
  );
};

export default Pesquisa;
