import { memo } from 'react'

import { Banner } from '@/components/banner/banner'
import { LogoSymbol } from '@/components/logo/logo'
import { Link } from '@ui/link/link'

import BannerImage from '@/public/static/images/footer/02.jpg'

export type FooterProps = Record<string, unknown>

export const Footer = memo(function Footer() {
  return (
    <footer className="mt-auto">

      <Banner
        size="xxl"
        //title="Titulo<br />Random"
        title=""
        subtitle=""
        image={BannerImage}
        imageAlt="Titulo Random - Develop Casagri 2022"
        fullWidth={true}
        //overlay={true}

        classNameTitle="text-3xl font-normal tracking-wider leading-tight laptop:text-7xl"
      />
    </footer>
  )
})
