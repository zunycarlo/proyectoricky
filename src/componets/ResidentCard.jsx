import { useEffect } from "react";
import { useFetchApi } from "../hooks/useFetchApi";

import './ResidentCard.css'


function ResidentCard({ url }) {
const { fetchingData, data: resident, loading } = useFetchApi();
  

  useEffect(() => {
 fetchingData(url)
 }, [url] )

  if (loading) return <p>loading...</p>

  const totalEppisodes = resident?.episode?.length
  const totalEppisodesText = totalEppisodes == 1 ? 'eppisode' : 'eppisodes'

  const statusClass = 
  resident?.status == 'Alive' ? 'alive' :
  resident?.status == 'Dead' ? 'dead' :'unKnown'
  

 return(
   
    
    <div className="resident">  
    <div className="resident__image">
     <img className="resident__img" src={resident?.image} alt={resident?.name} />
       <span className="resident__status">
        <span className={`resident--${statusClass}`} />
        {resident?.status}
      </span>
      </div>
     
     <div className="resident__body">
     <h2 className="resident__name">{resident?.name}</h2>
     
     <div className="resident__content">
       <p className="resident_item">
         <b>specie:</b> {resident?.origin?.name}
           </p>
       <p className="resident_item">
         <b>Origin:</b> {resident?.status} 
           </p>
       <p className="resident_item">
         <b>Eppisodes where appear:</b> {totalEppisodes} {totalEppisodesText} 
           </p>        
     </div>
     </div>
    </div>
  )
}
export default ResidentCard