let anumber = +prompt('We determine type of the number,pls enter the number ?')

while (isNaN(anumber)) {
anumber = +prompt( 'Try again (is not number !)')
  
}
if (anumber % 2 === 1) {
    alert(anumber + ' is odd number ' )
}
else if (anumber % 2 === 0) {
    alert(anumber + ' is even number')
}
else {
    alert('Something get wrong ,try again')
}
