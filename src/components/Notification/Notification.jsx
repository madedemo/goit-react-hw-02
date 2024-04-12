import css from './Notification.module.css';

const Notification = () => {
    return (
        <div>
            <p className={css.text}>No Feedback Yet</p>
            <img src="https://www.freeiconspng.com/uploads/coffee-bean-icon-9.png" alt="No Feedback Image" className={css.image} />
        </div>
    );
}

export default Notification;