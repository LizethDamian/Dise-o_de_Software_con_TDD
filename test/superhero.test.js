const Superhero = require("weekly_mission_3\spiderverse\App\Superhero.js")

describe("Unit Test for Superhero", () => {

    test('Case 1: Use method getInfo()', () => {
        const Tom = new Superhero("Spiderman3", 25, "Tom Holland", 29, "Marvel studio")

        expect(Tom.getInfo()).toBe("Hey i'm Tom Holland from Marvel studio")
    });

    /*test('Case 1: Get a superhero', () => {
        const Tom = new Superhero("Spiderman3", 25, "Tom Holland", 29, "Sony")

        expect(Tom.name).toBe("Spiderman3")
        expect(Tom.age).toBe(25)
        expect(Tom.actor).toBe("Tom Holland")
        expect(Tom.peliculas).toBe(29)
        expect(Tom.estudio).toBe("Sony")
    });
     test('Case 2: Get a new Superhero', () => {
         const Andrew = new Superhero("Spiderman2", 38, "Andrew Garfield", 39, "Sony")

         expect(Andrew.name).toBe("Spiderman2")
         expect(Andrew.age).toBe(38)
         expect(Andrew.actor).toBe("Andrew Garfield")
         expect(Andrew.peliculas).toBe(39)
         expect(Andrew.estudio).toBe("Sony")
     });
     test('Case 3: Get a first superhero', () => {
         const Tobey = new Superhero("Spiderman1", 46, "Tobey Maguire", 49, "Sony")

         expect(Tobey.name).toBe("Spiderman1")
         expect(Tobey.age).toBe(46)
         expect(Tobey.actor).toBe("Tobey Maguire")
         expect(Tobey.peliculas).toBe(49)
         expect(Tobey.estudio).toBe("Sony")
     });*/

})