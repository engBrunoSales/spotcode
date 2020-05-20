import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';
import Albuns from '../../components/albuns';

const AlbumScreen = () => {
  return(
    <Fragment>
      <SectionWrapper>
        <Albuns />
        <NavbarFooter />
      </SectionWrapper>
    </Fragment>
  )
}

export default AlbumScreen;