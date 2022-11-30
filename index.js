/*  we're going to build our own shape calculator!
First, let's create a class of Circle. Circle will accept 1 parameter, radius, and use this.radius to store the value
Use Math.PI to get an accurate measurement of pi Links to an external site.(π)
Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
Define setter methods for diameter, circumference, and area which will accept values for each calculation, 
calculate the radius based on the input value and set this.radius accordingly
Hint: You will need to use Math.sqrt() Links to an external site.in your area setter method

Formula for calculating Diameter: Diameter = radius • 2
Formula for calculating Circumference: Circumference = π • diameter
Formula for calculating Area : Area = π • radius sqaured

All instances of Circle should be able to calculate the diameter, circumference, and area based on the given radius. 
All instances should also be able to set this.radius by setting a value to diameter, circumference, or area. */

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return 2 * this.radius;
    }
    set diameter(newDiameter) {
        this.radius = newDiameter / 2; 
    } 
    get circumference(){
        return Math.PI * this.diameter;
    }
    set circumference(newCircumference){
        this.radius = newCircumference / (2 * Math.PI );
    }
    get area(){
        return Math.PI * this.radius * this.radius ;
    }
    set area(newArea){
        this.radius = Math.sqrt(newArea / Math.PI)  ;
    } 
}