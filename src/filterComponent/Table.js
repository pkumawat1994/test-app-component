import React from "react";

const Table = ({ user }) => {
  return (
    <>
      <h2>User Table</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">city</th>
          </tr>
        </thead>
        <tbody>
          {user.map((elem, i) => {
            return (
              <>
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.email}</td>
                  <td>{elem.address.city}</td>
                </tr>
                ;
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
