import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Vinoth Kumar M",
      image:
        "https://c1.wallpaperflare.com/preview/505/26/527/stylish-boy-fashion-man-s-fashion-blurry-background.jpg",
      placeCount: 3,
    },
    {
      id: "u2",
      name: "Akshaya",
      image:
        "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/genelia-d-souza-730-24-03-2017-17-29-08.jpg",
      placeCount: 1,
    },
    {
      id: "u3",
      name: "Veera",
      image:
        "https://images.news18.com/ibnlive/uploads/2022/09/rohit-sharma-angry-ap.jpg",
      placeCount: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
