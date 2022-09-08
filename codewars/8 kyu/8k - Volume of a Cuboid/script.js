// Bob needs a fast way to calculate the volume of a cuboid with three values:
// the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// objętość prostopadłościan

// https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript

class Kata {
    static getVolumeOfCuboid(length, width, height) {
        return length * width * height
    }

}

Kata.getVolumeOfCuboid(10,2,4)