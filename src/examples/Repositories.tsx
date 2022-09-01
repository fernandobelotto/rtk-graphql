import { useState } from "react";
import { useGetRepositoriesQuery } from "../api";

export default function Repositories() {
  const [first, setFirst] = useState(10);
  const { isLoading, isError, data } = useGetRepositoriesQuery({
    first,
  });

  return (
    <>
      <label htmlFor="numberOfRepos">Number of repositories </label>
      <input
        id="numberOfRepos"
        type="number"
        value={first}
        onChange={(e) => setFirst(Number(e.target.value))}
      />
      {isLoading && <h1>Loading ⌛</h1>}
      {isError && <h1>Error ⚠️</h1>}

      {data?.map((repository: any) => {
        return (
          <div key={repository.id}>
            <a href={repository.url}>
              <p>{repository.name}</p>
            </a>
          </div>
        );
      })}
    </>
  );
}
