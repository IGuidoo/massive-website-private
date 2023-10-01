import React, { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navigation } from '@/lib/navigation'

import { ChevronDownIcon } from '@heroicons/react/20/solid';


export function Navigation({ className, onLinkClick }) {
  let pathname = usePathname()
  const [expandedSection, setExpandedSection] = useState(null);
  const [expandedSubSection, setExpandedSubSection] = useState(null);

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-secondary-900 dark:text-white">
              {section.title}
            </h2>

            <ul
              role="list"
              className="-2 space-y-2  dark:border-secondary-800 lg:mt-4 lg:space-y-4 lg:border-secondary-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <div className="flex justify-between">
                    <div className={clsx(
                      'h-[16px] w-[16px] self-center',  // Adjusted here
                      link.href === pathname
                        ? 'text-primary-600'
                        : 'text-secondary-600 dark:text-secondary-400 dark:hover:text-secondary-300 ',
                    )}
                    >
                      {section.icon}
                    </div>
                    <Link
                      href={link.href}
                      onClick={onLinkClick}
                      className={clsx(
                        'block max-w-fit pl-3.5 justify-start mr-auto',  // Adjusted here
                        link.href === pathname
                          ? 'font-semibold text-primary-600 '
                          : 'text-secondary-600 before:hidden before:bg-secondary-300 hover:text-primary-600 dark:text-secondary-400 dark:before:bg-secondary-700 dark:hover:text-secondary-300',
                      )}
                    >
                      {link.title}
                    </Link>
                    {link.subCatagories ? (
                      <ChevronDownIcon
                        className={clsx(
                          'h-5 w-5 cursor-pointer',
                          link.href === pathname
                            ? 'text-primary-600'
                            : 'text-secondary-600  dark:text-secondary-400 dark:hover:text-secondary-300'
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedSection(link.href === expandedSection ? null : link.href);
                        }}
                      />
                    ) : null}
                  </div>

                  {/* sub section  */}
                  {link.href === expandedSection && link.subCatagories?.map(sub => (
                    <li key={sub.href} className="relative pl-8">
                      <div className="flex justify-between relative">
                        <div className="h-full w-[1px] bg-secondary-400 absolute left-0 top-0 hover:bg-primary-600">
                        </div>
                        <Link
                          href={sub.href}
                          onClick={onLinkClick}
                          className={clsx(
                            'block w-full pl-3.5',  // Adjusted here
                            sub.href === pathname
                              ? 'font-semibold text-primary-600 '
                              : 'text-secondary-600 before:hidden before:bg-secondary-300 hover:text-primary-600 hover:before:block dark:text-secondary-400 dark:before:bg-secondary-700 dark:hover:text-secondary-300',
                          )}
                        >
                          {sub.title}
                        </Link>

                        {sub.subSubCatagories ? (
                          <ChevronDownIcon
                            className={clsx(
                              'h-5 w-5',
                              sub.href === pathname
                                ? 'text-primary-600'
                                : 'text-secondary-600  dark:text-secondary-400 dark:hover:text-secondary-300'
                            )}
                            onClick={(e) => {
                              e.preventDefault();
                              setExpandedSubSection(sub.href === expandedSubSection ? null : sub.href);
                            }}
                          />
                        ) : null}
                      </div>

                      {/* Sub sub section */}
                      {sub.href === expandedSubSection && sub.subSubCatagories?.map(subSub => (
                        <li key={subSub.href} className="relative pl-2">
                          <Link
                            href={subSub.href}
                            onClick={onLinkClick}
                            className={clsx(
                              'block w-full pl-3.5 ',  // Adjusted here
                              subSub.href === pathname
                                ? 'font-semibold text-primary-600 '
                                : 'text-secondary-600 before:hidden before:bg-secondary-300 hover:text-primary-600 hover:before:block dark:text-secondary-400 dark:before:bg-secondary-700 dark:hover:text-secondary-300',
                            )}
                          >
                            {subSub.title}
                          </Link>
                        </li>
                      ))}

                    </li>
                  ))}

                </li>
              ))}

            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}


