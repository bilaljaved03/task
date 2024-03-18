import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  return (
    <div>
{
user ? "not any data ":console.log(user)

}
    </div>
  )
}

export default Home
