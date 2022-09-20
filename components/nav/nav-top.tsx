import FavoriteIcon from '@material-design-icons/svg/outlined/favorite_border.svg'
import HeadsetMicIcon from '@material-design-icons/svg/outlined/headset_mic.svg'
import PersonIcon from '@material-design-icons/svg/outlined/person.svg'
import PinDropIcon from '@material-design-icons/svg/outlined/pin_drop.svg'
import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import Image from 'next/image'

import type { LogoProps } from '@/components/logo/logo'
import { NavItem } from '@/components/nav/nav-item'
import { Tablet, Laptop } from '@/lib/media'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'
import { Link } from '@ui/link/link'

//import Logo Casagri en esta
import logo from '@/public/static/images/Logo/LogoCasagri.png';
import cc from '@/public/static/images/Logo/cc.svg'


const Logo = dynamic<LogoProps>(() =>
  import(/* webpackChunkName: 'common' */ '@/components/logo/logo').then(
    (mod) => mod.Logo
  )
)

export const NavTop = memo(function NavTop() {
  return (
    <div className="flex flex-col px-4 py-2 laptop:mx-20 laptop:px-0 laptop:pt-8 laptop:pb-0 laptop:mb-5">
      <div className="flex justify-between w-full gap-3 laptop:mb-8">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="mi logo"
            width="73"
            height="80"
          />
        </div>

        <div className="flex gap-48">

          <div className="flex items-center gap-6 laptop:gap-3">

            <Button title="Cart" style={{marginRight:'20px', marginLeft: '20px'}}>
              Inicio
            </Button>

            <Button title="Cart" style={{marginRight:'20px', marginLeft: '20px'}}>
              Nosotros
            </Button>

            <Button title="Cart" style={{marginRight:'20px', marginLeft: '20px'}}>
              Contáctanos
            </Button>

            <Tablet>
              <Button title="Stores">
                <IconLabel icon={PinDropIcon} label="Stores" />  
              </Button>
            </Tablet>
            
            <Laptop>
              <Button title="Favorites">
                <IconLabel icon={FavoriteIcon} />
              </Button>
            </Laptop>

            <Button title="Account">
              <Tablet>
                <IconLabel icon={PersonIcon} label="Account" />
              </Tablet>
              <Laptop>
                <IconLabel icon={PersonIcon} />
              </Laptop>
            </Button>

            <Button title="Cart">
              <Tablet>
                <IconLabel icon={ShoppingBagIcon} label="Cart" />
              </Tablet>
              <Laptop>
                <IconLabel icon={ShoppingBagIcon} />
              </Laptop>
            </Button>
          </div>
      
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
      <nav className="hidden laptop:block ">
        <ul className="hidden gap-20 uppercase laptop:flex  ">
          <NavItem label="Agroquímicos" href="" />
          <NavItem label="Maquinarias" href="" />
          <NavItem label="Salud Animal" href="" />
          <NavItem label="Ferretería" href="" />
          <NavItem label="Salud Pública" href="" />
        </ul>
      </nav>

      </div>
      
    </div>
  )
})
