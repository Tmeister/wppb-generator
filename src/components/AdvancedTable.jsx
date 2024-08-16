'use client'

import { useState } from 'react' // Import useState for managing state
import { wpConstants } from '@/lib/wpContants'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import { Fragment } from 'react'

const locations = [
  {
    name: 'Edinburgh',
    people: [
      {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
      },
      {
        name: 'Courtney Henry',
        title: 'Designer',
        email: 'courtney.henry@example.com',
        role: 'Admin',
      },
    ],
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function AdvancedTable() {
  // const [searchTerm, setSearchTerm] = useState('') // State for search input
  //
  // // Function to handle search input change
  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value)
  // }
  //
  // // Filter wpConstants based on search term
  // const filteredConstants = wpConstants.filter((item) =>
  //   item.constant.toLowerCase().includes(searchTerm.toLowerCase()),
  // )

  return (
    <div className="rounded-md border border-gray-200 lg:p-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="mt-3 sm:mt-0">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <label htmlFor="desktop-search" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex-grow focus-within:z-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
              </div>
              <input
                id="mobile-search"
                name="mobile-search"
                type="text"
                placeholder="Search"
                // value={searchTerm}
                // onChange={handleSearchChange}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:hidden"
              />
              <input
                id="desktop-search"
                name="desktop-search"
                type="text"
                placeholder="Search Constants"
                // value={searchTerm}
                // onChange={handleSearchChange}
                className="hidden w-full rounded-md border-0 py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    Constant
                  </th>
                  <th
                    scope="col"
                    className="min-w-[300px] px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="min-w-[300px] px-3 py-3.5 text-left text-sm font-semibold text-gray-900 "
                  >
                    Default Value
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Possible Values
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {wpConstants.map((item) => (
                  <Fragment key={item.category}>
                    <tr className="border-t border-gray-200">
                      <th
                        scope="colgroup"
                        colSpan={5}
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {item.category}
                      </th>
                    </tr>
                    {item.constants.map((constant, index) => (
                      <tr
                        key={index}
                        className={classNames(
                          index === 0 ? 'border-gray-300' : 'border-gray-200',
                          'border-t',
                        )}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {constant.constant}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          {constant.description}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                            {constant.defaultValue}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="space-x-2">
                            {constant.possibleValues.map((value, valueIdx) => (
                              <span
                                key={valueIdx}
                                className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                              >
                                {value}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="mt-8 flow-root"> */}
      {/*   <div className="overflow-x-auto "> */}
      {/*     <div className=" inline-block min-w-full "> */}
      {/*       <table className="min-w-full divide-y divide-gray-300"> */}
      {/*         <thead> */}
      {/*           <tr> */}
      {/*             <th */}
      {/*               scope="col" */}
      {/*               className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3" */}
      {/*             > */}
      {/*               Constant */}
      {/*             </th> */}
      {/*             <th */}
      {/*               scope="col" */}
      {/*               className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" */}
      {/*             > */}
      {/*               Description */}
      {/*             </th> */}
      {/*             <th */}
      {/*               scope="col" */}
      {/*               className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" */}
      {/*             > */}
      {/*               Default Value */}
      {/*             </th> */}
      {/*             <th */}
      {/*               scope="col" */}
      {/*               className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" */}
      {/*             > */}
      {/*               Possible Values */}
      {/*             </th> */}
      {/*           </tr> */}
      {/*         </thead> */}
      {/*         <tbody className="bg-white"> */}
      {/*           {filteredConstants.map((item, index) => ( */}
      {/*             <tr key={index} className="even:bg-gray-50"> */}
      {/*               <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"> */}
      {/*                 {item.constant} */}
      {/*               </td> */}
      {/*               <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> */}
      {/*                 {item.description} */}
      {/*               </td> */}
      {/*               <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> */}
      {/*                 <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600"> */}
      {/*                   {item.defaultValue} */}
      {/*                 </span> */}
      {/*               </td> */}
      {/*               <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> */}
      {/*                 <div className="space-x-2"> */}
      {/*                   {item.possibleValues.map((value, index) => ( */}
      {/*                     <span */}
      {/*                       key={index} */}
      {/*                       className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600" */}
      {/*                     > */}
      {/*                       {value} */}
      {/*                     </span> */}
      {/*                   ))} */}
      {/*                 </div> */}
      {/*               </td> */}
      {/*             </tr> */}
      {/*           ))} */}
      {/*         </tbody> */}
      {/*       </table> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  )
}
