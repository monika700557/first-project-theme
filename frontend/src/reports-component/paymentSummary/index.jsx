
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import "../../_components/antd.css";
import { Table, Tooltip } from "antd";
import Data from "../../assets/jsons/paymentSummary";
import FeatherIcon from "feather-icons-react";
import {
  onShowSizeChange,
  itemRender,
} from "../../_components/paginationfunction";
import { filterIcon } from "../../_components/Imagepath";
import AddVendor from "../../customers/vendors/addVendor";

const PaymentSummary = () => {
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
      title: "Transaction ID",
      dataIndex: "Transaction",
      sorter: (a, b) => a.Transaction.length - b.Transaction.length,
    },
    {
      title: "Invoice Number",
      dataIndex: "Invoice",
      sorter: (a, b) => a.Invoice.length - b.Invoice.length,
    },
    {
      title: "Customer",
      dataIndex: "Name",
      render: (img,record) => (
        <div>
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.Img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">
              {record.Name} <span>{record.Phone}</span>
            </Link>
          </h2>
        </div>
      ),
      sorter: (a, b) => a.Invoice.length - b.Invoice.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Payment Method",
      dataIndex: "Payment",
      sorter: (a, b) => a.Payment.length - b.Payment.length,
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
              <div className="content-page-header">
                <h5>Payment Summary</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        to="#"
                        className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                          <Tooltip title="Filter" placement="bottom">
                            <img src={filterIcon} alt="filter" />
                          </Tooltip>
                        </span>
                        Filter
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          <Tooltip title="Setting" placement="bottom">
                            <FeatherIcon icon="settings" />
                          </Tooltip>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          <FeatherIcon icon="grid" />
                        </span>
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
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body paymentSummary">
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
      </div>
    </>
  );
};

export default PaymentSummary;
