'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const router = useRouter();
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries()) as { name: string, image: string, email: string, password: string };

    const { data, error } = await authClient.signUp.email({
      ...userData,
      callbackURL: "/"
    });

    if (data) {
      console.log(data);
      router.push('/');
    }
    if (error) {
      console.log(error);
    }
  }
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    })
    console.log(data);
  }
  return (
    <div className="h-screen flex flex-col items-center mt-10 ">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset rounded-box w-sm p-4">
          <label className="label">নাম</label>
          <input type="text" name="name" className="input w-full" />

          <label className="label">Image</label>
          <input type="url" name="image" className="input w-full" />

          <label className="label">ইমেইল</label>
          <input type="email" name="email" className="input w-full" />

          <label className="label">পাসওয়ার্ড</label>
          <input type="password" name="password" className="input w-full" />
          <button type="submit" className="btn bg-red-700 text-white mt-4">
            সাইন আপ করুন
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn border border-red-700 text-red-700 flex items-center gap-2 mt-4"
          >
            <FaGoogle /> গুগল দিয়ে সাইন আপ করুন
          </button>
        </fieldset>
      </form>
      <p className="text-sm ">অ্যাকাউন্ট আছে? <Link href='/signup' className="text-red-700 font-bold">সাইন ইন করুন </Link></p>
    </div>
  );
};

export default SignUpPage;
