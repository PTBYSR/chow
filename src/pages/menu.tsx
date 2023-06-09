import React from 'react'
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import MenuCard from 'components/interface/MenuCard/MenuCard';
import { menuUtils } from 'components/interface/MenuCard/MenuItems/Menu.utils'
import { yamUtils, spagUtils, soupsUtils, riceUtils, mealsUtils} from '../../utils/menu'
import Text from 'components/ui/Text/Text';
import Button from 'components/ui/Button/Button';
import InstagramIcon from 'components/icons/InstagramIcon';
import Image from 'next/image';
import wrapper from '../../public/wrapper.png'
const Menu = () => {
  return (
    <Main
    meta={
      <Meta title="500 CHOW - Our Menu" description="1# Lagos food delivery service" />
    }
  >
    <div className="md:hidden  absolute top-0 left-0 opacity">
        {/* <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} />
        <Image src={wrapper} /> */}
      </div>
    <MenuCard items={mealsUtils} label="meals" variant='left'/>
    <MenuCard items={riceUtils} label="rice" variant='left'/>
    <MenuCard items={soupsUtils} label="soups" variant='right'/>
    <MenuCard items={spagUtils} label="spagetti" variant='left'/>
    <div className="mb-20 md:mb-10">
      <MenuCard items={yamUtils} label="yam" variant='right'/>
    </div>
    <div  className=" relative mb-32 py-32 flex gap-5 flex-col md:w-1/2">
      <Text variant="h3">Didn't see what you wanted? Talk to us</Text>
      <Button href="https://api.whatsapp.com/message/L4SBDA7TOZ6FL1?autoload=1&app_absent=0">order on whatsapp</Button>
            <Button href="https://www.instagram.com/500chow/">
              order on instagram
              <span>
                <InstagramIcon w="26" fill="#fff" />
              </span>
              </Button>
    </div>
  
  </Main>
  )
}

export default Menu