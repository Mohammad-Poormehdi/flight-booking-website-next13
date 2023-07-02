import prisma from "@/lib/prismadb";

export interface IFlightsParams {
  origin?: string | null;
  destination?: string | null;
  isInternational?: string | null;
  mostExpensive?: string | null;
  earliest?: string | null;
}

const getFlights = async (params: IFlightsParams | null) => {
  try {
    if (!params) {
      return [];
    }
    const { origin, destination, isInternational, mostExpensive, earliest } =
      params;

    let query: any = {};
    let orderBy: any = {};

    if (origin) query.origin = origin;
    if (destination) query.dest = destination;
    if (isInternational === "true") query.international = true;
    if (isInternational === "false") query.international = false;
    if (mostExpensive === "true") orderBy = { price: "desc" };
    if (mostExpensive === "false") orderBy = { price: "asc" };
    if (earliest === "true") orderBy = { take_off: "asc" };
    if (earliest === "false") orderBy = { take_off: "desc" };

    console.log(query);

    const flights = await prisma.flight.findMany({
      where: query,
      orderBy: orderBy,
    });
    return flights;
  } catch (error) {
    return [];
  }
};
export default getFlights;
