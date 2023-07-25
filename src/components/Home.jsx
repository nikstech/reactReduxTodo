import React, { useEffect } from "react";
import Action from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const resDatas = useSelector((state) => state.reducer.details);
  console.log("resDatas is:", resDatas);
  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {resDatas.map((resData, id) => {
            return (
              <tr key={id}>
                <th scope="row">{resData.id}</th>
                <td>{resData.name}</td>
                <td>{resData.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
