import React from "react";

import { HeaderStylesDiv, StyledpTrackR } from "../styles/HeaderStyles";

import { Li, LiA, StyledLink } from "../styles/HeaderStyles";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStylesDiv>

      <Link to='/'>
        <StyledpTrackR>Food Truck TrackR</StyledpTrackR>
      </Link>

      
    </HeaderStylesDiv>
  );
};

export default Header;
