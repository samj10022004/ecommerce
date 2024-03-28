"use client"
import React from 'react';
import { Header } from 'next/dist/lib/load-custom-routes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { noHeaderFooterUrls } from '../../../constants';
import { Gutter } from '../../Gutter';
import MobileNav from '../MobileNav';
import { HeaderNav } from '../Nav';

import classes from './index.module.scss'


const HeaderComponent = ({header}:{header:Header}) => {
    const pathname=usePathname()
  return( 
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
        <Gutter className={classes.wrap}>
            <Link  href="/">
            <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
            </Link>
            <HeaderNav header={header} />
            {/* <MobileNav header={header} /> */}
        </Gutter>
    </nav>
    )
};

export default HeaderComponent;