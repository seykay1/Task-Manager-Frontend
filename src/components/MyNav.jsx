import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TaskDutyLogo from "../assets/icons/task-duty.png";

const MyNav = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Link
          to="/"
          className="d-flex align-items-center gap-2 text-decoration-nonetext-black"
        >
          <img src={TaskDutyLogo} alt="" />
          <h3 className="m-0 fs-5">TaskDuty</h3>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-md-end gap-2 w-100">
            <Link
              className="text-decoration-none fw-semibold text-black"
              to="/new-task"
            >
              New Task
            </Link>
            <Link
              className="text-decoration-none fw-semibold text-black"
              to="/my-task"
            >
              All Tasks
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
