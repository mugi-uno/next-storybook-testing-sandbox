export const callAPI = async () => {
  await new Promise((r) => {
    setTimeout(r, 1000);
  });

  return "API RESPONSE";
};
