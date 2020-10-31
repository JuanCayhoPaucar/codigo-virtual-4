import React from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./citas.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment';

// npm install react-big-calendar
// npm install moment

const localizer = momentLocalizer(moment);

const eventos = [
    {
        id: 1,
        title: "Cita con gato Felix",
        start: new Date(2020, 9, 30, 10, 0, 0), // mes : 0-11      año, mes, dia, hora, minuto, segundo
        end: new Date(2020, 9, 30, 10, 30, 0),
        desc: "Corte de uñas del gatito",
    },

    {
        id: 1,
        title: "Cita con perro Chancho",
        start: new Date(2020, 9, 30, 16, 0, 0), // mes : 0-11      año, mes, dia, hora, minuto, segundo
        end: new Date(2020, 9, 30, 16, 30, 0),
        desc: "Vacuna 3 -Quintuple",
    }
];

const Citas = (props) => {
    console.log(props);

    const eventoSeleccionado = (e) => {
        console.log(e);
    }

    const slotSeleccionado = (e) => {
        console.log(e);
    }

    return (
        <main className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card calendario">
                        <div className="card-body">
                            <Calendar
                                selectable
                                localizer={localizer}
                                events={eventos}
                                startAccessor="start"
                                endAccessor="end"
                                onSelectEvent={eventoSeleccionado}
                                onSelectSlot={slotSeleccionado}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Citas