import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-blue text-white">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-orange animate-bounce">۴۰۴</h1>
                <h2 className="text-4xl font-semibold mt-4">صفحه پیدا نشد</h2>
                <p className="text-light-gray mt-2">
                    صفحه‌ای که به دنبال آن هستید ممکن است حذف شده باشد یا به طور موقت در دسترس نباشد.
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block px-6 py-3 bg-orange text-white rounded-lg hover:bg-dark-orange transition duration-300"
                >
                    بازگشت به صفحه اصلی
                </a>
            </div>
            <div className="mt-12">
                <svg
                    className="w-24 h-24 text-light-blue animate-spin-slow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default NotFound;
