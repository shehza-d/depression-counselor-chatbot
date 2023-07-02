"use client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { countries } from "@/data";

export default function SetUserProfile() {
  const [showProfileForm, setShowProfileForm] = useState();
  const [gender, setGender] = useState("Male");
  const [country, setCountry] = useState("Pakistan");

  useEffect(() => {
    const profile = localStorage.getItem("profile");
    profile ? setShowProfileForm(false) : setShowProfileForm(true);
  }, []);

  const addProfileToLocalStorage = (e) => {
    e.preventDefault();
    localStorage.setItem("profile", JSON.stringify({ gender, country }));
    toast.success(`Profile updated successfully!`);
    setShowProfileForm(false);
  };

  return (
    <>
      {showProfileForm ? (
        <form
          className="mb-8 flex flex-col gap-6"
          onSubmit={addProfileToLocalStorage}
        >
          <p>Let&apos;s set your profile:</p>

          <label htmlFor="countries" className="block font-medium text-gray-400">
            Select your gender
            <select
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-slate-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              onChange={(e) => setGender(e.target.value)}
              name="gender"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label htmlFor="countries" className="block font-medium text-gray-400">
            Select a country
            <select
              onChange={(e) => setCountry(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 capitalize text-slate-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary"
              name="country"
            >
              {countries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <button
            className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-primary hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
            type="submit"
          >
            Add to Profile
          </button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
}
