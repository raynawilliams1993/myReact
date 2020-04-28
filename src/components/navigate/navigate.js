import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const navigate = (props) => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">About Me</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Portfolio</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Skills</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default navigate;