import { Configure } from 'react-instantsearch-dom'

import { Banner } from '@/components/banner/banner'
import { ProductCardHitShowcase } from '@/components/product-card/product-card-hit'
import { ProductsShowcase } from '@/components/products-showcase/products-showcase'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  getStaticPropsPage,
  SearchPageLayout,
} from '@/layouts/search-page-layout'



import BannerImage from '@/public/static/images/home/BannerCasagri02.jpg'
import BannerImage1 from '@/public/static/images/home/sorgo01.jpg'
import BannerImage2 from '@/public/static/images/home/sorgo01.jpg'
import { SetentaAnios } from '@/components/Section/Mas70'
import { Catalogo } from '@/components/Section/catalogo-Productos'


export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <Configure
        hitsPerPage={6}
        // We cannot retrieve the user token at build time, so we disable perso
        // feature to avoid an additional call to retrieve Algolia results at load time
        enablePersonalization={false}
        userToken={undefined}
      />

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

      <SetentaAnios/>

      <Catalogo/>

      <ProductsShowcase
        title="Productos Detacados"
        indexId="shoes"
        query="shoes"
        hitComponent={ProductCardHitShowcase}
      />
      <ProductsShowcase
        title="Recomendados para ti"
        indexId="spring-summer-2021"
        ruleContexts={['home-spring-summer-2021']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      />

      <Banner
        size="xxl"
        //title="Titulo<br />Random"
        title=""
        subtitle=""
        image={BannerImage1}
        imageAlt="Titulo Random - Develop Casagri 2022"
        fullWidth={true}
        //overlay={true}

        classNameTitle="text-3xl font-normal tracking-wider leading-tight laptop:text-7xl"
      />
      <ProductsShowcase
        title="Destacados"
        indexId="recommended"
        query="jacket"
        hitComponent={ProductCardHitShowcase}
      />
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
