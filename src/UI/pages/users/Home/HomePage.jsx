import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { store } from "../../../../utils/store";
import { useQuery } from "react-query";
import { ADD_DATA_USER } from "../../../../utils/reducers/user";
import getUserBySub from "../../../../api/users/getBySub.js";
import { useState } from "react";
import ButtonBigAuth0 from "../Login/components/ButtonBigAuth0";
import Navbar from "../../../components/Navbar/NavBar";

export function HomePage() {

  return (
    <div>
        <Navbar />
    HomePage
    </div>
  );
}
