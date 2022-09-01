import { useRef } from "react";
import { useLazyGetUserByLoginQuery } from "../api";

export default function SingleRepository() {
  const inputRef = useRef<any>(null);

  const [trigger, { data, isLoading, isError }] = useLazyGetUserByLoginQuery();

  function handleFetchData() {
    trigger(inputRef?.current.value);
  }

  return (
    <>
      <input placeholder="insert id here" ref={inputRef}></input>
      <button onClick={handleFetchData}>get user</button>

      {isLoading && <h1>Loading ⌛</h1>}
      {isError && <h1>Error ⚠️</h1>}

      {data && (
        <>
          <p>{data?.name}</p>
          <p>{data?.bio}</p>
          <p>{data?.createdAt}</p>
          <p>{data?.id}</p>
        </>
      )}
    </>
  );
}
