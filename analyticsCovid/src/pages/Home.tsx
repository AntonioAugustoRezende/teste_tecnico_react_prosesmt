import { useEffect } from "react";
import Card from "../components/Card";
import FormDate from "../components/FormDate";
import Title from "../components/Title";
import { CaseHook } from "../hooks/cases";
import InputCountry from "../components/InputCountry";
import InputState from "../components/InputState";
import { Loading } from "../components/Loading";

export interface Response {
  data: Cases[];
}
export interface Cases {
  uid: number;
  uf: string;
  state: string;
  cases: number;
  deaths: number;
  suspects: number;
  refuses: number;
  broadcast: boolean;
  comments: string;
  datetime: string;
}

export interface Countries {
  country: string;
  cases: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  updated_at: string;
}
export const Home = () => {
  const {
    getAllCases,
    cases,
    getAllCountries,
    countries,
    country,
    globalLoading,
    setCountry,
    state,
    setState,
  } = CaseHook();
  useEffect(() => {
    getAllCases();
    getAllCountries();
  }, []);

  return (
    <>
      {globalLoading && <Loading />}
      <div className="font-bold flex flex-1 p-6 gap-3 bg-black text-zinc-50">
        <aside className="w-96 mt-6 h-fit pt-6 flex flex-col gap-4 bg-zinc-900 p-5 rounded">
          <h2 className="font-semibold text-2xl mb-6">Filtros</h2>

          {state || country ? (
            <button
              onClick={() => {
                setCountry(null), setState(null);
              }}
              className="mt-5 w-fit bg-blue-950 hover:bg-blue-700 p-3 rounded cursor-pointer text-white-900 font-bold text-base"
            >
              Limpar Filtros
            </button>
          ) : null}

          <InputCountry
            data={cases}
            title="Por estado"
            titleButton="Pesquisar por estado"
          />
          <InputState
            country={countries}
            title="Por país"
            titleButton="Pesquisar por país"
          />

          <span>Por data</span>
          <FormDate />
        </aside>
        <main className="flex-1  rounded mt-6 bg-gradient-to-b from-blue-900/40 from-0% to-zinc-900 to-10% text-gray-100">
          <div
            className="cursor-pointer"
            onClick={() => {
              setCountry(null), setState(null);
            }}
          >
            <Title />
          </div>

          {!state && !country ? (
            <ul className="grid grid-cols-4 gap-4 p-6 mt-6">
              {cases.map((data: Cases) => (
                <Card
                  cases={data.cases}
                  deaths={data.deaths}
                  state={data.state}
                  suspects={data.suspects}
                  key={data.uid}
                />
              ))}
            </ul>
          ) : (
            <ul className="grid grid-cols-4 gap-4 p-6 mt-6">
              {country ? (
                <Card
                  cases={country?.cases}
                  deaths={country?.deaths}
                  state={country?.state}
                  suspects={country?.suspects}
                  key={country.uid}
                />
              ) : (
                state && (
                  <Card
                    state={state.country}
                    cases={state?.confirmed}
                    deaths={state?.deaths}
                    key={state.id}
                  />
                )
              )}
            </ul>
          )}
        </main>
      </div>
    </>
  );
};