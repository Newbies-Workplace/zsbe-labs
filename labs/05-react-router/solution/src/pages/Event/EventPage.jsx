import {Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import styles from "./EventPage.module.css";
import {EventDetailsPage} from "./Details/EventDetailsPage.jsx";
import {EventLocationPage} from "./Location/EventLocationPage.jsx";

export const EventPage = () => {
    return (
        <div>
            <h1>Event Page</h1>

            <Toolbar/>

            <div className={styles.content}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'details'}/>}/>
                    <Route path={'/details'} element={<EventDetailsPage/>}/>
                    <Route path={'/location'} element={<EventLocationPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

const Toolbar = () => {
    return (
        <div className={styles.toolbar}>
            <Link to={'/'}>Home</Link>

            <div className={styles.eventNav}>
                <NavLink to={'details'} className={({isActive}) => isActive ? styles.active : styles.inactive}>
                    Details
                </NavLink>

                <NavLink to={'location'} className={({isActive}) => isActive ? styles.active : styles.inactive}>
                    Location
                </NavLink>
            </div>
        </div>
    )
}