import { callAPI } from "#src/app/api";

export const AsyncComponent = async () => {
  const response = await callAPI();

  return (
    <div>
      <h3>Async Component</h3>
      <div>{response}</div>
    </div>
  );
};
