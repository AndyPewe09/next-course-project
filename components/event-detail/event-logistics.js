import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  const addressText = address?.replace(',','\n')
  console.log(address);

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={'/' + image} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem>
          <DateIcon></DateIcon>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <AddressIcon></AddressIcon>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;