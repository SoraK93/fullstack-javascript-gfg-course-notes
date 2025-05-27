// bookHotel --> proceedPayment --> showBookingStatus --> updateBookingHistory (API)

function bookHotel(hotelId, func){

}
bookHotel(hotelId, function(){ // 1
    if(error) {
        console.log("handleError");
    } else {
        proceedToPayment(hotelId, function(){ // 2
            if (error){
                console.log("handleError");
            } else {
                showBookingStatus(function(){ // 3
                    if (error){
                        console.log("handleError");
                    } else {
                        updateBookingHistory(function(){ // 4
                            if (error) {
                                console.log("handleError");
                            } else {
                                console.log("success");
                            }
                        })
                    }
                })
            }
        })
    }
})

function proceedToPayment(hotelId, func){

}

function showBookingStatus(){

}

function updateBookingHistory(){

}