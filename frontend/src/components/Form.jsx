/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import { useRef } from "react";
import axios from "axios";

export default function Form() {
  const backRef = import.meta.env.VITE_BACKEND_URL;
  const inputRef = useRef();

  const hSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios.post(`${backRef}/api/avatar`, formData);
    inputRef.current = "";
  };

  return (
    <form encType="multipart/form-data" onSubmit={hSubmit}>
      <input type="file" name="avatar" ref={inputRef} />
      <button type="submit">Envoyer</button>
    </form>
  );
}
