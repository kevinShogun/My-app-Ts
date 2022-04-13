import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [forms, setForms] = useState(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForms({
      ...forms,
      [name]: value,
    });
  };

  return {
    forms,
    handleChange,
    ...forms,
  };
};
