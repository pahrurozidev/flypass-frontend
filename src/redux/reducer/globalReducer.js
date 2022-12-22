import { actionType } from "./globalActionType";

const globalState = {
    counter: 10,
    showSidebar: false,

    flights: [],
    flight: {
        departure: '',
        destination: '',
        trip: '',
        departureDate: '',
        returnDate: '',
        passenger: '',
    },
    flightDetail: '',
    onSubmit: false,
}

const rootReducer = (state = globalState, action) => {
    if (action.type === actionType.PLUS_COUNTER) {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === actionType.MIN_COUNTER) {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type === actionType.SHOW_SIDEBAR) {
        return {
            ...state,
            showSidebar: true
        }
    } else if (action.type === actionType.HIDE_SIDEBAR) {
        return {
            ...state,
            showSidebar: false
        }

        // search flight
    } else if (action.type === actionType.SUBMIT_SEARCH_FLIGHT) {
        const flight = { ...state.flight };
        console.log(flight);

        const flights = action.flights.filter((data) => {
            return data.departureAirport.name === flight.departure &&
                data.arrivalAirport.name === flight.destination &&
                data.FlightType.name === flight.trip &&
                data.departureDate >= flight.departureDate &&
                data.FlightClass.name === flight.passenger
        })

        console.log(flights);

        return {
            ...state,
            onSubmit: true,
            flights: flights,
        }
    } else if (action.type === actionType.INPUT_SEARCH_FLIGHT) {
        const inputForm = { ...state.flight };
        inputForm[action.event.target.name] = action.event.target.value;

        return {
            ...state,
            flight: {
                departure: inputForm.departure,
                destination: inputForm.destination,
                trip: inputForm.trip,
                departureDate: inputForm.departureDate,
                returnDate: inputForm.returnDate,
                passenger: inputForm.passenger,
            },
        }
    } else if (action.type === actionType.GET_FLIGHT) {
        return {
            ...state,
            flights: action.flights
        }
    } else if (action.type === actionType.FLIGHT_DETAIL) {
        return {
            ...state,
            flightDetail: action.flight
        }
    } else if (action.type === actionType.CHANGE_DEPARTURE) {
        return {
            ...state,
            flight: {
                departure: action.airport,
                destination: state.flight.destination
            },
        }
    } else if (action.type === actionType.CHANGE_ARRIVAL) {
        return {
            ...state,
            flight: {
                departure: state.flight.departure,
                destination: action.airport,
            },
        }
    } else {
        return state;
    }
}

export default rootReducer;