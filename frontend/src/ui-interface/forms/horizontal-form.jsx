import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Select from "react-select";

const HorizontalForm = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const [selectedState, setSelectedState] = useState(null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const stateOptions = [
    { id: 1, text: "Select State" },
    { id: 2, text: "California" },
    { id: 3, text: "Texas" },
    { id: 4, text: "Florida" },
  ];
  const bgOptions = [
    { id: 1, text: "A+" },
    { id: 2, text: "O+" },
    { id: 3, text: "B+" },
    { id: 4, text: "AB+" },
  ];
  const countryOptions = [
    { id: 1, text: "USA" },
    { id: 2, text: "France" },
    { id: 3, text: "India" },
    { id: 4, text: "Spain" },
  ];

  const formattedStateOptions = stateOptions.map((option) => ({
    value: option.id,
    label: option.text,
  }));

  const formattedBgOptions = bgOptions.map((option) => ({
    value: option.id,
    label: option.text,
  }));

  const formattedCountryOptions = countryOptions.map((option) => ({
    value: option.id,
    label: option.text,
  }));

  const handleStateChange = (selectedState) => {
    setSelectedState(selectedState);
  };

  const handleBloodGroupChange = (selectedBloodGroup) => {
    setSelectedBloodGroup(selectedBloodGroup);
  };

  const handleCountryChange = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  const formHandler = () => {};
  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        {/* Page wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/*Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Horizontal Form</h5>
              </div>
            </div>
            {/* /Page Header */}

            <div className="row">
              <div className="col-xl-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <h5 className="card-title">Basic Form</h5>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          First Name
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Last Name
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Email Address
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="email"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Username
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Password
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="password"
                            autoComplete="off"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Repeat Password
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="password"
                            autoComplete="off"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <h5 className="card-title">Address Form</h5>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Address 1
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Address 2
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">City</label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">State</label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Country
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="input-block mb-3 row">
                        <label className="col-lg-3 col-form-label">
                          Postal Code
                        </label>
                        <div className="col-lg-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={formHandler}
                          />
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Two Column Horizontal Form</h5>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Personal Information</h5>
                    <form action="#">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              First Name
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Last Name
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Gender
                            </label>
                            <div className="col-lg-9">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  onChange={formHandler}
                                  id="gender_male"
                                  value="option1"
                                  checked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gender_male"
                                >
                                  Male
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  onChange={formHandler}
                                  id="gender_female"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gender_female"
                                >
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Blood Group
                            </label>
                            <div className="col-lg-9">
                              <Select
                                value={selectedBloodGroup}
                                onChange={handleBloodGroupChange}
                                options={formattedBgOptions}
                                placeholder="Select Blood Group"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Username
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Email
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Password
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="password"
                                className="form-control"
                                autoComplete="off"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Repeat Password
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="password"
                                className="form-control"
                                autoComplete="off"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="card-title">Address</h5>
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Address Line 1
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Address Line 2
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              State
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              City
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Country
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Postal Code
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Two Column Horizontal Form</h5>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="row">
                        <div className="col-xl-6">
                          <h5 className="card-title">Personal Details</h5>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              First Name
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Last Name
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Password
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="password"
                                autoComplete="off"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              State
                            </label>
                            <div className="col-lg-9">
                              <Select
                                className="w-100"
                                value={selectedState}
                                onChange={handleStateChange}
                                options={formattedStateOptions}
                                placeholder="Select State"
                              />{" "}
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              About
                            </label>
                            <div className="col-lg-9">
                              <textarea
                                rows="4"
                                cols="5"
                                className="form-control"
                                placeholder="Enter message"
                                onChange={formHandler}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <h5 className="card-title">Personal details</h5>
                          <div className="row">
                            <label className="col-lg-3 col-form-label">
                              Name
                            </label>
                            <div className="col-lg-9">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="input-block mb-3">
                                    <input
                                      type="text"
                                      placeholder="First Name"
                                      className="form-control"
                                      onChange={formHandler}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-block mb-3">
                                    <input
                                      type="text"
                                      placeholder="Last Name"
                                      className="form-control"
                                      onChange={formHandler}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Email
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Phone
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="input-block mb-3 row">
                            <label className="col-lg-3 col-form-label">
                              Address
                            </label>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                className="form-control m-b-20"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-block mb-3 col-md-6">
                              <label>Country</label>
                              <Select
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                options={formattedCountryOptions}
                                placeholder="Select Country"
                              />
                            </div>
                            <div className="input-block mb-3 col-md-6">
                              <label>State/Province</label>
                              <input
                                type="text"
                                placeholder="State/Province"
                                className="form-control"
                                onChange={formHandler}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>ZIP code</label>
                                <input
                                  type="text"
                                  placeholder="ZIP code"
                                  className="form-control"
                                  onChange={formHandler}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block mb-3">
                                <label>City</label>
                                <input
                                  type="text"
                                  placeholder="City"
                                  className="form-control"
                                  onChange={formHandler}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page wrapper */}
      </div>
    </>
  );
};
export default HorizontalForm;
