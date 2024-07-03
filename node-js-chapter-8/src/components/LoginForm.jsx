import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNode } from "../context/NodeContext";
import localforage from "localforage";

const LoginForm = () => {
  const { token, setToken, localforageKey } = useNode();
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const response = await axios.post("http://localhost:5500/auth/login", user);
    setToken(response.data);
    await localforage.setItem(localforageKey, response.data);
    setUser(initialState);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <form
      className='flex flex-col gap-4 bg-gray-800 w-full p-5'
      onSubmit={handleSubmit}>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='email1'
            value='Email'
          />
        </div>
        <TextInput
          onChange={handleChange}
          value={user.email}
          name='email'
          id='email1'
          type='text'
          placeholder='Enter email here'
          required
        />
      </div>

      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='thumb'
            value='Password'
          />
        </div>
        <TextInput
          onChange={handleChange}
          value={user.password}
          name='password'
          id='thumb'
          type='text'
          placeholder='Enter Password'
          required
        />
      </div>
      <Button type='submit'>Login</Button>
    </form>
  );
};

export default LoginForm;
