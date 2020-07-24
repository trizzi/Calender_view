import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from '../../context/EventContext/EventProvider';
import { PartnerContext } from '../../context/PartnerContext/PartnerProvider';
import '../assets/css/formStyle.css';

export default function AddEventForm() {
    const { addEvent } = useContext(EventContext);
    const { partners, getPartners, addPartner } = useContext(PartnerContext);

    // the function passed to useEffect will run after the component render is committed to the screen.
    useEffect(() => {
        getPartners();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [eventTitle, setEventTitle] = useState('');
    const [multiplicity, setMultiplicty] = useState('');
    const [dateOfEvent, setDateOfEvent] = useState('');
    const [eventType, setEventType] = useState('');
    const [venue, setVenue] = useState('');
    const [eventPartners, setEventPartners] = useState([]);
    const [newPartner, setNewPartner] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            added_by: '5f045210ff92012c618b6077',
            event_title: eventTitle,
            multiplicity,
            date_of_event: dateOfEvent,
            event_type: eventType,
            venue,
            partners: [],
        };

        // If eventPartners array has elements, user has selected from the saved partners
        if (eventPartners.length > 0) {
            newEvent.partners = partners.filter((partner) =>
                eventPartners.includes(partner.partner)
            );
        }

        addEvent(newEvent);
    };

    const selectPartner = (e) => {
        if (e.target.checked && !eventPartners.includes(e.target.value)) {
            setEventPartners([...eventPartners, e.target.value]);
        }
    };

    const addNewPartner = () => {
        if (newPartner !== '') {
            addPartner({ partner: newPartner });
            setEventPartners([...eventPartners, newPartner]);
        }
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Event Title</label>
                    <input
                        type="text"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        placeholder="Enter text..."
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="type">Event type</label>
                    <input
                        type="text"
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        placeholder="Enter event type..."
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="multiplicity">Occurance</label>
                    <input
                        type="number"
                        value={multiplicity}
                        onChange={(e) => setMultiplicty(e.target.value)}
                        placeholder="Enter number.."
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="date_of_event">Date</label>
                    <input
                        type="date"
                        value={dateOfEvent}
                        onChange={(e) => setDateOfEvent(e.target.value)}
                        placeholder="Enter date..."
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="venue">Venue</label>
                    <input
                        type="text"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                        placeholder="Enter venue..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="partners">Select partners: </label>
                    {partners.map((partner) => (
                        <div className="form-control" key={partner._id}>
                            <input
                                type="checkbox"
                                value={partner.partner}
                                onChange={(e) => selectPartner(e)}
                            />
                            <label htmlFor="partner">{partner.partner}</label>
                        </div>
                    ))}
                    <div className="form-control">
                        <input
                            type="text"
                            value={newPartner}
                            onChange={(e) => setNewPartner(e.target.value)}
                            placeholder="add new partner ... "
                        />
                        <input
                            className="btn"
                            onClick={addNewPartner}
                            value="Add partner"
                        />
                    </div>
                </div>
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
}
