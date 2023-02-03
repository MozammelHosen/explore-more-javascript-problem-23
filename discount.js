function ticketprice(ticketQunatity) {
  const first100TicketPrice = 100;
  const second100TicketPrice = 90;
  const restTicketPrice = 70;
  if (first100TicketPrice <= 100) {
    const price = first100TicketPrice * ticketQunatity;
    return price;
  } else if (ticketQunatity <= 200) {
    const first100Ticket = 100 * first100TicketPrice;
    const restTicketQuantity = ticketQunatity -100;
    const restTicket = restTicketQuantity * second100TicketPrice;
    const totalPrice = first100Ticket + restTicket;
    return totalPrice;
  }
}
const ticket = ticketprice(101);
console.log(ticket);
