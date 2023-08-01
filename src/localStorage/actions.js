const actionsLocalStorage = {
     nameLocalStorage: 'cities',
     getCitiesArray(){
          if(localStorage.length <= 0) {
               return []
          } else {
               return JSON.parse(localStorage.getItem(this.nameLocalStorage))
          }
     },
     setNewCity(newCity){
          const lsItems = this.getCitiesArray()
          lsItems.push(newCity)
          const JSONlsItems = JSON.stringify(lsItems)
          localStorage.setItem(this.nameLocalStorage, JSONlsItems)
     },
     deleteCity(city){
          if(this.getCitiesArray().length){
               console.log('1')
               let filteredArray =  this.getCitiesArray().filter(e=>e != city)
               localStorage.setItem(this.nameLocalStorage, JSON.stringify(filteredArray))
          } else {
               console.log('2')
               return this.getCitiesArray()
          }
     }
}

export default actionsLocalStorage