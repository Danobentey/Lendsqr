import React from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

interface CardProps {
  imgSrc: string;
  title: string;
  value: number;
  link?: string;
}

const Cards: React.FC<CardProps> = ({ imgSrc, title, value, link }) => {
  return (
    <Card className="dashboard-card" fluid>
      <NavLink to={link || ''}>
        <CardBody>
          <img src={imgSrc} alt="" />
          <p>{title}</p>
          <b>{value}</b>
        </CardBody>
      </NavLink>
    </Card>
  );
};

export default Cards;
