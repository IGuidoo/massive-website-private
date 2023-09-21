import React, { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navigation } from '@/lib/navigation'

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
              className="ml-1 mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <div className="flex justify-between">
                    <Link
                      href={link.href}
                      onClick={onLinkClick}
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-0 before:mt-[8px]  before:h-1.5 before:w-1.5 before:rounded-full',  // Adjusted here
                        link.href === pathname
                          ? 'font-semibold text-sky-500 before:bg-sky-500'
                          : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                      )}
                    >
                      {link.title}
                    </Link>
                    {link.subCatagories ? (
                      <span onClick={(e) => {
                        e.preventDefault();
                        setExpandedSection(link.href === expandedSection ? null : link.href);
                      }}>
                        ▼
                      </span>
                    ) : null}
                  </div>
                  {link.href === expandedSection && link.subCatagories?.map(sub => (
                    <li key={sub.href} className="relative pl-5">
                      <div className="flex justify-between">
                        <Link
                          href={sub.href}
                          onClick={onLinkClick}
                          className={clsx(
                            'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-0 before:mt-[8px] before:h-1.5 before:w-1.5 before:rounded-full',  // Adjusted here
                            sub.href === pathname
                              ? 'font-semibold text-sky-500 before:bg-sky-500'
                              : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
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
                          <Link
                            href={subSub.href}
                            onClick={onLinkClick}
                            className={clsx(
                              'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-6 before:top-0 before:mt-[8px] before:h-1.5 before:w-1.5 before:rounded-full',  // Adjusted here
                              subSub.href === pathname
                                ? 'font-semibold text-sky-500 before:bg-sky-500'
                                : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
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