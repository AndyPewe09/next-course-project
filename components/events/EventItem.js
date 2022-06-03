import Link from "next/link";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import ArrowIcon from "../icons/arrow-right-icon"
import classes from './EventItem.module.css'

function EventItem(props) {

    const {title, image, date, location, id} = props

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: "numeric"
    })

    const formatAddress = location.replace(',','\n')
    const exploreLink = `/events/${id}`
 
    return (
    <li className={classes.item}>
        <img className={classes.image} src={'/' + image} alt={title} />

        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <DateIcon></DateIcon>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon></AddressIcon>
                    <address>{formatAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={exploreLink}><span>Explore Event</span><span className={classes.icon}><ArrowIcon></ArrowIcon></span></Button>
            </div>
        </div>
    </li>
    )
    
}

export default EventItem;