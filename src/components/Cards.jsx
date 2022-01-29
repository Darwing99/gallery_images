import React from 'react'

import { useFetchImages } from '../hooks/useFetchImages';
import Card from './Card';
import FormSearch from './FormSearch';
import Loading from './Loading';
const Cards = () => {
    const [images,loading,handleSubmit]=useFetchImages();
    return (
        <>
          <FormSearch handleSubmit={handleSubmit}/>
            {loading && <Loading/>}
            <div  className="pt-2 row row-cols-1 row-cols-md-4 g-4">

                {
                images.map((img) => {
                    return <Card key={
                            img.id
                        }
                        description={
                            img.alt_description
                        }
                        img={
                            img.urls.regular
                        } autor={img.user.first_name+' '+img.user.last_name}/>
                })
            } </div>
        </>
    );
}

export default Cards;
