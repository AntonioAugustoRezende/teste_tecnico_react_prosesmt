import InputDate from "./InputDate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormDateData, formDateSchema } from "../schemas/formDateSchemas";
import { CaseHook } from "../hooks/cases";

export default function FormDate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDateData>({
    resolver: zodResolver(formDateSchema),
  });

  const { handleSubmitDate } = CaseHook();

  return (
    <form className="" onSubmit={handleSubmit(handleSubmitDate)}>
      <div className="flex w-full gap-8">
        <InputDate
          label="Dia"
          placeholder="00"
          register={register("day")}
          error={errors.day?.message}
        />
        <InputDate
          label="Mês"
          placeholder="00"
          register={register("month")}
          error={errors.month?.message}
        />
        <InputDate
          label="Ano"
          placeholder="0000"
          register={register("year")}
          error={errors.year?.message}
        />
      </div>

      <button
        className="mt-5 bg-blue-950 hover:bg-blue-700 p-5 rounded cursor-pointer text-white-900 font-bold text-base"
        type="submit"
      >
        Pesquisar data
      </button>
    </form>
  );
}
