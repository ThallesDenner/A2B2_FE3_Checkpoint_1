const isEmpty = (field) => {
  return field.trim() === "";
};

const checkFormData = (formData) => {
  const { description, numberCans } = formData;

  // Condição para que a descrição esteja correta
  const regexDescription = /^[a-zA-Zà-úÀ-Ú\s]{3,30}$/;
  const descriptionCondition =
    !isEmpty(description) && regexDescription.test(description);

  // Condição para que o número de latas esteja correto
  const numberCansCondition =
    Number.isInteger(parseInt(numberCans)) &&
    numberCans >= 1 &&
    numberCans <= 100;

  return {
    descriptionError: descriptionCondition
      ? ""
      : "A descrição deve ter entre 3 a 30 caracteres.",
    numberCansError: numberCansCondition
      ? ""
      : "A quantidade deve ser entre 1 a 100.",
  };
};

export default checkFormData;
