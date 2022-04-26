import { Ingredient } from "../shared/Ingredient.model";

export class Recipe{
    public name:string;
    public description;
    public imagePath;
    public ingredients

    constructor(name:string,description:string,imagePath:string,ingredients:Ingredient[]){
        this.name = name;
        this.description=description;
        this.imagePath=imagePath;
        this.ingredients = ingredients
    }
}