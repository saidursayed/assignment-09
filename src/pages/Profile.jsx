import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, editUserProfile } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const name = user.displayName || user.providerData?.[0]?.displayName;
  const email = user.email || user.providerData?.[0]?.email;
  const photo = user.photoURL || user.providerData?.[0]?.photoURL;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    setLoading(true);
    editUserProfile(name, photo)
      .then(() => {
        toast.success("Profile updated successfully!");
        setLoading(false);
        document.getElementById("my_modal_5").close();
        form.reset()
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        {loading ? (
          <Loading></Loading>
        ) : (
          <div>
            <div className="flex items-center gap-4 border-gray-400 border-b pb-5">
              <div className="relative">
                <img
                  src={photo}
                  alt=""
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                <p className="text-sm text-gray-500">{email}</p>
              </div>
            </div>
            {/* Profile Info */}
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center pb-3">
                <span className="text-sm text-gray-600">Name</span>
                <span className="text-sm font-medium text-gray-800">
                  {name}
                </span>
              </div>

              <div className="flex justify-between items-center pb-3">
                <span className="text-sm text-gray-600">Email </span>
                <span className="text-sm font-medium text-gray-800">
                  {email}
                </span>
              </div>

              <div className="flex justify-between gap-10 items-start pb-3">
                <span className="text-sm text-gray-600">Image URL</span>
                <span className="text-sm font-medium break-all text-gray-800">
                  {photo}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Action */}
        <div className="mt-8">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Update Profile
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box ">
              <div>
                <h3 className="font-semibold text-3xl text-center">
                  Update Profile
                </h3>
                <form
                  onSubmit={handleUpdateProfile}
                  className="card-body py-0 mt-4"
                >
                  <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label text-base text-gray-600">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="input w-full outline-secondary focus:border-0"
                      placeholder="Enter your name"
                      
                    />
                    {/* Photo URL */}
                    <label className="label text-base text-gray-600">
                      Photo URL
                    </label>
                    <input
                      name="photo"
                      type="text"
                      className="input w-full outline-secondary focus:border-0"
                      placeholder="Enter your photo URL"
                      
                    />

                    <div className="flex items-center gap-4 mt-2">
                      <div className="modal-action m-0">
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById("my_modal_5").close()
                          }
                          className="btn border-[#7F56D9] text-secondary text-sm  "
                        >
                          Close
                        </button>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn bg-[#7F56D9] hover:bg-secondary text-white text-sm"
                      >
                        Save
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Profile;
