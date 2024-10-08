import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import Data from "../../assets/jsons/testimonials";
import "../../_components/antd.css";
import {  Table, Tooltip } from "antd";

import AddVendor from "../../customers/vendors/addVendor";
import { filterIcon } from "../../_components/Imagepath";
import { itemRender, onShowSizeChange } from "../../_components/paginationfunction";

const Testimonials = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const datasource = Data?.Data;

  const columns = [
    {
      title: "#",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      render: (text,record) => (
        <div>
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-md me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">
              {record.Name} <span>{record.email}</span>
            </Link>
          </h2>
        </div>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      render: () => (
        <div>
          <span className="mail-important">
            <i className="fas fa-star starred text-warning me-1" />
          </span>
          <span className="mail-important">
            <i className="fas fa-star starred text-warning me-1" />
          </span>
          <span className="mail-important">
            <i className="fas fa-star starred text-warning me-1" />
          </span>
          <span className="mail-important">
            <i className="fas fa-star starred text-warning me-1" />
          </span>
          <span className="mail-important">
            <i className="fas fa-star starred text-warning me-1" />
          </span>
        </div>
      ),
      sorter: (a, b) => a.Rating.length - b.Rating.length,
    },
    {
      title: "Content",
      dataIndex: "Content",
      sorter: (a, b) => a.Content.length - b.Content.length,
    },
    {
      title: "Created On",
      dataIndex: "Created",
      sorter: (a, b) => a.Created.length - b.Created.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text) => (
        <div>
          {text === "Active" && (
            <span className="badge badge-pill bg-success-light">{text}</span>
          )}
          {text === "Deactive" && (
            <span className="badge badge-pill bg-danger-light">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        <div>
          <div className="d-flex align-items-center">
            <Link className=" btn-action-icon me-2" to="/edit-testimonials">
              {/* <i className="fe fe-edit" /> */}
              <FeatherIcon icon="edit" />
            </Link>
            <Link
              className=" btn-action-icon"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#delete_modal"
            >
              {/* <i className="fe fe-trash-2" /> */}
              <FeatherIcon icon="trash-2" />
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header ">
                <h5>Testimonials</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link to="#" className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                           <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>        
                        </span>
                        Filter
                      </Link>
                    </li>
                 
                    <li>
                      <Link className="btn btn-primary" to="/add-testimonials">
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Testimonials
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Search Filter */}
            <div id="filter_inputs" className="card filter-card">
              <div className="card-body pb-0">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Email</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="input-block mb-3">
                      <label>Phone</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Search Filter */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body Testimonials">
                    <div className="table-responsive table-hover">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          // showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddVendor 
          setShow={setShow}
          show={show}
        />

        <div className="modal custom-modal fade" id="delete_modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Testimonials</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-continue-btn"
                      >
                        Delete
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link
                        to="#"
                        data-bs-dismiss="modal"
                        className="btn btn-primary paid-cancel-btn"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
