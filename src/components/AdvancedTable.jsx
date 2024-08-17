'use client'

import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { wpConstants } from '@/lib/wpContants'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function AdvancedTable() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredConstants = wpConstants
    .map((category) => ({
      ...category,
      constants: category.constants.filter((constant) =>
        constant.constant.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.constants.length > 0)

  const hasResults = filteredConstants.length > 0

  return (
    <div className="rounded-md border border-gray-200 dark:border-zinc-800 lg:p-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="mt-3 sm:mt-0">
          <label htmlFor="mobile-search" className="sr-only">
            Search
          </label>
          <label htmlFor="desktop-search" className="sr-only">
            Search
          </label>
          <div className="flex rounded-md shadow-sm">
            <div className="relative flex-grow p-3 focus-within:z-10 sm:p-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400 dark:text-zinc-500"
                />
              </div>
              <input
                id="mobile-search"
                name="mobile-search"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-indigo-500 sm:hidden"
              />
              <input
                id="desktop-search"
                name="desktop-search"
                type="text"
                placeholder="Search Constants"
                value={searchTerm}
                onChange={handleSearchChange}
                className="hidden w-full rounded-md border-0 bg-white py-1.5 pl-10 text-sm leading-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-indigo-500 sm:block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            {hasResults ? (
              <table className="min-w-full">
                <thead className="bg-white dark:bg-zinc-900">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100 sm:pl-3"
                    >
                      Constant
                    </th>
                    <th
                      scope="col"
                      className="min-w-[300px] px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="min-w-[300px] px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Default Value
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-zinc-100"
                    >
                      Possible Values
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-zinc-900">
                  {filteredConstants.map((item) => (
                    <React.Fragment key={item.category}>
                      <tr className="border-t border-gray-100 dark:border-zinc-800">
                        <th
                          scope="colgroup"
                          colSpan={5}
                          className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:bg-zinc-800/70 dark:text-zinc-100 sm:pl-3"
                        >
                          {item.category}
                        </th>
                      </tr>
                      {item.constants.map((constant, index) => (
                        <tr
                          key={index}
                          className={classNames(
                            index === 0
                              ? 'border-gray-300 dark:border-zinc-800'
                              : 'border-gray-200 dark:border-zinc-800',
                            'border-t',
                          )}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-zinc-100 sm:pl-3">
                            {constant.constant}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 dark:text-zinc-400">
                            {constant.description}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500 dark:text-zinc-400">
                            <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                              {constant.defaultValue}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-zinc-400">
                            <div className="space-x-2">
                              {constant.possibleValues.map(
                                (value, valueIdx) => (
                                  <span
                                    key={valueIdx}
                                    className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-zinc-700 dark:text-zinc-300"
                                  >
                                    {value}
                                  </span>
                                ),
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="py-12 text-center">
                <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-zinc-500" />
                <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-zinc-100">
                  No results found
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-zinc-400">
                  We couldn&apos;t find any constants matching your search. Try
                  different keywords or clear your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
