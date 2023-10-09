import React from "react";
import backarrow from "../../images/go-back-left-arrow.png";
import profileImg from "../../images/Image 292.png";
import editIcon from "../../images/edit.png";

const Profile = ({ isDrawerOpen }) => {
  return (
    <div
      className={`bg-grey_bg pt-0 pl-5 pr-3 pb-2 h-h93vh overflow-y-auto`}
    >
      <div>
        <section className="flex items-center hidden md-sm:flex mt-m10">
          <h3 className="text-fs12 text-grey">Dasboard |</h3>
          <h3 className="text-fs12 text-sky_blue ml-m4">My Account</h3>
        </section>

        <section>
          <article className="bg-white mt-m10 p-3 rounded-br4 ">
            <div className="flex items-center">
              <img src={backarrow} className="h-h15" />
              <h3 className="text-fs16 ml-m10">My Account</h3>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="mt-m20  col-span-2">
                <div className="flex justify-between items-center py-2 px-4 bg-grey_bg2">
                  <h3 className="text-fs16 ">My Profile</h3>
                  <img src={editIcon} className="h-h15 cursor-pointer" />
                </div>

                <div className="flex py-3 px-2">
                  <img
                    src={profileImg}
                    className="h-h118  w-w118 rounded-br50p object-center"
                  />
                  <div className="ml-m20">
                    <h1 className="text-fs22 ">Divya Chatterjee</h1>
                    <div className="text-fs12 text-grey_subtext mt-m8">
                      Designation
                    </div>
                    <h4 className="text-fs14 mt-mn5">Assistant Manager - HR</h4>
                    <div className="text-fs12 text-grey_subtext mt-m8">
                      Company Name
                    </div>
                    <h4 className="text-fs14 mt-mn5">XXY Company Name</h4>
                  </div>
                </div>

                <div>
                  <div className="text-fs12 text-grey_subtext">About Me</div>
                  <p className="text-fs14">
                    Microsoft enables digital transformation for the era of an
                    intelligent cloud and an intelligent edge. Its mission is to
                    empower every person and every organization on the planet to
                    achieve more. Microsoft set up its India operations in 1990.
                    Microsoft in India offers its global cloud services from
                    local data centers to accelerate digital transformation
                    across Indian start-ups, businesses, and government
                    agencies.
                  </p>
                </div>
              </article>

              <article className="mt-m20 md:col-span-1 col-span-2">
                <div className="flex justify-between items-center py-2 px-4 bg-grey_bg2">
                  <h3 className="text-fs16 ">My Account Setting</h3>
                  <img src={editIcon} className="h-h15 cursor-pointer" />
                </div>

                <div className=" py-3 px-2">
                  <div className="flex justify-between w-w82p px-2">
                    <div>
                      <div className="text-fs12 text-grey_subtext mt-m8">
                        Full Name*
                      </div>
                      <h4 className="text-fs14 ">Divya Chatterjee</h4>
                    </div>
                    <div>
                      <div className="text-fs12 text-grey_subtext mt-m8">
                        Designation
                      </div>
                      <h4 className="text-fs14 ">Assistant Manager - HR</h4>
                    </div>
                  </div>

                  <div className="flex justify-between items-center w-w82p px-2 mt-m20">
                    <div>
                      <div className="text-fs12 text-grey_subtext mt-m8">
                        Phone / Landline*
                      </div>
                      <h4 className="text-fs14 ">0976575432</h4>
                    </div>

                    <h4 className="text-fs14 text-sky_blue mt-m20 cursor-pointer">
                      Change Password
                    </h4>
                  </div>
                </div>
              </article>

              <article className="mt-m20 md:col-span-1 col-span-2">
                <div className="flex justify-between items-center py-2 px-4 bg-grey_bg2">
                  <h3 className="text-fs16 ">Application Settings</h3>
                  <img src={editIcon} className="h-h15 cursor-pointer" />
                </div>

                <div className=" py-3 px-2">
                  <div className="text-fs12 text-grey_subtext mt-m8">
                    Receive job applications via
                  </div>
                  <div className="text-fs12  mt-m8">Only on my dashboard</div>
                  <div className="text-fs12  mt-m8">
                    Email and on my dashboard
                  </div>
                  <div className="text-fs12 text-grey_subtext mt-m8">
                    *Please note, this setting will not impact your old job
                    postings
                  </div>
                </div>
              </article>
            </section>
          </article>
        </section>
      </div>

      <footer className="flex justify-between text-fs12 mt-m20">
        <div className="text-grey">2019 @ Jobsforher</div>

        <section className="flex">
          <div className="mr-m10 text-grey">About us</div>
          <div className="mr-m10 text-grey">Pricing</div>
          <div className="mr-m10 text-grey">FAQ's</div>
        </section>
      </footer>
    </div>
  );
};

export default Profile;
