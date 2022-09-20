import MenuIcon from '@material-design-icons/svg/outlined/menu.svg'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { Laptop, Tablet } from '@/lib/media'
import { parseUrl } from '@/utils/parseUrl'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'

import { NavAutocomplete } from './nav-autocomplete'
import { NavItem } from './nav-item'

export function NavBottom() {
  const router = useRouter()
  const currentCategory = useMemo(() => {
    const { pathname } = parseUrl(router?.asPath)
    return pathname.match(/\/catalog\/(.[^/]*)\/?/)?.[1]
  }, [router?.asPath])

  const genderSubCategories = (
    <>
      {currentCategory === 'Women' && (
        <NavItem label="Bags" href={`/catalog/${currentCategory}/Bags`} />
      )}
      <NavItem label="Clothing" href={`/catalog/${currentCategory}/Clothing`} />
      <NavItem label="Shoes" href={`/catalog/${currentCategory}/Shoes`} />
    </>
  )

  const accessoriesSubCategories = (
    <>
      <NavItem label="Men" href={`/catalog/${currentCategory}/Men`} />
      <NavItem label="Women" href={`/catalog/${currentCategory}/Women`} />
    </>
  )


}
