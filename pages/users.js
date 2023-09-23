import React from "react";

const Users = () => {
  return (
    <div>
      <h1 className="text-2xl">Users</h1>
      <div className="relative overflow-x-auto">
        <table className=" w-full text-left">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Phone
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Users;
