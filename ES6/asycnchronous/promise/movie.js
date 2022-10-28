let goToMovie = (success, failure) => {
    let amount = 650;
    if (amount > 600) {
        success("Go to VARISE with SNAKES")
    }
    else {
        failure("Go to ROOM ! Open Laptop")
    }

}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})
//goToMovie(() => { }, () => { })
//goToMovie(1,2)