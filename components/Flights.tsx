import { Flight } from "@prisma/client";
import FlightCard from "./FlightCard";
import { format } from "date-fns";

interface FlightsProps {
  flights: Flight[];
}

function Flights({ flights }: FlightsProps) {
  return (
    <div className="space-y-3">
      {flights.map((flight) => (
        <FlightCard
          key={flight.id}
          id={flight.id}
          airline={flight.airline}
          dest={flight.dest}
          origin={flight.origin}
          land={format(new Date(flight.land), "HH:mm")}
          take_off={format(new Date(flight.take_off), "HH:mm")}
          price={flight.price}
          seats={flight.seats}
        />
      ))}
    </div>
  );
}

export default Flights;
