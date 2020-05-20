import React, { Fragment, useState, useEffect } from 'react';
import { Heading, Columns, Image } from 'react-bulma-components';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AlbumsService from '../../services/album';
import Albun from '../common/album';

const DivVSpaced = styled.div`
 margin-top: 20px;
 margin-bottom: 20px;
`

const Albuns = () => {
  const [album, setAlbum] = useState({});
  const [musics, setMusic] = useState({});
  let { id } = useParams();

  async function fetchAlbum() {
    const response = await AlbumsService.show(id);

    console.log(response.data);

    setAlbum(response.data);
    setMusic(response.data.songs)
  }

  useEffect(() => {
    fetchAlbum();
 }, []);

  return(
    <Fragment>
     <Columns className='is-vcentered is-mobile is-centered'>
       <Columns.Column desktop={{size: 3}} className='has-text-centered'>
         <Albun cover_url={album.cover_url} title={album.title} artist_name={album.artist_name} id={album.id} />
       </Columns.Column>
     </Columns>
   </Fragment>
  );
}

export default Albuns;