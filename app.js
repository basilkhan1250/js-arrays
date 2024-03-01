// array assigments

// question 1 and 2

// var stdName = []

// question 3

// var stringArr = ["basil"]

// question 4

// var numberArr = [123]

// question 5

// var booleanArr = [true]

// question 6

// var mixedArr = ["basil", 123 , true]

// question 7 

// var mobileNetworks = ["Zong","Telenor","Ufone","Jazz"]

// question 8

// var qualifications = ["QUALIFICATION <br/> " , "1) SSC <br/>" , "2) HSC <br/>" , "3) BCS <br/>" , "4) BS <br/>" , "5) BCOM <br/>" , "6) MS <br/>" , "7) M.Phil. <br/>", "8) PhD"]
// document.write(qualifications[0] , "<br/>" , qualifications[1],qualifications[2], qualifications[3],qualifications[4], qualifications[5],qualifications[6], qualifications[7],qualifications[8])

// question 9

// var topMovies = ["1) Avengers: age of ultron <br/>","2) Spectre <br/>","3) Jurassic World <br/>","4) Inside Out"]
// document.write("Top movies in 2015 <br/>",topMovies[0] , topMovies[1], topMovies[2], topMovies[3] , "<br/>" , "Length of the array: "+topMovies.length)

// question 10

// var cars =  ["Porsche","Bugatti","Dodge","nissan"]
// var indexofCar1 = cars.indexOf("Porsche")
// var indexofCar4 = cars.indexOf("nissan")
// document.write("Fav Cars" + "<br/>")
// document.write(cars + "<br/>")
// document.write("First index of the array:" + indexofCar1 + "<br/>")
// document.write("Car at first index of the array: " + cars[0] + "<br/>")
// document.write("Last index of the array: " + indexofCar4 + "<br/>")
// document.write("Car at last index of the array: " + cars[3])

// question 11

// var stdnames = ["Basil","Alyan","Awab"]
// var score = [320,230,480]
// var total = [500]
// document.write(`Score of ${stdnames[0]} is ${score[0]}. Percentage: ${score[0] / total * 100}% <br/>`)
// document.write(`Score of ${stdnames[1]} is ${score[1]}. Percentage: ${score[1] / total * 100}% <br/>`)
// document.write(`Score of ${stdnames[2]} is ${score[2]}. Percentage: ${score[2] / total * 100}%`)

// question 12

// var askcolor = prompt("enter your color to add in beginning")
// var colors = ["pink","green","black"]
// colors.unshift(askcolor)                                      // it will add in the first 
// document.write(colors.join(" "))

// var askcolor = prompt("enter your color to add in end")
// var colors = ["pink","green","black"]
// colors.push(askcolor)                                      // it will add in the last
// document.write(colors.join(" "))

// var askcolor = prompt("enter two colors to add in beginning")
// var colors = ["pink","green","black"]
// colors.unshift(askcolor)                                  // it will add in the first
// document.write(colors.join(" "))

// var colors = ["pink","green","black"]
// colors.shift()                                           // it will delete from the first 
// document.write(colors.join(" "))

// var colors = ["pink","green","black"]
// colors.pop()                                              // it will delete from the last
// document.write(colors.join(" "))

// var askindex = prompt("in which index you want to enter your color")
// var askcolor = prompt("enter your color")
// var colors = ["pink","green","black","red"]
// colors.splice(askindex , 0 , askcolor)                    // its first argument will select that from where you want to add and second is the numbers of index you want to delete and third is the value you want to add
// document.write(colors.join(" "))


// var askindex = prompt("from which index you want to delete")
// var askcolor = prompt("enter, how many colors you want to delete")
// var colors = ["pink","green","black","purple","orange","brown"]
// colors.splice(askindex,askcolor)
// document.write(colors.join(" "))


// question 13

// var score = [320,230,480,120]
// var sortedscore = score.sort()
// document.write(`Score of Students: ${score} <br/>`)
// document.write(`Ordered Score os Students ${sortedscore}`)

// question 14

// var fruits = ["strawberry", "apple", "orange", "banana"]
// var sortedfruits = fruits.sort()
// document.write(`Fruits list: <br/> ${fruits} <br/>`)
// document.write(`Ordered fruits list: <br/> ${sortedfruits}`)

// question 15

// var cities = ["karachi","Lahore","Islamabad","Quetta","Peshawar"]
// var newcities = cities.slice(2,4)
// document.write(`Cities List: <br/> ${cities} <br/>`)
// document.write(`Selected cities list: ${newcities}`)

// question 16

// var arr = ["This","is","my","cat"]
// var array = arr.join(" ")
// document.write(array)

// question 17

// var values = ["Keyboard","Mouse","Printer","Monitor"]
// document.write(`Devices <br/> ${values} <br/> <br/> Out <br/>${values[0]} <br/> Out <br/>${values[1]} <br/> Out <br/>${values[2]}<br/> Out <br/>${values[3]}`)

// question 18


// var values = ["Keyboard","Mouse","Printer","Monitor"]
// // var reversevalues = values.reverse()
// document.write(`Devices <br/> ${values} <br/> <br/> Out <br/>${values[3]} <br/> Out <br/>${values[2]} <br/> Out <br/>${values[1]}<br/> Out <br/>${values[0]}`)

// question 20

// var arrayOfArrays = [[],[],[]]

// question 21

// var arrayOfArrays = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]






// const deeplyNestedArray = [[[[1, 2],[3, 4]],[[5, 6],[7, 8]]],[[[9, 10],[11, 12]],[[13, 14],[15, 16]]],[[[17, 18],[19, 20]],[[21, 22],[23, 24]]]];
// document.write(`This is nested array ${deeplyNestedArray} <br/> The lsat number of this nested array is ${deeplyNestedArray[2][1][1][1]}.`)
  
