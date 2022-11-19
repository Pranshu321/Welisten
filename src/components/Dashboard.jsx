import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, StarIcon } from '@heroicons/react/20/solid'
import { Disconnect } from './Disconnect'
import toast, { Toaster } from "react-hot-toast";
import Button from './Button'
import SignUp from './SignUp'
const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Flats', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Heels', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                            { name: 'Accessories', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Tops', href: '#' },
                            { name: 'Bottoms', href: '#' },
                            { name: 'Swimwear', href: '#' },
                            { name: 'Underwear', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Significant Other', href: '#' },
                        ],
                    },
                ],
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
                    imageAlt: 'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
                },
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                [
                    {
                        id: 'shoes',
                        name: 'Shoes & Accessories',
                        items: [
                            { name: 'Sneakers', href: '#' },
                            { name: 'Boots', href: '#' },
                            { name: 'Sandals', href: '#' },
                            { name: 'Socks', href: '#' },
                        ],
                    },
                    {
                        id: 'collection',
                        name: 'Shop Collection',
                        items: [
                            { name: 'Everything', href: '#' },
                            { name: 'Core', href: '#' },
                            { name: 'New Arrivals', href: '#' },
                            { name: 'Sale', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'clothing',
                        name: 'All Clothing',
                        items: [
                            { name: 'Basic Tees', href: '#' },
                            { name: 'Artwork Tees', href: '#' },
                            { name: 'Pants', href: '#' },
                            { name: 'Hoodies', href: '#' },
                            { name: 'Swimsuits', href: '#' },
                        ],
                    },
                    {
                        id: 'accessories',
                        name: 'All Accessories',
                        items: [
                            { name: 'Watches', href: '#' },
                            { name: 'Wallets', href: '#' },
                            { name: 'Bags', href: '#' },
                            { name: 'Sunglasses', href: '#' },
                            { name: 'Hats', href: '#' },
                            { name: 'Belts', href: '#' },
                        ],
                    },
                ],
                [
                    {
                        id: 'brands',
                        name: 'Brands',
                        items: [
                            { name: 'Re-Arranged', href: '#' },
                            { name: 'Counterfeit', href: '#' },
                            { name: 'Full Nelson', href: '#' },
                            { name: 'My Way', href: '#' },
                        ],
                    },
                ],
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}
const filters = {
    price: [
        { value: 'Stress', label: 'Stress', checked: true },
        { value: 'Anxiety', label: 'Anxiety', checked: false },
        { value: 'Depression', label: 'Depression', checked: false },
        { value: 'Substance_Addiction', label: 'Substance Addiction', checked: false },
    ],
    color: [
        { value: 'white', label: 'Pain disorders', checked: false },
        { value: 'beige', label: 'Identity Crisis', checked: false },
        { value: 'blue', label: 'Arousal Disorders', checked: false },
        { value: 'brown', label: 'Desire Disorders', checked: false },
    ],
    // size: [
    //     { value: 'xs', label: 'XS', checked: false },
    //     { value: 's', label: 'S', checked: true },
    //     { value: 'm', label: 'M', checked: false },
    //     { value: 'l', label: 'L', checked: false },
    //     { value: 'xl', label: 'XL', checked: false },
    //     { value: '2xl', label: '2XL', checked: false },
    // ],
    // category: [
    //     { value: 'all-new-arrivals', label: 'All New Arrivals', checked: false },
    //     { value: 'tees', label: 'Tees', checked: false },
    //     { value: 'objects', label: 'Objects', checked: false },
    //     { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
    //     { value: 'pants-and-shorts', label: 'Pants & Shorts', checked: false },
    // ],
}
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const products = [
    {
        id: 1,
        name: 'Dr. Willam Harris',
        price: 'Specialist: Psychologist',
        rating: 5,
        reviewCount: 40,
        imageSrc: 'https://user-images.githubusercontent.com/86917304/202836274-ed4ae42e-e56f-4072-9ab3-fa67bfa51537.png',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 2,
        name: 'Dr. Sita ram',
        price: 'Specialist : Neurologist',
        rating: 5,
        reviewCount: 50,
        imageSrc: 'https://user-images.githubusercontent.com/86917304/202836274-ed4ae42e-e56f-4072-9ab3-fa67bfa51537.png',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Dr. Lith Xuang',
        price: 'Specialist : Consultant',
        rating: 5,
        reviewCount: 50,
        imageSrc: 'https://user-images.githubusercontent.com/86917304/202836274-ed4ae42e-e56f-4072-9ab3-fa67bfa51537.png',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Dr. Maria Mathew',
        price: 'Specialist : Psychologist',
        rating: 120,
        reviewCount: 21,
        imageSrc: 'https://user-images.githubusercontent.com/86917304/202836274-ed4ae42e-e56f-4072-9ab3-fa67bfa51537.png',
        imageAlt: 'TODO',
        href: '#',
    },
    // More products...
]
// const footerNavigation = {
//     account: [
//         { name: 'Manage Account', href: '#' },
//         { name: 'Saved Items', href: '#' },
//         { name: 'Orders', href: '#' },
//         { name: 'Redeem Gift card', href: '#' },
//     ],
//     service: [
//         { name: 'Shipping & Returns', href: '#' },
//         { name: 'Warranty', href: '#' },
//         { name: 'FAQ', href: '#' },
//         { name: 'Find a store', href: '#' },
//         { name: 'Get in touch', href: '#' },
//     ],
//     company: [
//         { name: 'Who we are', href: '#' },
//         { name: 'Press', href: '#' },
//         { name: 'Careers', href: '#' },
//         { name: 'Terms & Conditions', href: '#' },
//         { name: 'Privacy', href: '#' },
//     ],
//     connect: [
//         { name: 'Instagram', href: '#' },
//         { name: 'Pinterest', href: '#' },
//         { name: 'Twitter', href: '#' },
//     ],
// }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ids = ["ed321", "fg565", "hgk5654", "gfk4343", "fdf213", "dflf775"];

function SendRoomid() {
    toast.success(`Your Chat room Id : ${ids[2]}`)
}

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: "",
                    duration: 5000,
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },

                    // Default options for specific types
                    success: {
                        duration: 5000,
                        theme: {
                            primary: "green",
                            secondary: "black",
                        },
                    },
                }}
            />
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                            'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                                <div className="space-y-4">
                                                    {category.featured.map((item, itemIdx) => (
                                                        <div
                                                            key={itemIdx}
                                                            className="group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100"
                                                        >
                                                            <img
                                                                src={item.imageSrc}
                                                                alt={item.imageAlt}
                                                                className="object-cover object-center group-hover:opacity-75"
                                                            />
                                                            <div className="flex flex-col justify-end">
                                                                <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                                                                    <a href={item.href} className="font-medium text-gray-900">
                                                                        <span className="absolute inset-0" aria-hidden="true" />
                                                                        {item.name}
                                                                    </a>
                                                                    <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                                                        Shop now
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                {category.sections.map((column, columnIdx) => (
                                                    <div key={columnIdx} className="space-y-10">
                                                        {column.map((section) => (
                                                            <div key={section.name}>
                                                                <p
                                                                    id={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="font-medium text-gray-900"
                                                                >
                                                                    {section.name}
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                                    className="mt-6 flex flex-col space-y-6"
                                                                >
                                                                    {section.items.map((item) => (
                                                                        <li key={item.name} className="flow-root">
                                                                            <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 py-6 px-4">
                                    <a href="#" className="-m-2 flex items-center p-2">
                                        <img
                                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                                            alt=""
                                            className="block h-auto w-5 flex-shrink-0"
                                        />
                                        <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                                        <span className="sr-only">, change currency</span>
                                    </a>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className='flex h-16 items-center justify-between'>
                            <div>
                                <a href='/'>
                                    <h3 className='text-[#61C0BF] text-3xl font-bold'>Welisten</h3>
                                </a>
                            </div>
                            <div onClick={() => setTimeout(() => window.location.href = "/", 1000)}>
                                <Disconnect />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div>
            </div>
            <main className="pb-24">
                <div className="pb-12 px-4 text-center sm:px-6 lg:px-8" style={{ marginTop: "-78px" }}>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Welcome User</h1>
                    <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
                        Feeling alone or finding it tough to share your thoughts & feelings? Don't worry we've got your back! Talk to experts all around the Globe.
                    </p>
                </div>
                {/* Filters */}
                <div>
                    <SignUp />
                </div>
                <Disclosure
                    as="section"
                    aria-labelledby="filter-heading"
                    className="grid items-center border-t border-b border-gray-200"
                >
                    <h2 id="filter-heading" className="sr-only">
                        Filters
                    </h2>
                    <div className="relative col-start-1 row-start-1 py-4">
                        <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
                            <div>
                                <Disclosure.Button className="group flex items-center font-medium text-gray-700">
                                    <FunnelIcon
                                        className="mr-2 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    2 Filters
                                </Disclosure.Button>
                            </div>
                            <div className="pl-6">
                                <button type="button" className="text-gray-500">
                                    Clear all
                                </button>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="border-t border-gray-200 py-10">
                        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
                            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                                <fieldset>
                                    <legend className="block font-medium text-black text-xl">Mental Issues</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.price.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    id={`price-${optionIdx}`}
                                                    name="price[]"
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    defaultChecked={option.checked}
                                                />
                                                <label htmlFor={`price-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="block font-medium text-black text-xl">Sexual Issues</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.color.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    id={`color-${optionIdx}`}
                                                    name="color[]"
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    defaultChecked={option.checked}
                                                />
                                                <label htmlFor={`color-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div>
                            {/* <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                                <fieldset>
                                    <legend className="block font-medium">Size</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.size.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    id={`size-${optionIdx}`}
                                                    name="size[]"
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    defaultChecked={option.checked}
                                                />
                                                <label htmlFor={`size-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <legend className="block font-medium">Category</legend>
                                    <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                                        {filters.category.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center text-base sm:text-sm">
                                                <input
                                                    id={`category-${optionIdx}`}
                                                    name="category[]"
                                                    defaultValue={option.value}
                                                    type="checkbox"
                                                    className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                    defaultChecked={option.checked}
                                                />
                                                <label htmlFor={`category-${optionIdx}`} className="ml-3 min-w-0 flex-1 text-gray-600">
                                                    {option.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>
                            </div> */}
                        </div>
                    </Disclosure.Panel>
                    <div className="col-start-1 row-start-1 py-4">
                        <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
                            <Menu as="div" className="relative inline-block">
                                <div className="flex">
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </Disclosure>

                {/* Product grid */}
                <section aria-labelledby="products-heading" className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <div key={product.id} className="group relative border-r border-b border-gray-200 p-4 sm:p-6">
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="pt-10 pb-4 text-center">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <a href={product.href} className="text-black text-xl font-semibold">
                                            <span className="text-black" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="mt-3 flex flex-col items-center">
                                        <p className="sr-only">{product.rating} out of 5 stars</p>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                        'flex-shrink-0 h-5 w-5'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">Talking Time : {product.reviewCount} mins</p>
                                        {/* <p className="mt-1 text-sm text-gray-500">{product.reviewCount} </p> */}
                                    </div>
                                    <p className="mt-4 text-base font-medium text-gray-500">{product.price}</p>
                                    <div className='mt-2'>
                                        <a target={"_blank"} href='https://welistenchat.up.railway.app'>
                                            <Button text={"Chat"} />
                                        </a>
                                        <a onClick={SendRoomid} className='text-black font-semibold pt-2'>Get room id</a>
                                    </div>
                                    <div className='mt-5'>
                                        <a href='https://polygon-peer-to-peer-payment.vercel.app' target={"_blank"}>
                                            <Button text={"Thank You Token ❤"} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}