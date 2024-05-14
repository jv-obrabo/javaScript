 let quartosDisponiveis = 5;
 let reservaConfirmada = true;

 let statusReserva = (reservaConfirmada && quartosDisponiveis>0)? "reserva confirmada"
                     :(quartosDisponiveis > 0) ? "Aguardando confirmaçao"
                     :"sem quartos disponíveis"

                     console.log(statusReserva);// "Reserva confirmada"