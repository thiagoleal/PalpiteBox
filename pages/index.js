import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/PageTitle';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher);
  return (
    <div className="p-10">
      <PageTitle title="Seja bem vindo" />
      <h1>
        <p className="text-center">
          O restaurante X sempre busca atender melhor seus clientes.
          <br />
          Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
        <div className="text-center my-12">
          <Link href="/pesquisa">
            <a
              className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-md hover:shadow"
            >
              Dar opinião ou sugestão
            </a>
          </Link>

          { !data && <p>Carregando...</p>}
          { !error && data && data.showCoupon && (
          <p className="mt-12 text-center">
            {data.message}
          </p>
          )}
        </div>
      </h1>
    </div>
  );
};

export default Index;
