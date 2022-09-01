import { useRef } from "react";
import { useCreateRepositoryMutation } from "../api";

export default function NewRepository() {

    const [trigger, { isError, isLoading, isSuccess }] = useCreateRepositoryMutation()

    const inputRef = useRef<any>(null)

    function handleCreateRepository() {
        
      console.log(inputRef?.current?.value)
      trigger(inputRef?.current?.value)

    }

  return (
    <>
        <input name="name" placeholder="repository name" ref={inputRef}></input>
        <button onClick={handleCreateRepository}>create repository</button>
        { isLoading && <h2>Loading ⌛</h2>}
        { isError && <h2>Error creating repository ⚠️</h2>}
        { isSuccess && <h2>Repository Created! 🎉</h2>}
    </>
  );
}
