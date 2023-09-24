function Solution(A){
    let amplitude = (Math.max.apply(null, A)) - (Math.min.apply(null, A))
    console.log(amplitude)
}
Solution([10,2,44,15,39,20])