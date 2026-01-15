import { Environment, Network, type FetchFunction } from "relay-runtime";

export const graphqlClient: FetchFunction = async (request, variables) => {
  const resp = await fetch(import.meta.env.VITE_GRAPHQL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: request.text, variables }),
  });
  if (!resp.ok) {
    throw new Error("Response failed.");
  }
  return await resp.json();
};

export const gitHubEnvironment = new Environment({
  network: Network.create(graphqlClient),
});
