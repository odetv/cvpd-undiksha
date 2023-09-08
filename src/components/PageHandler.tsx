import React from "react";

export default function PageHandler() {
    return (
        <section className="bg-indigo-50 pb-72">
            <div className="grid max-w-screen-full place-items-center px-6 py-36 lg:px-8 mx-auto text-center">
                <p className="text-lg font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Page Not Found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn't find the page you were looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-3">
                    <a
                        href="/"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Return
                    </a>
                    <div className="flex items-center gap-2 px-3.5 py-2.5 text-sm font-semibold rounded-md border border-indigo-600 text-indigo-600">
                        <a href="#" className="text-sm font-semibold">
                            Help
                        </a>
                        <span aria-hidden="true">&rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
