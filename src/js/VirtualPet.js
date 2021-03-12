//let virtualPetName = "fluffy";

class VirtualPet{
    constructor(name){
    this._name = name;
    this._hunger = 50;
    }
    feed(){
        this._hunger -= 10;
    }
    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
}