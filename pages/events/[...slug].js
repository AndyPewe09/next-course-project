import { useRouter } from 'next/router'

import { getFilteredEvents } from '../../dummy-data';
import EvenList from '../../components/events/EventList';
import { Fragment } from 'react';
import ResultTitle from '../../components/events/results-title'
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert'

function FilteredEventsPage(){

    const router = useRouter();
    const filterData = router.query.slug;

    if(!filterData) {
        return <p className='center'>Loading....</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
        return (
        <Fragment>
            <ErrorAlert><p>Invalid Filter, Please adjust your values!</p> </ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show All Events</Button> 
            </div>
        </Fragment>)
    }

    const FilteredEvents = getFilteredEvents({
        year : numYear,
        month : numMonth,
    })

    if(!FilteredEvents || FilteredEvents.length == 0 ){
        return (
        <Fragment>
            <ErrorAlert><p>No events found for the choosen filter!</p></ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show All Events</Button> 
            </div>
        </Fragment>)
    }

    const date = new Date(numYear, numMonth - 1)

    return(
        <div>
            <Fragment>
                <ResultTitle date={date}></ResultTitle>
                <EvenList items={FilteredEvents}></EvenList>
            </Fragment>
        </div>
    )
}

export default FilteredEventsPage;