import { getAllEvents } from "../../dummy-data";
import EvenList from "../../components/events/EventList";
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from 'next/router' 

function AllEventsPage(){

  const events = getAllEvents();
  const router = useRouter()

  function findEventsHandler(year, month){
    const fullPath = `/events/${year}/${month}/abc`

    router.push()
  }

    return(
      <div>
        <Fragment>
          <EventsSearch onSearch={findEventsHandler}></EventsSearch>
          <EvenList items={events}></EvenList>
        </Fragment>
      </div>
    )
  }
  
  export default AllEventsPage;