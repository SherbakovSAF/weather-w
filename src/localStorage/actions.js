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
}

export default actionsLocalStorage