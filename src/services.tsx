const generateId = (data: object[]) => {
    let idList: number[] = [];
    data.forEach((item: any) => idList.push(item.id));
    while(true){
        let newId: number = Math.round(Math.random() * (99999-10000) + 1);
        if(!idList.includes(newId)){
            return newId;
        }
    }
    
}

export default generateId;