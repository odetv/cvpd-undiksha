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
import sw from "../assets/images/header/switch.png";
import { useTranslation } from "react-i18next";
import { switchToEnglish, switchToIndonesian } from "../i18n";
import logoundiksha from "../assets/images/logo/logo-undiksha.png";

const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setMobileMenuOpen(false);
    };

    const { t } = useTranslation("header");
    const [isTranslatedToID, setIsTranslatedToID] = useState(false);

    // Fungsi untuk menangani perubahan bahasa ke bahasa Inggris (EN)
    const handleSwitchToEnglish = () => {
        switchToEnglish();
        setIsTranslatedToID(false);
    };

    // Fungsi untuk menangani perubahan bahasa ke bahasa Indonesia (ID)
    const handleSwitchToIndonesian = () => {
        switchToIndonesian();
        setIsTranslatedToID(true);
    };

    const module = [
        {
            name: t("module.0.name"),
            description: t("module.0.description"),
            href: "/section1",
            icon: SquaresPlusIcon,
        },
        {
            name: t("module.1.name"),
            description: t("module.1.description"),
            href: "/section2",
            icon: SquaresPlusIcon,
        },
        {
            name: t("module.2.name"),
            description: t("module.2.description"),
            href: "/section3",
            icon: SquaresPlusIcon,
        },
        {
            name: t("module.3.name"),
            description: t("module.3.description"),
            href: "/section4",
            icon: SquaresPlusIcon,
        },
    ];

    return (
        <header className="bg-blue-900">
            <nav
                className="mx-auto flex items-center justify-between p-5 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <a href="/" className="flex flex-row items-center">
                        <img className="h-8 w-8" src={logoundiksha} alt="" />
                        <span className="ml-2 text-white font-bold">
                            CVPD Undiksha
                        </span>
                    </a>
                </div>
                <div className="flex lg:hidden gap-3">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg cursor-pointer"
                        onClick={
                            isTranslatedToID
                                ? handleSwitchToEnglish
                                : handleSwitchToIndonesian
                        }
                    >
                        <div className="text-xl" />
                        {isTranslatedToID ? (
                            <div className="flex gap-1 items-center">
                                <img src={id} className="w-6 h-4" />
                                <span className="text-xs">ID</span>
                                <img src={sw} className="w-4 h-4" />
                            </div>
                        ) : (
                            <div className="flex gap-1 items-center">
                                <img src={en} className="w-6 h-4" />
                                <span className="text-xs">EN</span>
                                <img src={sw} className="w-4 h-4" />
                            </div>
                        )}
                    </button>
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
                        {t("1")}
                    </Link>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                            {t("2")}
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
                                            className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 ease-in-out transition-all 0.5 hover:shadow-xl hover:bg-blue-50 bg-gray-100 my-2"
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
                                                <p className="mt-1 text-gray-600 uppercase">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Link
                        to="/about"
                        className="text-sm font-semibold leading-6 text-white"
                    >
                        {t("3")}
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
                    <button
                        className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg cursor-pointer"
                        onClick={
                            isTranslatedToID
                                ? handleSwitchToEnglish
                                : handleSwitchToIndonesian
                        }
                    >
                        <div className="text-xl" />
                        {isTranslatedToID ? (
                            <div className="flex gap-1 items-center">
                                <img src={id} className="w-6 h-4" />
                                <span className="text-xs">ID</span>
                                <img src={sw} className="w-4 h-4" />
                            </div>
                        ) : (
                            <div className="flex gap-1 items-center">
                                <img src={en} className="w-6 h-4" />
                                <span className="text-xs">EN</span>
                                <img src={sw} className="w-4 h-4" />
                            </div>
                        )}
                    </button>
                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg">
                        <a
                            href="https://opmx-preview.web.app/"
                            target="_blank"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            {t("4")} <span aria-hidden="true">&rarr;</span>
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
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-5 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex flex-row items-center">
                            <img
                                className="h-8 w-8"
                                src={logoundiksha}
                                alt=""
                            />
                            <span className="ml-2 text-gray-900 font-bold">
                                CVPD Undiksha
                            </span>
                        </Link>
                        <div className="flex gap-5">
                            <button
                                className="ml-7 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg cursor-pointer"
                                onClick={
                                    isTranslatedToID
                                        ? handleSwitchToEnglish
                                        : handleSwitchToIndonesian
                                }
                            >
                                <div className="text-xl" />
                                {isTranslatedToID ? (
                                    <div className="flex gap-1 items-center">
                                        <img src={id} className="w-6 h-4" />
                                        <span className="text-xs">ID</span>
                                        <img src={sw} className="w-4 h-4" />
                                    </div>
                                ) : (
                                    <div className="flex gap-1 items-center">
                                        <img src={en} className="w-6 h-4" />
                                        <span className="text-xs">EN</span>
                                        <img src={sw} className="w-4 h-4" />
                                    </div>
                                )}
                            </button>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md pr-3 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-3 divide-y-2">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    {t("1")}
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white">
                                                {t("2")}
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
                                <Link
                                    to="/about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    {t("3")}
                                </Link>
                            </div>
                            <div className="py-6 text-right flex gap-3 justify-end">
                                <button
                                    onClick={handleMenuClick}
                                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-3 rounded-lg"
                                >
                                    <a
                                        href="https://opmx-preview.web.app/"
                                        target="_blank"
                                        className="block rounded-lg text-sm leading-7 text-white"
                                    >
                                        {t("4")}{" "}
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

export default Header;
