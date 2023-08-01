const actionLocalStorage = {
     nameLocalStorage: 'cities',
     getCitiesArray(){
          return JSON.parse(localStorage.getItem(this.nameLocalStorage))
     },
     checkLocalStorage(){
          if(localStorage.length <= 0) {
               return []
          } else {
               return this.getCitiesArray()
          }
     },
     setNewCity(newCity){
          const lsItems = this.checkLocalStorage()
          lsItems.push(newCity)
          const JSONlsItems = JSON.stringify(lsItems)
          localStorage.setItem(this.nameLocalStorage, JSONlsItems)
     },
}

export default actionLocalStorage