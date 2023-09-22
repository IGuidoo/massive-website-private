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
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="-2 space-y-2  dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <div className="flex justify-between">
                    <div className={clsx(
                      'h-4 w-4 self-center',  // Adjusted here
                      link.href === pathname
                        ? 'text-primary-500'
                        : 'text-slate-500 dark:text-slate-400 dark:hover:text-slate-300 ',
                    )}
                    >
                      {section.icon}
                    </div>
                    <Link
                      href={link.href}
                      onClick={onLinkClick}
                      className={clsx(
                        'block w-full pl-3.5 ',  // Adjusted here
                        link.href === pathname
                          ? 'font-semibold text-primary-500 '
                          : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-primary-500 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                      )}
                    >
                      {link.title}
                    </Link>
                    {link.subCatagories ? (
                      <ChevronDownIcon
                        className={clsx(
                          'h-5 w-5',
                          link.href === pathname
                            ? 'text-primary-500'
                            : 'text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300'
                        )}
                        onClick={(e) => {
                          e.preventDefault();
                          setExpandedSection(link.href === expandedSection ? null : link.href);
                        }}
                      />
                    ) : null}
                  </div>
                  {link.href === expandedSection && link.subCatagories?.map(sub => (
                    <li key={sub.href} className="relative pl-5">
                      <div className="flex justify-between">
                        <div className={clsx(
                          'h-4 w-4 self-center',  // Adjusted here
                          sub.href === pathname
                            ? 'text-primary-500'
                            : 'text-slate-500 dark:text-slate-400 dark:hover:text-slate-300 ',
                        )}
                        >
                          {sub.icon}
                        </div>
                        <Link
                          href={sub.href}
                          onClick={onLinkClick}
                          className={clsx(
                            'block w-full pl-3.5',  // Adjusted here
                            sub.href === pathname
                              ? 'font-semibold text-primary-500 '
                              : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-primary-500 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                          )}
                        >
                          {sub.title}
                        </Link>
                        {sub.subSubCatagories ? (
                          <span onClick={(e) => {
                            e.preventDefault();
                            setExpandedSubSection(sub.href === expandedSubSection ? null : sub.href);
                          }}>
                            ▼
                          </span>
                        ) : null}
                      </div>
                      {sub.href === expandedSubSection && sub.subSubCatagories?.map(subSub => (
                        <li key={subSub.href} className="relative pl-5">
                          <div className={clsx(
                            'h-4 w-4 self-center',  // Adjusted here
                            sub.href === pathname
                              ? 'text-primary-500'
                              : 'text-slate-500 dark:text-slate-400 dark:hover:text-slate-300 ',
                          )}
                          >
                            {subSub.icon}
                          </div>
                          <Link
                            href={subSub.href}
                            onClick={onLinkClick}
                            className={clsx(
                              'block w-full pl-3.5 ',  // Adjusted here
                              subSub.href === pathname
                                ? 'font-semibold text-primary-500 '
                                : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-primary-500 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
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


