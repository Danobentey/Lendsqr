import React from "react";
import { Card, CardBody } from "reactstrap"

interface CardProps {
  imgSrc: string;
  title: string;
  value: number;
}

const Cards :React.FC<CardProps> = ({imgSrc, title, value}) => {
  return (
    <Card className="dashboard-card" fluid>
      <CardBody>
        <img src={imgSrc} alt="" />
        <p>{title}</p>
        <b>{value}</b>
      </CardBody>
    </Card>
  )
}

export default Cards