const actionsLocalStorage = {
    nameLocalStorage: "cities",
    getCitiesArray(): any[] {
        const data = localStorage.getItem(this.nameLocalStorage);
        if (data == null) {
            return [];
        } else {
            return JSON.parse(data);
        }
    },
    setNewCity(newCity: string): void {
        const lsItems = this.getCitiesArray();
        lsItems.push(newCity);
        const JSONlsItems = JSON.stringify(lsItems);
        localStorage.setItem(this.nameLocalStorage, JSONlsItems);
    },
    deleteCity(city: string): void | string[] {
        if (this.getCitiesArray().length) {
            const filteredArray = this.getCitiesArray().filter(
                (e) => e != city
            );
            localStorage.setItem(
                this.nameLocalStorage,
                JSON.stringify(filteredArray)
            );
        } else {
            return this.getCitiesArray();
        }
    },
};

export default actionsLocalStorage;
