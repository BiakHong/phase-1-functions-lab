// Code your solution in this file!
const hqLocation = 42;
const blockDistance = 264;
function distanceFromHqInBlocks(startPoint){
    if (startPoint > hqLocation){
        return (startPoint - hqLocation);}
        else if (startPoint < hqLocation){
        return (hqLocation - startPoint)}
}
function distanceFromHqInFeet(startPoint){
    if(startPoint > hqLocation)
    return ((startPoint-hqLocation)*blockDistance)
    else
        return((hqLocation-startPoint)*blockDistance);
}
function distanceTravelledInFeet(startPoint, endPoint){
    if(startPoint > endPoint)
    return ((startPoint-endPoint)*blockDistance)
    else
        return((endPoint-startPoint)*blockDistance);
}
function calculatesFarePrice(start, destination){
    let price;
    let distance;
    if(start > destination){
        distance = ((start-destination)*blockDistance);}
    else{
        distance = ((destination-start)*blockDistance);}
    
    if (distance <= 400)
        price = 0;
    else if (400 < distance && distance <= 2000){
                price = ((distance - 400)*0.02)}
    else if (distance > 2000 && distance < 2500)
        price = 25;
    else if (distance > 2500)
         price = "cannot travel that far"
    
        return price;

}