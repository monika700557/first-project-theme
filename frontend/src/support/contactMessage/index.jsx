import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import Data from "../../assets/jsons/contactMessage";
import { Table, Tooltip } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import "../../_components/antd.css";
import { filterIcon } from "../../_components/Imagepath";
import AddVendor from "../../customers/vendors/addVendor";

const ContactMessage = () => {
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
            <Link to="/contact-details" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">{record.Name}</Link>
          </h2>
        </div>
      ),
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "Mobile Number",
      dataIndex: "Mobile",
      sorter: (a, b) => a.Mobile.length - b.Mobile.length,
    },
    {
      title: "Message",
      dataIndex: "Message",
      sorter: (a, b) => a.Message.length - b.Message.length,
    },
    {
      title: "Created On",
      dataIndex: "Createdon",
      sorter: (a, b) => a.Createdon.length - b.Createdon.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: () => (
        
          <div>
            <Link
              className=" btn-action-icon me-2"
              to="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_contact"
            >
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
       
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];

  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={() => toggleMobileMenu()} />

      <Sidebar />

      {/* /Sidebar */}
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Contact Messages</h5>
              <div className="list-btn">
                <ul className="filter-list">
                  <li>
                    <Link
                      to="#"
                      className="btn btn-filters w-auto popup-toggle"
                      onClick={() => setShow(!show)}
                    >
                      <span className="me-2">
                         <Tooltip title="Filter">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>        
                        </span>
                      Filter{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="btn-filters" to="#">
                      <span>
                        {/* <i className="fe fe-grid" /> */}
                        <FeatherIcon icon="grid" />
                      </span>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="active btn-filters" to="#">
                      <span>
                        {/* <i className="fe fe-list" /> */}
                        <FeatherIcon icon="list" />
                      </span>{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Table */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card-table">
                <div className="card-body Contact-message">
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
          {/* /Table */}
        </div>
      </div>

      <AddVendor setShow={setShow} show={show} />

      <div className="modal custom-modal fade" id="edit_contact" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header border-0 pb-0">
              <div className="form-header modal-header-title text-start mb-0">
                <h4 className="mb-0">Edit Contact Messages</h4>
              </div>
              <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="John Smith"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="john@example.com"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Mobile</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="989-438-3131"
                      placeholder="Enter Mobile Number"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-3">
                    <label>Message</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Lorem ipsum dolor"
                      placeholder="message"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="input-block mb-0">
                    <label>Date</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="15 Dec 2022, 04:35 PM"
                      placeholder="message"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link
                to="#"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-cancel-btn me-2"
              >
                Cancel
              </Link>
              <Link
                to="#"
                data-bs-dismiss="modal"
                className="btn btn-primary paid-continue-btn"
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="modal custom-modal fade" id="delete_modal" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Contact Messages</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <button
                      type="reset"
                      data-bs-dismiss="modal"
                      className="w-100 btn btn-primary paid-continue-btn"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="w-100 btn btn-primary paid-cancel-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMessage;
