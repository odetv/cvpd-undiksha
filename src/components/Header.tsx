import { Link } from "react-router-dom";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import id from "../assets/images/header/id.png";
import en from "../assets/images/header/en.png";

const module = [
    {
        name: "Section 1",
        description: "Encounter Focal Issue",
        href: "/section1",
        icon: SquaresPlusIcon,
    },
    {
        name: "Section 2",
        description: "Engage with Three-Dimensional Learning",
        href: "/section2",
        icon: SquaresPlusIcon,
    },
    {
        name: "Section 3",
        description:
            "Synthesis Key Ideas and Practice Integrated Management of Healthy Citrus",
        href: "/section3",
        icon: SquaresPlusIcon,
    },
    {
        name: "Section 4",
        description:
            "Sustainable Development through Citrus nobilis Organic-Farm Management",
        href: "/section4",
        icon: SquaresPlusIcon,
    },
];

const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setMobileMenuOpen(false);
    };
    const [isTranslatedToID, setIsTranslatedToID] = useState(false);
    const handleTranslate = () => {
        setIsTranslatedToID(!isTranslatedToID);
    };
    return (
        <header className="bg-blue-900">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="flex flex-row items-center">
                        <img
                            className="h-8 w-8"
                            src="https://cdn.undiksha.ac.id/wp-content/uploads/2018/01/27142711/favicon-logo-undiksha.png"
                            alt=""
                        />
                        <span className="ml-2 text-white font-bold">
                            CVPD Undiksha
                        </span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link
                        to="/"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Home
                    </Link>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            Module
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {module.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    {/* <Link
                        to="/task"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        Task
                    </Link> */}
                    <Link
                        to="/about"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        About
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                    <button
                        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
                        onClick={handleTranslate}
                    >
                        <div className="text-xl" />
                        {isTranslatedToID ? (
                            <div className="flex gap-1 items-center">
                                <img src={id} className="w-6 h-4" />
                                <span className="text-xs">ID</span>
                            </div>
                        ) : (
                            <div className="flex gap-1 items-center">
                                <img src={en} className="w-6 h-4" />
                                <span className="text-xs">EN</span>
                            </div>
                        )}
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        <a
                            href="https://opmx-preview.web.app/"
                            target="_blank"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            Tim Malang <span aria-hidden="true">&rarr;</span>
                        </a>
                    </button>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex flex-row items-center">
                            <img
                                className="h-8 w-8"
                                src="https://cdn.undiksha.ac.id/wp-content/uploads/2018/01/27142711/favicon-logo-undiksha.png"
                                alt=""
                            />
                            <span className="ml-2 text-gray-900 font-bold">
                                CVPD Undiksha
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md pr-3 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-3 divide-y">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    Home
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white">
                                                Module
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...module].map((item) => (
                                                    <Disclosure.Button
                                                        onClick={
                                                            handleMenuClick
                                                        }
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                {/* <Link
                                    to="task"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    Task
                                </Link> */}
                                <Link
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    About
                                </Link>
                            </div>
                            <div className="py-6 text-right flex gap-3 justify-end">
                                <button
                                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
                                    onClick={handleTranslate}
                                >
                                    <div className="text-xl" />
                                    {isTranslatedToID ? (
                                        <div className="flex gap-1 items-center">
                                            <img src={id} className="w-6 h-4" />
                                            <span className="text-xs">ID</span>
                                        </div>
                                    ) : (
                                        <div className="flex gap-1 items-center">
                                            <img src={en} className="w-6 h-4" />
                                            <span className="text-xs">EN</span>
                                        </div>
                                    )}
                                </button>
                                <button
                                    onClick={handleMenuClick}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg"
                                >
                                    <a
                                        href="https://opmx-preview.web.app/"
                                        target="_blank"
                                        className="block rounded-lg text-sm leading-7 text-white"
                                    >
                                        Tim Malang{" "}
                                        <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;
