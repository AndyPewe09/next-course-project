import { getFeaturedEvents } from '../dummy-data'
import EvenList from '../components/events/EventList';

function HomePage(){

  const featuredEvents = getFeaturedEvents();

  return(
    <div>
      <ul>
        <EvenList items={featuredEvents}></EvenList>
      </ul>
    </div>
  )
}

export default HomePage;